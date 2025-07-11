'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Cpu, Zap, Upload, Play, Pause, Minus, Plus } from 'lucide-react';

type FrequencyBar = {
  id: number;
  height: number;
  delay: number;
};

const FrequencyAnalyzer = () => {
  const [currentFrequency, setCurrentFrequency] = useState(440);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [status, setStatus] = useState('Ready');
  const [rmsLevel, setRmsLevel] = useState(-12);
  const [peakFreq, setPeakFreq] = useState(440);
  const [frequencyBars, setFrequencyBars] = useState<FrequencyBar[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize frequency bars
  useEffect(() => {
    const initializeBars = () => {
      const barCount = window.innerWidth < 640 ? 16 : 20;
      const bars = Array.from({ length: barCount }).map((_, index) => ({
        id: index,
        height: Math.random() * 120 + 20,
        delay: index * 0.1
      }));
      setFrequencyBars(bars);
    };

    initializeBars();
    window.addEventListener('resize', initializeBars);
    return () => window.removeEventListener('resize', initializeBars);
  }, []);

  // Animate frequency bars
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setFrequencyBars(prev => 
          prev.map(bar => ({
            ...bar,
            height: Math.random() * 120 + 20
          }))
        );
        animationRef.current = setTimeout(animate, 150);
      };
      animate();
    } else if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isPlaying]);

  // Update RMS level simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRmsLevel(-Math.random() * 30 - 5);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const initAudioContext = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
  };

  const startFrequencyGenerator = async () => {
    try {
      await initAudioContext();
      
      if (!audioContextRef.current) {
        throw new Error('AudioContext is not initialized');
      }
      oscillatorRef.current = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      
      oscillatorRef.current.type = 'sine';
      oscillatorRef.current.frequency.value = currentFrequency;
      gainNode.gain.value = 0.1;
      
      oscillatorRef.current.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      oscillatorRef.current.start();
      setIsPlaying(true);
      setStatus('Playing');
      setPeakFreq(currentFrequency);
    } catch (error) {
      console.error('Error starting audio:', error);
      setStatus('Error');
    }
  };

  const stopFrequencyGenerator = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
      setIsPlaying(false);
      setStatus('Stopped');
    }
  };

interface UpdateFrequencyParams {
    newFreq: number;
}

const updateFrequency = (newFreq: UpdateFrequencyParams['newFreq']): void => {
    const clampedFreq: number = Math.max(20, Math.min(2000, newFreq));
    setCurrentFrequency(clampedFreq);
    setPeakFreq(clampedFreq);

    if (oscillatorRef.current) {
        oscillatorRef.current.frequency.value = clampedFreq;
    }
};

interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleFileUpload = (event: FileUploadEvent) => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
        setAudioFile(file);
        setStatus('File Loaded');
        setTimeout(() => setStatus('Ready'), 2000);
    }
};

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-32 bg-white dark:bg-satin-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wide mb-4 sm:mb-8">
            Frequency
            <span className="text-yellow-600 dark:text-yellow-400"> Response</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our speakers deliver ruler-flat frequency response across the entire audible spectrum, 
            ensuring every note is reproduced with mathematical precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Interactive Frequency Analyzer */}
          <div className="order-2 lg:order-1">
            <div className="bg-warm-gray dark:bg-deep-black rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                Live Frequency Analysis
              </h3>
              
              {/* Animated Frequency Bars */}
              <div className="flex items-end justify-center space-x-1 sm:space-x-2 h-32 sm:h-40 mb-6">
                {frequencyBars.map((bar) => (
                  <div
                    key={bar.id}
                    className="bg-yellow-600 dark:bg-yellow-400 rounded-t transition-all duration-300"
                    style={{
                      width: window.innerWidth < 640 ? '12px' : '16px',
                      height: `${bar.height}px`,
                      opacity: isPlaying ? 1 : 0.7
                    }}
                  />
                ))}
              </div>
              
              {/* Frequency Info */}
              <div className="text-center mb-6">
                <div className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
                  <span>{currentFrequency}</span>Hz | ±0.5dB
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  THD: &lt;0.1% | SNR: &gt;120dB
                </div>
              </div>
              
              {/* Frequency Controls */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => updateFrequency(currentFrequency - 50)}
                    className="flex items-center justify-center space-x-2 bg-white dark:bg-satin-black text-black dark:text-gold-glow light:bg-satin-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <Minus size={16} />
                    <span>50Hz</span>
                  </button>
                  
                  <button
                    onClick={isPlaying ? stopFrequencyGenerator : startFrequencyGenerator}
                    className="flex items-center justify-center space-x-2  dark:text-gold-glow text-black px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    <span>{isPlaying ? 'Stop' : 'Play'}</span>
                  </button>
                  
                  <button
                    onClick={() => updateFrequency(currentFrequency + 50)}
                    className="flex items-center justify-center space-x-2 dark:text-gold-glow text-black bg-white dark:bg-satin-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <Plus size={16} />
                    <span>50Hz</span>
                  </button>
                </div>
                
                {/* Frequency Slider */}
                <div className="px-2 sm:px-4">
                  <input
                    type="range"
                    min="20"
                    max="2000"
                    value={currentFrequency}
                    onChange={(e) => updateFrequency(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20Hz</span>
                    <span>2kHz</span>
                  </div>
                </div>
              </div>
              
              {/* File Upload Area */}
              <div className="mt-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-all duration-300 hover:border-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Upload audio file to analyze
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Choose File
                  </button>
                </div>
                {audioFile && (
                  <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
                    <div className="text-green-600 dark:text-green-400">
                      <strong>File:</strong> {audioFile.name}<br />
                      <strong>Size:</strong> {(audioFile.size / 1024 / 1024).toFixed(2)} MB<br />
                      <strong>Type:</strong> {audioFile.type}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center space-x-4">
              <Volume2 className="text-yellow-600 dark:text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Extended Range
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  From sub-bass fundamentals to air frequencies, every detail preserved
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Cpu className="text-yellow-600 dark:text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Digital Precision
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  DSP-corrected response ensures consistent performance
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Zap className="text-yellow-600 dark:text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Zero Phase Shift
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Linear phase crossovers maintain temporal accuracy
                </p>
              </div>
            </div>
            
            {/* Real-time Analysis Info */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Real-time Analysis
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Peak Frequency:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                    {peakFreq} Hz
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">RMS Level:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                    {rmsLevel.toFixed(1)} dB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Status:</span>
                  <span className={`font-medium ${
                    status === 'Playing' ? 'text-green-500' : 
                    status === 'Stopped' ? 'text-red-500' : 
                    status === 'File Loaded' ? 'text-blue-500' : 
                    'text-green-500'
                  }`}>
                    {status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequencyAnalyzer;
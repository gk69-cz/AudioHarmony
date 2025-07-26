import React, { useState, useRef } from 'react';
import { Download, FileText, Printer, Eye } from 'lucide-react';

// Mock product data structure - replace with your actual product data
const mockProduct = {
  id: 'phantom-sub-12',
  title: 'Phantom Sub 12',
  category: 'Subwoofer',
  price: '$2,499',
  description: 'Experience earth-shaking bass with precision engineering. The Phantom Sub 12 delivers uncompromising low-frequency performance for the most demanding audio enthusiasts.',
  image: '/api/placeholder/600/400',
  features: [
    '500W RMS / 1000W Peak Power Output',
    '20Hz - 150Hz Frequency Response',
    'Variable Low-Pass Filter (50-150Hz)',
    'Phase Control (0° - 180°)',
    'XLR and RCA Input Options',
    'Custom 12" Long-Throw Driver',
    'Ported MDF Enclosure Design',
    'Magnetic Shielding Technology'
  ],
  specifications: {
    'Power Output': '500W RMS / 1000W Peak',
    'Frequency Response': '20Hz - 150Hz (±3dB)',
    'Dimensions (H×W×D)': '450 × 400 × 500mm',
    'Weight': '22kg',
    'Impedance': '4 Ohms',
    'SPL': '115dB Max',
    'Crossover': 'Variable 50-150Hz',
    'Inputs': 'XLR, RCA',
    'Finish': 'Black Satin'
  },
  categoryDetails: {
    crossoverFrequency: '50-150Hz Variable',
    powerOutput: '500W RMS / 1000W Peak',
    enclosureType: 'Ported MDF',
    lowPassFilter: true,
    phaseControl: true,
    inputs: 'XLR, RCA'
  }
};

const PDFBrochureGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(mockProduct);
  const brochureRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      // Create a blob with HTML content for PDF
      const htmlContent = brochureRef.current ? brochureRef.current.innerHTML : '';
      const blob = new Blob([createPDFHTML(selectedProduct)], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      // Create download link
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedProduct.title.replace(/\s+/g, '-').toLowerCase()}-brochure.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsGenerating(false);
    }, 2000);
  };

  const createPDFHTML = (product: { id?: string; title: any; category: any; price: any; description: any; image?: string; features: any; specifications: any; categoryDetails?: { crossoverFrequency: string; powerOutput: string; enclosureType: string; lowPassFilter: boolean; phaseControl: boolean; inputs: string; }; }) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.title} - Premium Audio Brochure</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Roboto+Mono:wght@400;500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #ffffff;
            line-height: 1.6;
        }
        
        .brochure-container {
            max-width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: #000000;
            position: relative;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            padding: 30px 40px;
            position: relative;
            border-bottom: 2px solid #DAA520;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><path d="M0 10 Q25 0 50 10 T100 10 V20 H0 Z" fill="%23DAA520" opacity="0.1"/></svg>') repeat-x;
            background-size: 200px 20px;
        }
        
        .logo-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            z-index: 2;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 900;
            color: #DAA520;
            letter-spacing: -1px;
        }
        
        .tagline {
            font-size: 14px;
            color: #cccccc;
            font-weight: 300;
            letter-spacing: 1px;
        }
        
        .category-badge {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
            color: #000000;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .hero-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
            min-height: 400px;
        }
        
        .product-image {
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1a1a1a 0%, #000000 70%);
            border-radius: 16px;
            position: relative;
            overflow: hidden;
        }
        
        .product-image::before {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #DAA520, transparent);
            border-radius: 50%;
            opacity: 0.1;
            animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.2); opacity: 0.2; }
        }
        
        .product-image img {
            max-width: 100%;
            max-height: 300px;
            object-fit: contain;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 20px 40px rgba(218, 165, 32, 0.3));
        }
        
        .product-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .product-title {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #ffffff 0%, #DAA520 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.1;
        }
        
        .product-price {
            font-size: 36px;
            font-weight: 700;
            color: #DAA520;
            margin-bottom: 20px;
        }
        
        .product-description {
            font-size: 16px;
            color: #cccccc;
            margin-bottom: 30px;
            line-height: 1.8;
        }
        
        .key-highlight {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
            color: #000000;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            font-size: 14px;
        }
        
        .specifications-section {
            padding: 40px;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .section-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 30px;
            text-align: center;
            color: #DAA520;
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        
        .features-column, .specs-column {
            background: rgba(26, 26, 26, 0.5);
            padding: 24px;
            border-radius: 12px;
            border: 1px solid rgba(218, 165, 32, 0.2);
        }
        
        .column-title {
            font-size: 20px;
            font-weight: 600;
            color: #DAA520;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .column-title::before {
            content: '';
            width: 4px;
            height: 20px;
            background: linear-gradient(135deg, #DAA520, #FFD700);
            border-radius: 2px;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
            padding: 8px 0;
        }
        
        .feature-bullet {
            width: 6px;
            height: 6px;
            background: #DAA520;
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
        }
        
        .feature-text {
            font-size: 14px;
            color: #e0e0e0;
        }
        
        .spec-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(218, 165, 32, 0.1);
        }
        
        .spec-row:last-child {
            border-bottom: none;
        }
        
        .spec-label {
            font-size: 14px;
            color: #cccccc;
            font-weight: 400;
        }
        
        .spec-value {
            font-size: 14px;
            color: #DAA520;
            font-weight: 600;
            font-family: 'Roboto Mono', monospace;
        }
        
        .category-details {
            padding: 40px;
            background: #000000;
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        
        .footer {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            padding: 30px 40px;
            border-top: 2px solid #DAA520;
            margin-top: auto;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .company-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .company-name {
            font-size: 18px;
            font-weight: 700;
            color: #DAA520;
        }
        
        .contact-info {
            font-size: 12px;
            color: #cccccc;
        }
        
        .copyright {
            font-size: 12px;
            color: #888888;
        }
        
        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            .brochure-container {
                box-shadow: none;
                margin: 0;
                max-width: none;
            }
        }
    </style>
</head>
<body>
    <div class="brochure-container">
        <header class="header">
            <div class="logo-section">
                <div>
                    <div class="logo">Zero dB</div>
                    <div class="tagline">SILENCE REDEFINED. POWER AMPLIFIED.</div>
                </div>
                <div class="category-badge">${product.category}</div>
            </div>
        </header>
        
        <section class="hero-section">
            <div class="product-image">
                <div style="width: 300px; height: 200px; background: linear-gradient(135deg, #333, #666); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #DAA520; font-size: 18px; font-weight: 600;">
                    ${product.title}
                </div>
            </div>
            
            <div class="product-info">
                <h1 class="product-title">${product.title}</h1>
                <div class="product-price">${product.price}</div>
                <p class="product-description">${product.description}</p>
                <div class="key-highlight">
                    ${product.features[0] || 'Premium Audio Excellence'}
                </div>
            </div>
        </section>
        
        <section class="specifications-section">
            <h2 class="section-title">Technical Excellence</h2>
            <div class="specs-grid">
                <div class="features-column">
                    <h3 class="column-title">Key Features</h3>
                    ${product.features.slice(0, 6).map((feature: any) => `
                        <div class="feature-item">
                            <div class="feature-bullet"></div>
                            <div class="feature-text">${feature}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="specs-column">
                    <h3 class="column-title">Specifications</h3>
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <div class="spec-row">
                            <span class="spec-label">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        
        ${getCategorySpecificContent(product)}
        
        <footer class="footer">
            <div class="footer-content">
                <div class="company-info">
                    <div class="company-name">Zero dB Audio Technologies</div>
                    <div class="contact-info">www.zerodb.audio | support@zerodb.audio</div>
                </div>
                <div class="copyright">© 2025 Zero dB. All rights reserved.</div>
            </div>
        </footer>
    </div>
</body>
</html>`;
  };

  const getCategorySpecificContent = (product: { id?: string | undefined; title?: any; category: any; price?: any; description?: any; image?: string | undefined; features?: any; specifications?: any; categoryDetails?: any; }) => {
      if (!product.categoryDetails) return '';
      
      const categoryContent: Record<'Subwoofer' | 'Tower / Floorstand', string> = {
        'Subwoofer': `
          <section class="category-details">
              <h2 class="section-title">Subwoofer Engineering</h2>
              <div class="details-grid">
                  <div class="features-column">
                      <h3 class="column-title">Audio Performance</h3>
                      <div class="spec-row">
                          <span class="spec-label">Crossover Frequency</span>
                          <span class="spec-value">${product.categoryDetails.crossoverFrequency}</span>
                      </div>
                      <div class="spec-row">
                          <span class="spec-label">Power Output</span>
                          <span class="spec-value">${product.categoryDetails.powerOutput}</span>
                      </div>
                      <div class="spec-row">
                          <span class="spec-label">Enclosure Type</span>
                          <span class="spec-value">${product.categoryDetails.enclosureType}</span>
                      </div>
                  </div>
                  <div class="specs-column">
                      <h3 class="column-title">Control Features</h3>
                      <div class="spec-row">
                          <span class="spec-label">Low Pass Filter</span>
                          <span class="spec-value">${product.categoryDetails.lowPassFilter ? 'Yes' : 'No'}</span>
                      </div>
                      <div class="spec-row">
                          <span class="spec-label">Phase Control</span>
                          <span class="spec-value">${product.categoryDetails.phaseControl ? 'Yes' : 'No'}</span>
                      </div>
                      <div class="spec-row">
                          <span class="spec-label">Input Options</span>
                          <span class="spec-value">${product.categoryDetails.inputs}</span>
                      </div>
                  </div>
              </div>
          </section>
        `,
        // Add other categories as needed
        'Tower / Floorstand': `
          <section class="category-details">
              <h2 class="section-title">Tower Speaker Design</h2>
              <div class="details-grid">
                  <div class="features-column">
                      <h3 class="column-title">Driver Configuration</h3>
                      <div class="spec-row">
                          <span class="spec-label">Driver Array</span>
                          <span class="spec-value">${product.categoryDetails.driverArray || 'N/A'}</span>
                      </div>
                  </div>
                  <div class="specs-column">
                      <h3 class="column-title">Construction</h3>
                      <div class="spec-row">
                          <span class="spec-label">Cabinet Material</span>
                          <span class="spec-value">${product.categoryDetails.cabinetMaterial || 'N/A'}</span>
                      </div>
                  </div>
              </div>
          </section>
        `
      };

      return categoryContent[product.category as keyof typeof categoryContent] || '';
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Premium Audio Brochure Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Generate professional PDF brochures for Zero dB audio equipment
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Generate PDF Brochure
                </>
              )}
            </button>
            
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
              <Eye className="w-4 h-4" />
              Preview
            </button>
            
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
              <Printer className="w-4 h-4" />
              Print Ready
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Live Preview</h2>
            <p className="text-gray-400">Current product: {selectedProduct.title}</p>
          </div>
          
          <div ref={brochureRef} className="bg-black rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            {/* Mini Preview */}
            <div className="aspect-[210/297] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-black to-gray-900 p-6 border-b-2 border-yellow-500">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black text-yellow-500">Zero dB</div>
                    <div className="text-xs text-gray-400 tracking-widest">SILENCE REDEFINED. POWER AMPLIFIED.</div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {selectedProduct.category}
                  </div>
                </div>
              </div>
              
              {/* Hero Section */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded mb-2 mx-auto"></div>
                      <div className="text-xs text-yellow-500">{selectedProduct.title}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
                      {selectedProduct.title}
                    </h3>
                    <div className="text-yellow-500 font-bold text-sm">{selectedProduct.price}</div>
                    <p className="text-xs text-gray-400 line-clamp-3">{selectedProduct.description}</p>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-gray-800/50 rounded p-3">
                    <div className="text-yellow-500 font-semibold mb-2">Key Features</div>
                    {selectedProduct.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-1 mb-1">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-800/50 rounded p-3">
                    <div className="text-yellow-500 font-semibold mb-2">Specifications</div>
                    {Object.entries(selectedProduct.specifications).slice(0, 4).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center mb-1">
                        <span className="text-gray-400 text-xs">{key.length > 12 ? key.substring(0, 12) + '...' : key}</span>
                        <span className="text-yellow-500 text-xs font-mono">{typeof value === 'string' && value.length > 8 ? value.substring(0, 8) + '...' : value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-gray-900 p-4 border-t-2 border-yellow-500">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <div className="text-yellow-500 font-bold">Zero dB Audio Technologies</div>
                    <div className="text-gray-400">www.zerodb.audio</div>
                  </div>
                  <div className="text-gray-500">© 2025 Zero dB. All rights reserved.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              The generated PDF will be full-size A4 format with high-resolution graphics and print-ready quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFBrochureGenerator;
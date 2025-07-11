// import { Navigation } from '@/components/navigation'
// import { CustomCursor } from '@/components/custom-cursor'
// import { Footer } from '@/components/footer'
// import { motion, AnimatePresence } from 'framer-motion'
// import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'
// import { 
//   Download, 
//   Play, 
//   CheckCircle, 
//   RotateCcw, 
//   ZoomIn, 
//   ZoomOut, 
//   Move3D,
//   MessageCircle,
//   Phone,
//   FileText,
//   Video,
//   Wrench,
//   MapPin
// } from 'lucide-react'
// import { MagneticButton } from '@/components/magnetic-button'
// import { useState } from 'react'
// import { Speaker3D } from '@/components/speaker-3d'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

// export default function Assembly() {
//   const [assemblyStep, setAssemblyStep] = useState(0)
//   const [isExploded, setIsExploded] = useState(true)
//   const [selectedPart, setSelectedPart] = useState<string | null>(null)
//   const [completedSteps, setCompletedSteps] = useState<number[]>([])
//   const [isAssemblyStarted, setIsAssemblyStarted] = useState(false)

//   const assemblySteps = [
//     {
//       id: 0,
//       title: 'Prepare Base Cabinet',
//       description: 'Mount the cabinet base and ensure proper alignment',
//       part: 'cabinet',
//       completed: false
//     },
//     {
//       id: 1,
//       title: 'Install Woofer Driver',
//       description: 'Carefully mount the 8-inch woofer with gasket seal',
//       part: 'woofer',
//       completed: false
//     },
//     {
//       id: 2,
//       title: 'Mount Tweeter Assembly',
//       description: 'Position the titanium dome tweeter in housing',
//       part: 'tweeter',
//       completed: false
//     },
//     {
//       id: 3,
//       title: 'Connect Crossover Network',
//       description: 'Wire the custom crossover board to drivers',
//       part: 'crossover',
//       completed: false
//     },
//     {
//       id: 4,
//       title: 'Install Port Tube',
//       description: 'Mount bass reflex port for optimal tuning',
//       part: 'port',
//       completed: false
//     },
//     {
//       id: 5,
//       title: 'Final Assembly',
//       description: 'Secure front baffle and perform acoustic test',
//       part: 'baffle',
//       completed: false
//     }
//   ]

//   const speakerParts = [
//     {
//       id: 'cabinet',
//       name: 'Cabinet Base',
//       material: 'Multi-layer MDF with damping',
//       specs: '45cm H x 25cm W x 30cm D',
//       color: '#8B4513'
//     },
//     {
//       id: 'woofer',
//       name: '8" Woofer Driver',
//       material: 'Carbon fiber cone, rubber surround',
//       specs: '40Hz-2kHz, 100W RMS',
//       color: '#2C2C2C'
//     },
//     {
//       id: 'tweeter',
//       name: 'Titanium Tweeter',
//       material: 'Titanium dome with neodymium magnet',
//       specs: '2kHz-20kHz, 50W RMS',
//       color: '#C0C0C0'
//     },
//     {
//       id: 'crossover',
//       name: 'Crossover Network',
//       material: 'Custom PCB with premium components',
//       specs: '2-way, 12dB/octave slope',
//       color: '#006400'
//     },
//     {
//       id: 'port',
//       name: 'Bass Reflex Port',
//       material: 'Precision-molded ABS',
//       specs: '5cm diameter, 15cm length',
//       color: '#1C1C1C'
//     },
//     {
//       id: 'baffle',
//       name: 'Front Baffle',
//       material: 'Acoustic fabric over MDF',
//       specs: 'Removable grille design',
//       color: '#3C3C3C'
//     }
//   ]

//   const regionalServices = [
//     {
//       region: 'India',
//       flag: '🇮🇳',
//       availability: 'In Stock',
//       services: ['DIY Kits Available', 'Video Support', 'Local Pickup'],
//       contact: '+91-800-ZERO-DB'
//     },
//     {
//       region: 'Ireland',
//       flag: '🇮🇪',
//       availability: 'Assembly Lab',
//       services: ['Hands-on Workshop', 'Custom Build', 'Expert Guidance'],
//       contact: '+353-800-ZERO-DB'
//     },
//     {
//       region: 'UAE',
//       flag: '🇦🇪',
//       availability: 'Distribution Hub',
//       services: ['Express Shipping', 'Technical Support', 'Group Sessions'],
//       contact: '+971-800-ZERO-DB'
//     }
//   ]

//   const downloadableResources = [
//     {
//       type: 'PDF',
//       title: 'Complete Assembly Guide',
//       description: 'Step-by-step instructions with diagrams',
//       icon: FileText,
//       size: '12.5 MB'
//     },
//     {
//       type: 'Video',
//       title: 'Assembly Walkthrough',
//       description: 'Expert demonstration of build process',
//       icon: Video,
//       duration: '24 min'
//     },
//     {
//       type: 'PDF',
//       title: 'Wiring Diagrams',
//       description: 'Detailed electrical schematics',
//       icon: FileText,
//       size: '3.2 MB'
//     },
//     {
//       type: 'PDF',
//       title: 'Tool Checklist',
//       description: 'Required tools and safety guidelines',
//       icon: Wrench,
//       size: '1.1 MB'
//     }
//   ]



//   const handlePartClick = (partId: string) => {
//     setSelectedPart(selectedPart === partId ? null : partId)
//   }

//   const completeStep = (stepId: number) => {
//     if (!completedSteps.includes(stepId)) {
//       setCompletedSteps([...completedSteps, stepId])
//       setAssemblyStep(Math.min(stepId + 1, assemblySteps.length - 1))
//     }
//   }

//   return (
//     <>
//       <CustomCursor />
//       <Navigation />
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center relative overflow-hidden">
//           <div 
//             className="absolute inset-0 parallax-bg"
//             style={{
//               backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
//             }}
//           />
//           <div className="absolute inset-0 bg-jet-black/80 dark:bg-deep-black/90" />
          
//           {/* Animated floating speaker parts */}
//           <div className="absolute inset-0 overflow-hidden">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <motion.div
//                 key={index}
//                 className="absolute w-20 h-20 opacity-10"
//                 style={{
//                   left: `${20 + index * 15}%`,
//                   top: `${30 + (index % 3) * 20}%`
//                 }}
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, 360],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{
//                   duration: 8 + index * 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <div className="w-full h-full bg-gold-accent rounded-lg" />
//               </motion.div>
//             ))}
//           </div>
          
//           <div className="relative max-w-8xl mx-auto px-6 lg:px-10 py-20 w-full text-center">
//             <motion.div
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//             >
//               <h1 className="text-6xl lg:text-8xl font-black tracking-wide mb-8 text-white">
//                 Build Sound.
//                 <span className="text-gold-accent dark:text-gold-glow block">Piece by Piece.</span>
//               </h1>
//               <p className="text-xl lg:text-2xl text-soft-white/90 max-w-4xl mx-auto mb-12">
//                 Experience the art of speaker assembly through our interactive 3D builder. 
//                 Learn, build, and perfect your craft with Zero dB precision.
//               </p>
              
//               <MagneticButton 
//                 variant="primary" 
//                 size="lg" 
//                 onClick={() => setIsAssemblyStarted(true)}
//                 className="text-xl px-12 py-4"
//               >
//                 Enter Assembly Environment
//               </MagneticButton>
//             </motion.div>
//           </div>
//         </section>

//         {/* 3D Assembly Interface */}
//         {isAssemblyStarted && (
//           <section className="min-h-screen bg-warm-gray dark:bg-deep-black py-20">
//             <div className="max-w-8xl mx-auto px-6 lg:px-10">
//               <div className="grid lg:grid-cols-4 gap-8 h-full">
                
//                 {/* Assembly Steps Sidebar */}
//                 <div className="lg:col-span-1 space-y-6">
//                   <Card className="bg-white dark:bg-satin-black">
//                     <CardHeader>
//                       <CardTitle className="text-xl text-jet-black dark:text-soft-white">
//                         Assembly Steps
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       {assemblySteps.map((step, index) => (
//                         <motion.div
//                           key={step.id}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                             completedSteps.includes(step.id)
//                               ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
//                               : assemblyStep === step.id
//                               ? 'border-gold-accent dark:border-gold-glow bg-gold-accent/10'
//                               : 'border-warm-gray dark:border-platinum/20'
//                           }`}
//                           onClick={() => completeStep(step.id)}
//                         >
//                           <div className="flex items-center space-x-3">
//                             {completedSteps.includes(step.id) ? (
//                               <CheckCircle className="w-6 h-6 text-green-500" />
//                             ) : (
//                               <div className="w-6 h-6 rounded-full border-2 border-platinum dark:border-soft-white/60" />
//                             )}
//                             <div>
//                               <div className="font-semibold text-sm text-jet-black dark:text-soft-white">
//                                 {step.title}
//                               </div>
//                               <div className="text-xs text-platinum dark:text-soft-white/70">
//                                 {step.description}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </CardContent>
//                   </Card>

//                   {/* 3D Controls */}
//                   <Card className="bg-white dark:bg-satin-black">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-jet-black dark:text-soft-white">
//                         3D Controls
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setIsExploded(!isExploded)}
//                         className="w-full"
//                       >
//                         <Move3D className="w-4 h-4 mr-2" />
//                         {isExploded ? 'Assemble View' : 'Exploded View'}
//                       </Button>
                      
//                       <div className="grid grid-cols-3 gap-2">
//                         <Button variant="outline" size="sm">
//                           <ZoomIn className="w-4 h-4" />
//                         </Button>
//                         <Button variant="outline" size="sm">
//                           <RotateCcw className="w-4 h-4" />
//                         </Button>
//                         <Button variant="outline" size="sm">
//                           <ZoomOut className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 {/* Central 3D Canvas */}
//                 <div className="lg:col-span-2">
//                   <Card className="h-[600px] bg-white dark:bg-satin-black">
//                     <CardContent className="p-0 h-full">
//                       <Speaker3D
//                         isExploded={isExploded}
//                         selectedPart={selectedPart}
//                         onPartClick={handlePartClick}
//                         completedSteps={completedSteps}
//                       />
//                     </CardContent>
//                   </Card>
                  
//                   {/* Part Information Panel */}
//                   <AnimatePresence>
//                     {selectedPart && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         className="mt-4"
//                       >
//                         <Card className="bg-white dark:bg-satin-black">
//                           <CardContent className="p-6">
//                             {(() => {
//                               const part = speakerParts.find(p => p.id === selectedPart)
//                               return part ? (
//                                 <div>
//                                   <h3 className="text-xl font-bold mb-3 text-jet-black dark:text-soft-white">
//                                     {part.name}
//                                   </h3>
//                                   <div className="grid md:grid-cols-2 gap-4 text-sm">
//                                     <div>
//                                       <span className="font-semibold text-platinum dark:text-soft-white/80">Material:</span>
//                                       <div className="text-jet-black dark:text-soft-white">{part.material}</div>
//                                     </div>
//                                     <div>
//                                       <span className="font-semibold text-platinum dark:text-soft-white/80">Specifications:</span>
//                                       <div className="text-jet-black dark:text-soft-white">{part.specs}</div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               ) : null
//                             })()}
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Resources & Services Sidebar */}
//                 <div className="lg:col-span-1 space-y-6">
                  
//                   {/* Downloadable Resources */}
//                   <Card className="bg-white dark:bg-satin-black">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-jet-black dark:text-soft-white">
//                         Resources
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       {downloadableResources.map((resource, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className="p-3 border border-warm-gray dark:border-platinum/20 rounded-lg hover:border-gold-accent dark:hover:border-gold-glow transition-colors cursor-pointer"
//                         >
//                           <div className="flex items-center space-x-3">
//                             <resource.icon className="w-5 h-5 text-gold-accent dark:text-gold-glow" />
//                             <div className="flex-1">
//                               <div className="font-semibold text-sm text-jet-black dark:text-soft-white">
//                                 {resource.title}
//                               </div>
//                               <div className="text-xs text-platinum dark:text-soft-white/70">
//                                 {resource.description}
//                               </div>
//                               <div className="text-xs text-gold-accent dark:text-gold-glow">
//                                 {resource.size || resource.duration}
//                               </div>
//                             </div>
//                             <Download className="w-4 h-4 text-platinum dark:text-soft-white/60" />
//                           </div>
//                         </motion.div>
//                       ))}
//                     </CardContent>
//                   </Card>

//                   {/* Regional Services */}
//                   <Card className="bg-white dark:bg-satin-black">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-jet-black dark:text-soft-white">
//                         Regional Support
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       {regionalServices.map((service, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.15 }}
//                           className="p-3 border border-warm-gray dark:border-platinum/20 rounded-lg"
//                         >
//                           <div className="flex items-center space-x-2 mb-2">
//                             <span className="text-2xl">{service.flag}</span>
//                             <div>
//                               <div className="font-semibold text-sm text-jet-black dark:text-soft-white">
//                                 {service.region}
//                               </div>
//                               <div className="text-xs text-green-600 dark:text-green-400">
//                                 {service.availability}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="space-y-1">
//                             {service.services.map((svc, svcIndex) => (
//                               <div key={svcIndex} className="text-xs text-platinum dark:text-soft-white/70 flex items-center">
//                                 <div className="w-1 h-1 bg-gold-accent dark:bg-gold-glow rounded-full mr-2" />
//                                 {svc}
//                               </div>
//                             ))}
//                           </div>
//                           <div className="text-xs text-gold-accent dark:text-gold-glow mt-2">
//                             {service.contact}
//                           </div>
//                         </motion.div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Floating Support Widget */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 2, duration: 0.5 }}
//           className="fixed bottom-8 right-8 z-50"
//         >
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button className="w-16 h-16 rounded-full bg-gold-accent dark:bg-gold-glow hover:scale-110 transition-transform shadow-2xl">
//                 <MessageCircle className="w-8 h-8 text-jet-black" />
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <DialogHeader>
//                 <DialogTitle>Ask an Engineer</DialogTitle>
//               </DialogHeader>
//               <div className="space-y-4">
//                 <div>
//                   <label className="text-sm font-medium">Your Question</label>
//                   <Textarea placeholder="Describe your assembly question or challenge..." />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Email</label>
//                   <Input placeholder="your.email@example.com" />
//                 </div>
//                 <div className="flex space-x-3">
//                   <Button className="flex-1">
//                     <MessageCircle className="w-4 h-4 mr-2" />
//                     Send Message
//                   </Button>
//                   <Button variant="outline">
//                     <Phone className="w-4 h-4 mr-2" />
//                     Call Now
//                   </Button>
//                 </div>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </motion.div>

//         {/* Final CTA Section */}
//         <section className="py-32 bg-jet-black dark:bg-deep-black">
//           <div className="max-w-8xl mx-auto px-6 lg:px-10 text-center">
//             <motion.div
//               variants={fadeInUp}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8 text-white">
//                 Ready to Build
//                 <span className="text-gold-accent dark:text-gold-glow block">Your Perfect Sound?</span>
//               </h2>
              
//               <p className="text-xl text-soft-white/90 max-w-3xl mx-auto mb-12">
//                 Take the next step in your audio journey. Order a complete DIY kit or 
//                 book a personalized studio session with our master builders.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <MagneticButton variant="primary" size="lg" className="text-xl px-12 py-4">
//                   Order DIY Kit
//                 </MagneticButton>
//                 <MagneticButton variant="outline" size="lg" className="text-xl px-12 py-4 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-jet-black">
//                   Book Studio Session
//                 </MagneticButton>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
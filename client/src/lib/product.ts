export interface Product {
  id: string
  title: string
  price: string
  category: string
  description: string
  image: string
  features: string[]
  specifications: Record<string, string>
  categoryDetails: Record<string, any>
}

export const products: Product[] = [
  // SUBWOOFERS
  {
    id: 'phantom-sub-12',
    title: 'Phantom Sub 12',
    price: '$1,299',
    category: 'Subwoofer',
    description: 'Powerful 12-inch subwoofer delivering deep, accurate bass response for home theater and music systems with exceptional control and precision.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '12" Long-throw Driver with Dual Voice Coils',
      '400W RMS / 800W Peak Power Handling',
      'Frequency Response: 20Hz - 200Hz',
      'Variable Low-Pass Filter (40Hz - 200Hz)',
      'Phase Control: 0° - 180°',
      'Multiple Input Options: Line, LFE, Speaker Level'
    ],
    specifications: {
      'Driver Size': '12 inches',
      'Power Handling': '400W RMS / 800W Peak',
      'Frequency Response': '20Hz - 200Hz (±3dB)',
      'Crossover Frequency': '40Hz - 200Hz (Variable)',
      'Enclosure Type': 'Sealed',
      'Dimensions': '400 x 450 x 400mm',
      'Weight': '22kg',
      'Finish': 'Satin Black'
    },
    categoryDetails: {
      crossoverFrequency: '40Hz - 200Hz (Variable)',
      enclosureType: 'Sealed Cabinet Design',
      powerOutput: '400W RMS / 800W Peak',
      lowPassFilter: true,
      phaseControl: true,
      inputs: 'Line In, LFE, Speaker Level',
      dimensions: '400 x 450 x 400mm',
      weight: '22kg'
    }
  },
  {
    id: 'vortex-sub-15',
    title: 'Vortex Sub 15',
    price: '$1,899',
    category: 'Subwoofer',
    description: 'Premium 15-inch subwoofer engineered for maximum impact and precision, perfect for large rooms and demanding home theater setups.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '15" High-Excursion Driver with Aluminum Cone',
      '600W RMS / 1200W Peak Power Handling',
      'Frequency Response: 18Hz - 180Hz',
      'Digital Signal Processing with Room EQ',
      'Wireless Connectivity Ready',
      'Auto Power On/Off with Signal Sensing'
    ],
    specifications: {
      'Driver Size': '15 inches',
      'Power Handling': '600W RMS / 1200W Peak',
      'Frequency Response': '18Hz - 180Hz (±3dB)',
      'Crossover Frequency': '35Hz - 180Hz (Variable)',
      'Enclosure Type': 'Ported',
      'Dimensions': '480 x 520 x 480mm',
      'Weight': '32kg',
      'Finish': 'Piano Black'
    },
    categoryDetails: {
      crossoverFrequency: '35Hz - 180Hz (Variable)',
      enclosureType: 'Ported Cabinet Design',
      powerOutput: '600W RMS / 1200W Peak',
      lowPassFilter: true,
      phaseControl: true,
      inputs: 'Line In, LFE, Speaker Level, Wireless',
      dimensions: '480 x 520 x 480mm',
      weight: '32kg'
    }
  },

  // TOWER / FLOORSTAND
  {
    id: 'titan-tower-pro',
    title: 'Titan Tower Pro',
    price: '$2,899',
    category: 'Tower / Floorstand',
    description: 'Flagship tower speaker featuring advanced driver technology and precision engineering for audiophile-grade performance in any environment.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '3-Way Design with Dual 6.5" Woofers',
      '5" Midrange Driver with Ceramic Cone',
      '1" Beryllium Dome Tweeter',
      'Bi-Amplification Ready',
      'Frequency Response: 35Hz - 25kHz',
      'Premium Hardwood Cabinet Construction'
    ],
    specifications: {
      'Driver Configuration': '3-Way, 4-Driver',
      'Woofers': '2 x 6.5" Ceramic',
      'Midrange': '5" Ceramic Cone',
      'Tweeter': '1" Beryllium Dome',
      'Frequency Response': '35Hz - 25kHz (±3dB)',
      'Impedance': '8 Ohms',
      'Sensitivity': '89dB @ 1W/1m',
      'Dimensions': '200 x 1100 x 350mm',
      'Weight': '28kg each',
      'Finish': 'Walnut Veneer'
    },
    categoryDetails: {
      driverArray: '2 x 6.5" Woofers, 5" Mid, 1" Tweeter',
      impedance: '8 Ohms',
      sensitivity: '89dB @ 1W/1m',
      biAmpSupport: true,
      cabinetMaterial: 'Premium Hardwood Veneer',
      dimensions: '200 x 1100 x 350mm',
      weight: '28kg each'
    }
  },
  {
    id: 'spectrum-tower-xl',
    title: 'Spectrum Tower XL',
    price: '$3,499',
    category: 'Tower / Floorstand',
    description: 'Ultimate reference tower speaker with cutting-edge driver technology and meticulous acoustic engineering for uncompromising sound reproduction.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '4-Way Design with Triple 8" Woofers',
      '6" Midrange with Carbon Fiber Cone',
      '1.25" Diamond Dome Tweeter',
      'Dedicated Super Tweeter for Extended HF',
      'Active Crossover Network Ready',
      'Hand-Selected Driver Matching'
    ],
    specifications: {
      'Driver Configuration': '4-Way, 6-Driver',
      'Woofers': '3 x 8" Carbon Fiber',
      'Midrange': '6" Carbon Fiber',
      'Tweeter': '1.25" Diamond Dome',
      'Super Tweeter': '0.75" Ribbon',
      'Frequency Response': '28Hz - 40kHz (±2dB)',
      'Impedance': '4 Ohms',
      'Sensitivity': '91dB @ 1W/1m',
      'Dimensions': '250 x 1300 x 400mm',
      'Weight': '45kg each',
      'Finish': 'Ebony High Gloss'
    },
    categoryDetails: {
      driverArray: '3 x 8" Woofers, 6" Mid, 1.25" Tweeter, 0.75" Super Tweeter',
      impedance: '4 Ohms',
      sensitivity: '91dB @ 1W/1m',
      biAmpSupport: true,
      cabinetMaterial: 'Multi-Layer MDF with High Gloss Finish',
      dimensions: '250 x 1300 x 400mm',
      weight: '45kg each'
    }
  },

  // BOOKSHELF / STANDMOUNT
  {
    id: 'compact-studio-mk2',
    title: 'Compact Studio MK2',
    price: '$799',
    category: 'Bookshelf / Standmount',
    description: 'Precision-engineered bookshelf speaker delivering studio-quality sound in a compact form factor, perfect for near-field listening and smaller spaces.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '2-Way Design with 5.25" Woofer',
      '1" Silk Dome Tweeter',
      'Rear-Firing Bass Port',
      'Magnetic Shielding for Near-Field Use',
      'Frequency Response: 45Hz - 22kHz',
      'Optimized for 20-50W Amplifiers'
    ],
    specifications: {
      'Driver Configuration': '2-Way, 2-Driver',
      'Woofer': '5.25" Polypropylene',
      'Tweeter': '1" Silk Dome',
      'Frequency Response': '45Hz - 22kHz (±3dB)',
      'Impedance': '8 Ohms',
      'Sensitivity': '85dB @ 1W/1m',
      'Recommended Power': '20-50W',
      'Dimensions': '180 x 280 x 220mm',
      'Weight': '4.5kg each',
      'Finish': 'Matte Black'
    },
    categoryDetails: {
      driverConfiguration: '2-Way, 5.25" Woofer + 1" Tweeter',
      amplifierPowerRange: '20-50W RMS',
      wallMountCompatible: true,
      idealRoomSize: 'Small to Medium (10-25 sqm)',
      dimensions: '180 x 280 x 220mm',
      weight: '4.5kg each'
    }
  },
  {
    id: 'fusion-bookshelf-pro',
    title: 'Fusion Bookshelf Pro',
    price: '$1,299',
    category: 'Bookshelf / Standmount',
    description: 'High-performance bookshelf speaker with advanced materials and precision tuning, delivering exceptional detail and imaging for critical listening.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '2-Way Design with 6.5" Kevlar Woofer',
      '1" Beryllium Dome Tweeter',
      'Sealed Cabinet for Tight Bass Response',
      'Bi-Wire/Bi-Amp Terminal Configuration',
      'Frequency Response: 42Hz - 25kHz',
      'Hand-Matched Driver Pairs'
    ],
    specifications: {
      'Driver Configuration': '2-Way, 2-Driver',
      'Woofer': '6.5" Kevlar Composite',
      'Tweeter': '1" Beryllium Dome',
      'Frequency Response': '42Hz - 25kHz (±2dB)',
      'Impedance': '6 Ohms',
      'Sensitivity': '87dB @ 1W/1m',
      'Recommended Power': '30-120W',
      'Dimensions': '200 x 350 x 280mm',
      'Weight': '8kg each',
      'Finish': 'Cherry Wood Veneer'
    },
    categoryDetails: {
      driverConfiguration: '2-Way, 6.5" Kevlar Woofer + 1" Beryllium Tweeter',
      amplifierPowerRange: '30-120W RMS',
      wallMountCompatible: false,
      idealRoomSize: 'Medium to Large (20-50 sqm)',
      dimensions: '200 x 350 x 280mm',
      weight: '8kg each'
    }
  },

  // CENTER CHANNEL
  {
    id: 'crystal-center-elite',
    title: 'Crystal Center Elite',
    price: '$1,199',
    category: 'Center',
    description: 'Premium center channel speaker engineered for crystal-clear dialogue reproduction and seamless integration with your main speakers.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '3-Way Design with Dual 5.25" Woofers',
      '4" Midrange Driver for Clear Vocals',
      '1" Silk Dome Tweeter',
      'Magnetically Shielded Design',
      'Frequency Response: 48Hz - 22kHz',
      'Optimized for Dialog Reproduction'
    ],
    specifications: {
      'Driver Configuration': '3-Way, 4-Driver',
      'Woofers': '2 x 5.25" Polypropylene',
      'Midrange': '4" Paper Cone',
      'Tweeter': '1" Silk Dome',
      'Frequency Response': '48Hz - 22kHz (±3dB)',
      'Impedance': '8 Ohms',
      'Sensitivity': '88dB @ 1W/1m',
      'Recommended Power': '25-100W',
      'Dimensions': '500 x 180 x 250mm',
      'Weight': '7.5kg',
      'Finish': 'Black Ash'
    },
    categoryDetails: {
      driverConfiguration: '3-Way, Dual 5.25" Woofers + 4" Mid + 1" Tweeter',
      amplifierPowerRange: '25-100W RMS',
      magneticShielding: true,
      dialogOptimization: true,
      mountingOptions: 'Table, Wall Mount, Under TV',
      dimensions: '500 x 180 x 250mm',
      weight: '7.5kg'
    }
  },
  {
    id: 'nexus-center-ultra',
    title: 'Nexus Center Ultra',
    price: '$1,599',
    category: 'Center',
    description: 'Reference-grade center channel speaker with advanced driver technology and precise acoustic tuning for uncompromising home theater performance.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      '3-Way Design with Dual 6.5" Woofers',
      '5" Ceramic Midrange Driver',
      '1" Beryllium Dome Tweeter',
      'D\'Appolito Driver Configuration',
      'Frequency Response: 45Hz - 25kHz',
      'Time-Aligned Driver Assembly'
    ],
    specifications: {
      'Driver Configuration': '3-Way, 4-Driver',
      'Woofers': '2 x 6.5" Ceramic',
      'Midrange': '5" Ceramic Cone',
      'Tweeter': '1" Beryllium Dome',
      'Frequency Response': '45Hz - 25kHz (±2dB)',
      'Impedance': '6 Ohms',
      'Sensitivity': '90dB @ 1W/1m',
      'Recommended Power': '40-150W',
      'Dimensions': '600 x 200 x 300mm',
      'Weight': '12kg',
      'Finish': 'Piano Black'
    },
    categoryDetails: {
      driverConfiguration: '3-Way, Dual 6.5" Ceramic Woofers + 5" Ceramic Mid + 1" Beryllium Tweeter',
      amplifierPowerRange: '40-150W RMS',
      magneticShielding: true,
      dialogOptimization: true,
      mountingOptions: 'Table, Wall Mount, Under TV, Ceiling',
      dimensions: '600 x 200 x 300mm',
      weight: '12kg'
    }
  },

  // SURROUND / HEIGHT / ON-WALL
  {
    id: 'altitude-surround-x3',
    title: 'Altitude Surround X3',
    price: '$899',
    category: 'Surround / Height / On-Wall',
    description: 'Versatile surround speaker designed for immersive audio experiences, perfect for height channels and ambient sound reproduction.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Bipolar/Dipolar Switchable Design',
      'Dual 4" Full-Range Drivers',
      '1" Silk Dome Tweeter',
      'Wall or Ceiling Mountable',
      'Frequency Response: 65Hz - 20kHz',
      'Magnetic Grille System'
    ],
    specifications: {
      'Driver Configuration': 'Bipolar/Dipolar, 3-Driver',
      'Full-Range Drivers': '2 x 4" Polypropylene',
      'Tweeter': '1" Silk Dome',
      'Frequency Response': '65Hz - 20kHz (±3dB)',
      'Impedance': '8 Ohms',
      'Sensitivity': '86dB @ 1W/1m',
      'Recommended Power': '15-80W',
      'Dimensions': '300 x 150 x 120mm',
      'Weight': '2.8kg each',
      'Finish': 'White/Black'
    },
    categoryDetails: {
      operatingMode: 'Bipolar/Dipolar Switchable',
      driverConfiguration: 'Dual 4" Full-Range + 1" Tweeter',
      amplifierPowerRange: '15-80W RMS',
      mountingOptions: 'Wall, Ceiling, Bracket',
      dispersionPattern: '180° Horizontal',
      ceilingCompatible: true,
      dimensions: '300 x 150 x 120mm',
      weight: '2.8kg each'
    }
  },
  {
    id: 'orbit-wall-mount',
    title: 'Orbit Wall Mount',
    price: '$699',
    category: 'Surround / Height / On-Wall',
    description: 'Compact on-wall speaker with omnidirectional sound dispersion, ideal for discrete installation and immersive surround sound.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Omnidirectional Sound Dispersion',
      '3.5" Full-Range Driver',
      'Passive Radiator for Extended Bass',
      'Ultra-Slim Profile Design',
      'Frequency Response: 80Hz - 18kHz',
      'Paintable Grille for Custom Finish'
    ],
    specifications: {
      'Driver Configuration': 'Full-Range + Passive Radiator',
      'Full-Range Driver': '3.5" Paper Cone',
      'Passive Radiator': '3.5" Composite',
      'Frequency Response': '80Hz - 18kHz (±4dB)',
      'Impedance': '8 Ohms',
      'Sensitivity': '84dB @ 1W/1m',
      'Recommended Power': '10-60W',
      'Dimensions': '250 x 250 x 80mm',
      'Weight': '1.5kg each',
      'Finish': 'Paintable White'
    },
    categoryDetails: {
      operatingMode: 'Omnidirectional',
      driverConfiguration: '3.5" Full-Range + 3.5" Passive Radiator',
      amplifierPowerRange: '10-60W RMS',
      mountingOptions: 'Wall Only',
      dispersionPattern: '360° Horizontal',
      ceilingCompatible: false,
      dimensions: '250 x 250 x 80mm',
      weight: '1.5kg each'
    }
  },

  // ACCESSORIES
  {
    id: 'precision-cable-kit',
    title: 'Precision Cable Kit',
    price: '$149',
    category: 'Accessories',
    description: 'Professional-grade speaker cables and interconnects designed to preserve signal integrity and maximize your system\'s performance.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Oxygen-Free Copper Conductors',
      '12 AWG Speaker Cables (2 x 3m)',
      'Gold-Plated Banana Plugs',
      'RCA Interconnect Cables (2 x 1m)',
      'Subwoofer Cable (1 x 3m)',
      'Cable Management Accessories'
    ],
    specifications: {
      'Conductor Material': 'Oxygen-Free Copper',
      'Speaker Cable Gauge': '12 AWG',
      'Speaker Cable Length': '3 meters (pair)',
      'Interconnect Length': '1 meter (pair)',
      'Subwoofer Cable Length': '3 meters',
      'Connector Type': 'Gold-Plated',
      'Insulation': 'High-Grade PVC',
      'Package Contents': '5 Cables + Accessories'
    },
    categoryDetails: {
      cableTypes: 'Speaker, RCA Interconnect, Subwoofer',
      conductorMaterial: 'Oxygen-Free Copper',
      connectorPlating: 'Gold-Plated',
      awgRating: '12 AWG (Speaker)',
      lengths: '1m-3m Various',
      shielding: 'Braided Copper Shield',
      packaging: 'Premium Gift Box',
      warranty: '5 Year Limited'
    }
  },

  // STANDS
  {
    id: 'apex-floor-stand',
    title: 'Apex Floor Stand',
    price: '$299',
    category: 'Stand',
    description: 'Premium speaker stands engineered for optimal acoustic isolation and precise positioning of bookshelf and monitor speakers.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Height Adjustable 60-100cm',
      'Solid Steel Construction',
      'Acoustic Isolation Pads',
      'Internal Cable Management',
      'Anti-Vibration Design',
      'Universal Top Plate Compatibility'
    ],
    specifications: {
      'Material': 'Solid Steel Construction',
      'Height Range': '60-100cm Adjustable',
      'Top Plate Size': '200 x 250mm',
      'Base Dimensions': '300 x 300mm',
      'Weight Capacity': '25kg per stand',
      'Tube Diameter': '50mm',
      'Finish': 'Powder Coated Black',
      'Package': 'Pair of Stands'
    },
    categoryDetails: {
      construction: 'Solid Steel with Powder Coating',
      heightRange: '60-100cm Adjustable',
      weightCapacity: '25kg per stand',
      isolationPads: 'High-Density Foam',
      cableManagement: 'Internal Routing',
      topPlateSize: '200 x 250mm',
      baseStability: 'Weighted Triangle Base',
      assembly: 'Tool-Free Height Adjustment'
    }
  }
]

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products
  return products.filter(product => product.category === category)
}

// Helper function to get all categories
export const getCategories = (): string[] => {
  const categories = Array.from(new Set(products.map(product => product.category)))
  return ['All', ...categories.sort()]
}

// Helper function to get featured products
export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit)
}

// Helper function to get related products
export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const currentProduct = getProductById(productId)
  if (!currentProduct) return []
  
  return products
    .filter(product => 
      product.category === currentProduct.category && 
      product.id !== productId
    )
    .slice(0, limit)
}
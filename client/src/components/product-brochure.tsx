// product-brochure.tsx
import React from 'react';
import { Download, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ProductBrochureProps {
  product: {
    id: string;
    title: string;
    category: string;
    price: string;
    description: string;
    image: string;
    features: string[];
    specifications: Record<string, string>;
    categoryDetails?: any;
  };
}

export const ProductBrochure: React.FC<ProductBrochureProps> = ({ product }) => {
  
  const generateCategorySpecificContent = (product: any) => {
    if (!product.categoryDetails) return '';

    switch (product.category) {
      case 'Subwoofer':
        return `
          <section class="category-details">
            <h2 class="section-title">Subwoofer Engineering Excellence</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Audio Performance</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Crossover Frequency</span>
                    <span class="detail-value">${product.categoryDetails.crossoverFrequency}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Power Output</span>
                    <span class="detail-value">${product.categoryDetails.powerOutput}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Enclosure Type</span>
                    <span class="detail-value">${product.categoryDetails.enclosureType}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Control Features</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Low Pass Filter</span>
                    <span class="detail-value">${product.categoryDetails.lowPassFilter ? 'Variable' : 'Fixed'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Phase Control</span>
                    <span class="detail-value">${product.categoryDetails.phaseControl ? '0° - 180°' : 'Fixed'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Input Options</span>
                    <span class="detail-value">${product.categoryDetails.inputs}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="performance-chart">
              <h3 class="chart-title">Bass Response Visualization</h3>
              <div class="frequency-bars">
                <div class="freq-bar" style="height: 20%"><span>20Hz</span></div>
                <div class="freq-bar" style="height: 60%"><span>40Hz</span></div>
                <div class="freq-bar" style="height: 90%"><span>60Hz</span></div>
                <div class="freq-bar" style="height: 85%"><span>80Hz</span></div>
                <div class="freq-bar" style="height: 70%"><span>100Hz</span></div>
                <div class="freq-bar" style="height: 40%"><span>120Hz</span></div>
                <div class="freq-bar" style="height: 20%"><span>150Hz</span></div>
              </div>
            </div>
          </section>
        `;

      case 'Tower / Floorstand':
        return `
          <section class="category-details">
            <h2 class="section-title">Tower Speaker Architecture</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Driver Configuration</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Driver Array</span>
                    <span class="detail-value">${product.categoryDetails.driverArray || 'Multi-way'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Impedance</span>
                    <span class="detail-value">${product.categoryDetails.impedance || '8 Ohms'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Sensitivity</span>
                    <span class="detail-value">${product.categoryDetails.sensitivity || '89dB'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Construction</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Bi-Amp Support</span>
                    <span class="detail-value">${product.categoryDetails.biAmpSupport ? 'Yes' : 'No'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Cabinet Material</span>
                    <span class="detail-value">${product.categoryDetails.cabinetMaterial || 'MDF'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case 'Bookshelf / Standmount':
        return `
          <section class="category-details">
            <h2 class="section-title">Bookshelf Speaker Design</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Audio Configuration</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Driver Configuration</span>
                    <span class="detail-value">${product.categoryDetails.driverConfiguration || '2-way'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Amplifier Power Range</span>
                    <span class="detail-value">${product.categoryDetails.amplifierPowerRange || '20-100W'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Installation</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Wall Mount Compatible</span>
                    <span class="detail-value">${product.categoryDetails.wallMountCompatible ? 'Yes' : 'No'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Ideal Room Size</span>
                    <span class="detail-value">${product.categoryDetails.idealRoomSize || 'Medium'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case 'Center':
        return `
          <section class="category-details">
            <h2 class="section-title">Center Channel Excellence</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Audio Configuration</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Driver Configuration</span>
                    <span class="detail-value">${product.categoryDetails.driverConfiguration || '3-way'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Dialog Optimization</span>
                    <span class="detail-value">${product.categoryDetails.dialogOptimization ? 'Enhanced' : 'Standard'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Installation Options</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Mounting Options</span>
                    <span class="detail-value">${product.categoryDetails.mountingOptions || 'Tabletop/Wall'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Magnetic Shielding</span>
                    <span class="detail-value">${product.categoryDetails.magneticShielding ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case 'Surround / Height / On-Wall':
        return `
          <section class="category-details">
            <h2 class="section-title">Surround Sound Technology</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Audio Configuration</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Operating Mode</span>
                    <span class="detail-value">${product.categoryDetails.operatingMode || 'Surround'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Dispersion Pattern</span>
                    <span class="detail-value">${product.categoryDetails.dispersionPattern || 'Wide'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Installation</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Mounting Options</span>
                    <span class="detail-value">${product.categoryDetails.mountingOptions || 'Wall/Ceiling'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Ceiling Compatible</span>
                    <span class="detail-value">${product.categoryDetails.ceilingCompatible ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case 'Accessories':
        return `
          <section class="category-details">
            <h2 class="section-title">Premium Audio Accessories</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Product Specifications</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Cable Types</span>
                    <span class="detail-value">${product.categoryDetails.cableTypes || 'Multi-core'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Conductor Material</span>
                    <span class="detail-value">${product.categoryDetails.conductorMaterial || 'OFC Copper'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Connector Plating</span>
                    <span class="detail-value">${product.categoryDetails.connectorPlating || 'Gold'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Package Details</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Available Lengths</span>
                    <span class="detail-value">${product.categoryDetails.lengths || 'Multiple'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Shielding</span>
                    <span class="detail-value">${product.categoryDetails.shielding || 'Triple-layer'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case 'Stand':
        return `
          <section class="category-details">
            <h2 class="section-title">Speaker Stand Engineering</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Construction</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Construction</span>
                    <span class="detail-value">${product.categoryDetails.construction || 'Steel'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Height Range</span>
                    <span class="detail-value">${product.categoryDetails.heightRange || 'Adjustable'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Weight Capacity</span>
                    <span class="detail-value">${product.categoryDetails.weightCapacity || '25kg'}</span>
                  </div>
                </div>
              </div>
              <div class="detail-section">
                <h3 class="detail-title">Features</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Cable Management</span>
                    <span class="detail-value">${product.categoryDetails.cableManagement || 'Integrated'}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Isolation Pads</span>
                    <span class="detail-value">${product.categoryDetails.isolationPads || 'Included'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      default:
        return `
          <section class="category-details">
            <h2 class="section-title">Premium Audio Engineering</h2>
            <div class="details-grid">
              <div class="detail-section">
                <h3 class="detail-title">Product Excellence</h3>
                <p class="detail-description">
                  Crafted with precision engineering and premium materials for the ultimate audio experience.
                </p>
              </div>
            </div>
          </section>
        `;
    }
  };

 const generatePDFBrochure = async () => {
    const htmlContent = `

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.title} - Premium Audio Brochure | Zero dB</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto+Mono:wght@400;500;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: #000000;
            color: #ffffff;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .brochure-container {
            max-width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        /* Header Section */
        .header {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            padding: 40px 50px 30px;
            position: relative;
            border-bottom: 3px solid #DAA520;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23DAA520;stop-opacity:0.1" /><stop offset="50%" style="stop-color:%23FFD700;stop-opacity:0.2" /><stop offset="100%" style="stop-color:%23DAA520;stop-opacity:0.1" /></linearGradient></defs><path d="M0 20 Q50 5 100 20 T200 20 V40 H0 Z" fill="url(%23grad)"/></svg>') repeat-x;
            background-size: 400px 40px;
            opacity: 0.3;
        }
        
        .logo-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            z-index: 2;
        }
            .page-break {
                display: block;
                page-break-before: always;
                break-before: page;
            }
        
        .brand-info {
            display: flex;
            flex-direction: column;
        }
        
        .logo {
            font-size: 42px;
            font-weight: 900;
            color: #DAA520;
            letter-spacing: -2px;
            text-shadow: 0 2px 4px rgba(218, 165, 32, 0.3);
            margin-bottom: 8px;
        }
        
        .tagline {
            font-size: 12px;
            color: #cccccc;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        
        .category-badge {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
            color: #000000;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 15px rgba(218, 165, 32, 0.4);
            align-self: flex-start;
        }
        
        /* Hero Section */
        .hero-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            padding: 50px;
            min-height: 500px;
            position: relative;
        }
        
        .hero-section::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(218, 165, 32, 0.05) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 1;
        }
        
        .product-image {
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1a1a1a 0%, #000000 70%);
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            z-index: 2;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        }
        
        .product-image::before {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            background: conic-gradient(from 0deg, #DAA520, transparent, #FFD700, transparent, #DAA520);
            border-radius: 50%;
            opacity: 0.1;
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .product-placeholder {
            width: 350px;
            height: 280px;
            background: linear-gradient(135deg, #2a2a2a 0%, #404040 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DAA520;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            position: relative;
            z-index: 3;
            border: 2px solid rgba(218, 165, 32, 0.3);
            box-shadow: inset 0 2px 10px rgba(218, 165, 32, 0.1);
        }
        
        .product-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 2;
        }
        
        .product-title {
            font-size: 52px;
            font-weight: 900;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #ffffff 0%, #DAA520 50%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .product-price {
            font-size: 38px;
            font-weight: 800;
            color: #DAA520;
            margin-bottom: 25px;
            text-shadow: 0 2px 4px rgba(218, 165, 32, 0.3);
        }
        
        .product-description {
            font-size: 14px;
            color: #cccccc;
            margin-bottom: 35px;
            line-height: 1.8;
            font-weight: 300;
        }
        
        .key-highlight {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
            color: #000000;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 700;
            text-align: center;
            font-size: 16px;
            box-shadow: 0 6px 20px rgba(218, 165, 32, 0.4);
            margin-bottom: 20px;
        }
        
        /* Specifications Section */
        .specifications-section {
            padding: 50px;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
            position: relative;
        }
        
        .specifications-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50px;
            right: 50px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #DAA520 50%, transparent 100%);
        }
        
        .section-title {
            font-size: 36px;
            font-weight: 800;
            margin-bottom: 40px;
            text-align: center;
            color: #DAA520;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%);
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        
        .features-column, .specs-column {
            background: rgba(26, 26, 26, 0.7);
            padding: 35px;
            border-radius: 16px;
            border: 1px solid rgba(218, 165, 32, 0.2);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }
        
        .features-column::before, .specs-column::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #DAA520 0%, #FFD700 50%, #DAA520 100%);
        }
        
        .column-title {
            font-size: 20px;
            font-weight: 700;
            color: #DAA520;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .column-title::before {
            content: '';
            width: 6px;
            height: 24px;
            background: linear-gradient(135deg, #DAA520, #FFD700);
            border-radius: 3px;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 18px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(218, 165, 32, 0.1);
        }
        
        .feature-item:last-child {
            border-bottom: none;
        }
        
        .feature-bullet {
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #DAA520, #FFD700);
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
            box-shadow: 0 2px 4px rgba(218, 165, 32, 0.3);
        }
        
        .feature-text {
            font-size: 11px;
            color: #e0e0e0;
            font-weight: 400;
            line-height: 1.6;
        }
        
        .spec-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid rgba(218, 165, 32, 0.1);
        }
        
        .spec-row:last-child {
            border-bottom: none;
        }
        
        .spec-label {
            font-size: 11px;
            color: #cccccc;
            font-weight: 400;
        }
        
        .spec-value {
            font-size: 11px;
            color: #DAA520;
            font-weight: 600;
            font-family: 'Roboto Mono', monospace;
        }
        
        /* Category Specific Details */
        .category-details {
            padding: 50px;
            background: linear-gradient(135deg, #000000 0%, #0f0f0f 100%);
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        
        .detail-section {
            background: rgba(26, 26, 26, 0.8);
            padding: 35px;
            border-radius: 16px;
            border: 1px solid rgba(218, 165, 32, 0.3);
            position: relative;
        }
        
        .detail-title {
            font-size: 22px;
            font-weight: 700;
            color: #DAA520;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
        }
        
        .detail-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: linear-gradient(90deg, #DAA520, #FFD700);
        }
        
        .detail-grid {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(218, 165, 32, 0.1);
        }
        
        .detail-item:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-size: 12px;
            color: #cccccc;
            font-weight: 500;
        }
        
        .detail-value {
            font-size: 12px;
            color: #DAA520;
            font-weight: 600;
            font-family: 'Roboto Mono', monospace;
        }
        
        /* Performance Chart for Subwoofers */
        .performance-chart {
            margin-top: 40px;
            padding: 30px;
            background: rgba(15, 15, 15, 0.8);
            border-radius: 12px;
            border: 1px solid rgba(218, 165, 32, 0.2);
        }
        
        .chart-title {
            font-size: 14px;
            font-weight: 600;
            color: #DAA520;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .frequency-bars {
            display: flex;
            justify-content: space-between;
            align-items: end;
            height: 120px;
            padding: 0 20px;
        }
        
        .freq-bar {
            width: 20px;
            background: linear-gradient(to top, #DAA520, #FFD700);
            border-radius: 2px 2px 0 0;
            position: relative;
            display: flex;
            align-items: end;
            justify-content: center;
        }
        
        .freq-bar span {
            position: absolute;
            bottom: -25px;
            font-size: 10px;
            color: #cccccc;
            white-space: nowrap;
        }
        
        /* Footer */
        .footer {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            padding: 40px 50px;
            border-top: 3px solid #DAA520;
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
            gap: 8px;
        }
        
        .company-name {
            font-size: 20px;
            font-weight: 800;
            color: #DAA520;
        }
        
        .contact-info {
            font-size: 12px;
            color: #cccccc;
            font-weight: 300;
        }
        
        .qr-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
        
        .qr-placeholder {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #2a2a2a, #404040);
            border: 1px solid #DAA520;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DAA520;
            font-size: 10px;
            text-align: center;
        }
        
        .copyright {
            font-size: 12px;
            color: #888888;
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(218, 165, 32, 0.2);
        }
        
        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                color-adjust: exact;
            }
            
            .brochure-container {
                box-shadow: none;
                margin: 0;
                max-width: none;
            }
            
            @page {
                margin: 0;
                size: A4;
            }
        }
    </style>
</head>
<body>
    <div class="brochure-container">
        <!-- Header -->
        <header class="header">
            <div class="logo-section">
                <div class="brand-info">
                    <div class="logo">Zero dB</div>
                    <div class="tagline">Silence Redefined. Power Amplified.</div>
                </div>
                <div class="category-badge">${product.category}</div>
            </div>
        </header>
        
        <!-- Hero Section -->
         <div id="page-one">
        <section class="hero-section">
            <div class="product-image">
                <div class="product-placeholder">
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
      

        <!-- Specifications Section -->
        <section class="specifications-section">
            <h2 class="section-title">Technical Excellence</h2>
            <div class="specs-grid">
                <div class="features-column">
                    <h3 class="column-title">Key Features</h3>
                    ${product.features.slice(0, 8).map(feature => `
                        <div class="feature-item">
                            <div class="feature-bullet"></div>
                            <div class="feature-text">${feature}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="specs-column">
                    <h3 class="column-title">Technical Specifications</h3>
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <div class="spec-row">
                            <span class="spec-label">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
         <footer class="footer">
            <div class="footer-content">
                <div class="company-info">
                    <div class="company-name">Zero dB Audio Technologies</div>
                    <div class="contact-info">www.zerodb.audio | support@zerodb.audio | +1 (555) 123-4567</div>
                </div>
               
                   <div class="qr-section">
                    <div class="qr-placeholder">QR<br>Demo</div>
                    <div style="font-size: 10px; color: #888;">Scan for Audio Demo</div>
                </div>
               
            </div>
            <div class="copyright">© 2025 Zero dB Audio Technologies. All rights reserved. | Premium Audio Equipment | Engineered for Excellence</div>
        </footer>
        </div>
        <div class="page-break"></div>

         <div id="page-two">
        <!-- Category Specific Details -->
        ${generateCategorySpecificContent(product)}
        </div>
        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <div class="company-info">
                    <div class="company-name">Zero dB Audio Technologies</div>
                    <div class="contact-info">www.zerodb.audio | support@zerodb.audio | +1 (555) 123-4567</div>
                </div>
                <div class="qr-section">
                    <div class="qr-placeholder">QR<br>Demo</div>
                    <div style="font-size: 10px; color: #888;">Scan for Audio Demo</div>
                </div>
            </div>
            <div class="copyright">© 2025 Zero dB Audio Technologies. All rights reserved. | Premium Audio Equipment | Engineered for Excellence</div>
        </footer>
    </div>
</body>
</html>`;
 const blob = new Blob([htmlContent], { type: 'text/html' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `${product.title.replace(/\s+/g, '-').toLowerCase()}-brochure.html`; // <-- This line
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

  
  };

  return (
    <div className="inline-block">
      <button
        onClick={generatePDFBrochure}
        className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        <FileText className="w-4 h-4" />
        Download Specs
      </button>
    </div>
  );
};

// Usage example component that can be integrated into your product detail page
export const BrochureButton: React.FC<{ productId: string }> = ({ productId }) => {
  // Import your getProductById function here
  // const product = getProductById(productId);
  
  // Mock product for demonstration - replace with actual product fetch
  const mockProduct = {
    id: productId,
    title: 'Phantom Sub 12',
    category: 'Subwoofer',
    price: '$2,499',
    description: 'Experience earth-shaking bass with precision engineering. The Phantom Sub 12 delivers uncompromising low-frequency performance for the most demanding audio enthusiasts.',
    image: '/api/placeholder/600/400',
    features: [
      '500W RMS / 1000W Peak Power Output',
      'Variable Low-Pass Filter (50-150Hz)',
      'Phase Control (0° - 180°)',
      'XLR and RCA Input Options',
      'Custom 12" Long-Throw Driver',
      'Ported MDF Enclosure Design',
      'Magnetic Shielding Technology',
      'Professional-Grade Components'
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

  if (!mockProduct) {
    return null;
  }

  return <ProductBrochure product={mockProduct} />;
};



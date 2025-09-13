'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
    // Initialize analytics here if needed
  };

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-container">
      <p className="cookie-text">
        We use cookies to enhance your experience. Read our{' '}
        <a href="/privacy-policy" className="cookie-link">Privacy Policy</a>.
      </p>
      <div className="cookie-buttons">
        <button className="btn-accept" onClick={accept}>Accept</button>
        <button className="btn-decline" onClick={decline}>Decline</button>
      </div>

      <style>{`
        .cookie-container {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          color: #f5f5f5;
          padding: 20px 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 600px;
          z-index: 1000;
          flex-wrap: wrap;
          gap: 15px;
          font-family: 'Inter', sans-serif;
          animation: fadeIn 0.5s ease-in-out;
        }

        .cookie-text {
          flex: 1 1 auto;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .cookie-link {
          color: #4fc3f7;
          text-decoration: underline;
          transition: color 0.3s;
        }
        .cookie-link:hover {
          color: #81d4fa;
        }

        .cookie-buttons {
          display: flex;
          gap: 10px;
        }

        .btn-accept, .btn-decline {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-accept {
          background: #4fc3f7;
          color: #1a1a1a;
        }
        .btn-accept:hover {
          background: #29b6f6;
        }

        .btn-decline {
          background: #555;
          color: #f5f5f5;
        }
        .btn-decline:hover {
          background: #777;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

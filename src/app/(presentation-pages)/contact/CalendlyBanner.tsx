import React, { useEffect } from 'react';

const CalendlyBanner = () => {
  const calendlyUrl = 'https://calendly.com/lucamatei/initial-consultation';

  useEffect(() => {
    // Load Calendly widget CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly widget JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the added elements when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  const openCalendly = (e: any) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded from external script
    window.Calendly.initPopupWidget({url: calendlyUrl});
  };

  return (
    <div className={"flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 justify-between items-center p-3.5 mb-5 bg-indigo-600 text-white rounded-md shadow-sm"}>
      <span className={"font-bold block"}>Longer than an email?</span>
      <button
        onClick={openCalendly}
        className="bg-white text-sm text-indigo-600 font-semibold py-2 px-4 rounded-md shadow-sm"
      >
        Schedule time with me
      </button>
    </div>
  );
};

export default CalendlyBanner;

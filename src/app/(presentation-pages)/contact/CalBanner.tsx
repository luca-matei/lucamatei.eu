import React, { useEffect } from 'react';

const CalBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.text = '(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");\n' +
      'Cal("init", "quick-chat", {origin:"https://cal.com"});';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCal = (e: any) => {
    e.preventDefault();
    // @ts-ignore - Cal is loaded from external script
    window.Cal.ns["quick-chat"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"})
  };

  return (
    <div className={"flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 justify-between items-center p-3.5 mb-5 bg-indigo-600 text-white rounded-md shadow-sm"}>
      <span className={"font-bold block"}>Longer than an email?</span>
      <button
        onClick={openCal}
        className="bg-white text-sm text-indigo-600 font-semibold py-2 px-4 rounded-md shadow-sm"
        data-cal-link="lucamatei/quick-chat"
        data-cal-namespace="quick-chat"
        data-cal-config='{"layout":"month_view"}'
      >
        Schedule time with me
      </button>
    </div>
  );
};

export default CalBanner;

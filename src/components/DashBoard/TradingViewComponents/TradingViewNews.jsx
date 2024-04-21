import { useEffect } from 'react';

const TradingViewNews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "market",
      "market": "crypto",
      "isTransparent": false,
      "displayMode": "regular",
      "width": 350,
      "height": 500,
      "colorTheme": "light",
      "locale": "en"
    });
    const container = document.getElementById('tradingview-timeline-widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="tradingview-timeline-widget" className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewNews;

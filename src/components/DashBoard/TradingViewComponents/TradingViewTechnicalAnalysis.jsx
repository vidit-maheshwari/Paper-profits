import { useEffect } from 'react';

const TradingViewTechnicalAnalysis = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      "interval": "1m",
      "width": 350,
      "isTransparent": false,
      "height": 400,
      "symbol": "BITSTAMP:BTCUSD",
      "showIntervalTabs": true,
      "displayMode": "single",
      "locale": "en",
      "colorTheme": "light"
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
    <div id="tradingview-widget-container" className="tradingview-widget-container">
      <div id="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTechnicalAnalysis;

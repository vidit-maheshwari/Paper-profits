import  { useEffect } from 'react';

const TradingViewSymbolInfo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    script.innerHTML = JSON.stringify({
      "symbol": "BITSTAMP:BTCUSD",
      "width": 550,
      "locale": "en",
      "colorTheme": "light",
      "isTransparent": false
    });
    const container = document.getElementById('tradingview-widget-container');
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
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewSymbolInfo;

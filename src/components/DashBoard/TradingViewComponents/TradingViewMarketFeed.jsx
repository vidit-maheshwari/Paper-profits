import { useEffect } from 'react';

const TradingViewMarketFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      "width": "800",
      "height": "450",
      "symbolsGroups": [
        {
          "name": "Crypto Feed",
          "symbols": [
            { "name": "BITSTAMP:BTCUSD" },
            { "name": "BITSTAMP:ETHUSD" },
            { "name": "BINANCE:BTCUSDT" },
            { "name": "BINANCE:BNBUSD" },
            { "name": "COINBASE:SOLUSD" },
            { "name": "BITSTAMP:XRPUSD" },
            { "name": "BINANCE:DOGEUSD" }
          ]
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en",
      "backgroundColor": "#ffffff"
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
    <div id="tradingview-widget-container" className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewMarketFeed;

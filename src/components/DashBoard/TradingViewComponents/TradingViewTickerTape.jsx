import { useEffect } from 'react';

const TradingViewTickerTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "",
          "proName": "COINBASE:USDTUSD"
        },
        {
          "description": "",
          "proName": "BINANCE:BNBUSD"
        },
        {
          "description": "",
          "proName": "COINBASE:SOLUSD"
        },
        {
          "description": "",
          "proName": "BITSTAMP:XRPUSD"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "regular",
      "colorTheme": "light",
      "locale": "en"
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

export default TradingViewTickerTape;

import { useEffect } from 'react';

const HeatMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      dataSource: 'Crypto',
      blockSize: 'market_cap_calc',
      blockColor: 'change',
      locale: 'en',
      symbolUrl: '',
      colorTheme: 'light',
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: 1000,
      height: 700
    });

    const container = document.getElementById('tradingview-widget-container__widget');
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
    <>
    <div className="text-3xl mb-10 mt-16 ml-10 underline underline-offset-8">
              <h1>Cryptocurrency HeatMap </h1>
              </div>
      <div className="tradingview-widget-container mt-10 ml-10">
      <div id="tradingview-widget-container__widget"></div>
    </div>
    </>
 
  );
};

export default HeatMap;

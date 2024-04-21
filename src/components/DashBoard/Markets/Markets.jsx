
import TradingViewSymbolInfo from '../TradingViewComponents/TradingViewSymbolInfo'
import TradingViewTechnicalsBTC from '../TradingViewComponents/TradingViewTechnicals'




const Markets = () => {
  return (
    <>
    <div className="heading">
        <h1 className='text-3xl mt-16 ml-10 underline underline-offset-8'>
            Market Analysis
        </h1>
    </div>
    <div className="container flex-col ml-10 mt-10">
        <div>
      <TradingViewTechnicalsBTC/>
        </div>
    </div>
    </>
  )
}

export default Markets


import Trade from './Trade'

const TradeLayout = () => {
  return (
    <>
    <div className='mt-16 ml-10'>
        <h1 className='text-3xl underline underline-offset-8'>Trading</h1>
    </div>
    <div className='mt-10 ml-10 border-spacing-1 border-2 border-black' >
        <Trade/>
    </div>
      
    </>
  )
}

export default TradeLayout

import Cards from "../Cards/Cards";
import PortfolioButton from "../Portfolio Button/PortfolioButton";
import SearchBar from "../SearchBar/SearchBar";
import StockTicker from "../Stock Ticker/StockTicker";
import TradingViewChart from "../TradingViewComponents/TradingViewChart";
import TradingViewMarketQuotesWidget from "../TradingViewComponents/TradingViewMarketFeed";
import TradingViewMarketFeed from "../TradingViewComponents/TradingViewMarketFeed";
import TradingViewNews from "../TradingViewComponents/TradingViewNews";
import TradingViewScreener from "../TradingViewComponents/TradingViewScreener";
import TradingViewWidget from "../TradingViewComponents/TradingViewScreener";
import TradingViewTechnicalAnalysis from "../TradingViewComponents/TradingViewTechnicalAnalysis";
import TradingViewTickerTape from "../TradingViewComponents/TradingViewTickerTape";
import "./Mainsdash.css";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const Maindash = () => {
  return (
    <>
      <SignedIn>
        <div>
          <div className="flex justify-between">
            <h1 className="heading text-3xl font-normal mt-16 ml-10 underline underline-offset-8">
              Dashboard
            </h1>
            <div className="mt-14 mr-10 text-3xl p-3 border-2 border-slate-400 rounded-xl shadow-[#836FFF] shadow-md hover:shadow-white after:shadow-white">
              <UserButton
                afterSignOutUrl="/"
                userProfileMode="modal"
                showName="true"
              />
            </div>
          </div>

          <div className="Maindash">
            <div className="portfolioButton flex gap-4 ml-10 mt-4">
              <PortfolioButton
                name="New Portfolio"
                sign="+"
                route="/quiz"
              />
              <PortfolioButton
                name="Current Portfolio"
                sign=""
                route="/portfolio"
              />
            </div>
            <div className="flex">
              <div className="charts mt-6 ml-10 flex">
                <TradingViewChart />
              </div>
              <div className="cards ml-10 mt-6 ">
                {/* <Cards/> */}
                <TradingViewNews />
              </div>
            </div>
            {/* <div className="market-feed mt-5 ml-10 mb-10">
              <TradingViewMarketFeed />
            </div> */}
            <div className="mt-10 ml-10 ">
              
            <TradingViewScreener/>
            </div>
         
              <TradingViewTickerTape />
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default Maindash;

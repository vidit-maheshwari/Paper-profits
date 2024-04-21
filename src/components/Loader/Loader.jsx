import  { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import './Loader.scss'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Algora - </span>
        <span>Invest</span>
        <span>Wisely.</span>
      </div>
    </div>
  );
};

export default PreLoader;

import Card from './Card';
import mf_1 from '../Images/mf_1.jpg';

const Cards = () => {

    const cardsData = [
        {
          name: "Aditya Birla Sunlife Fund",
          image: mf_1,
          pastThreeYearReturns: "x%",
        },
        {
          name: "Quant Small Cp Fund",
          image: mf_1,
          pastThreeYearReturns: "x%",
        },
        {
          name: "Quant infrastructure Direct Growth",
          image: mf_1,
          pastThreeYearReturns: "x%",
        },
        {
          name: "ICICI Prudential Fund",
          image: mf_1,
          pastThreeYearReturns: "x%",
        },
   
    
    ];
      
  return (
    <>
    
    <div className="flex space-x-4">
 
        {cardsData.map((item,index) => (
           
            <Card key={index} name={item.name} image={item.image} returns={item.pastThreeYearReturns}/>

        ))}
     
    </div>
    
    </>
  );
}

export default Cards;

import { LineChart } from '@tremor/react';
import mf_1 from '../images/mf_1.jpg'

const chartdata = [
  {
    date: 'Jan 23',
    Running: 167,
  },
  {
    date: 'Feb 23',
    Running: 125,
  },
  {
    date: 'Mar 23',
    Running: 156,
  },
  {
    date: 'Apr 23',
    Running: 165,
  },
  {
    date: 'May 23',
    Running: 153,
  },
  {
    date: 'Jun 23',
    Running: 124,
  },
];

export default function Barchart() {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      
 
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} bpm
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
    <div className='m ml-52 mt-24'>
      <div className="heading">
      <img src={mf_1} height="60px" width="60px" alt="" />
      <h3 className=" text-3xl font-normal mt-6">MF Name</h3>
      </div>
      <div className='buttons flex gap-3'>
      <div className=" p-2 border-2 border-spacing-2 border-slate-500 rounded-3xl bg-white text-slate-800 text-sm w-14 my-2 ">
        Equity
      </div>
      <div className=" p-2 border-2 border-spacing-2 border-slate-500 rounded-3xl bg-white text-slate-800 text-sm w-16 my-2 ">
        flexicap
      </div>
      <div className=" p-2 border-2 border-spacing-2 border-slate-500 rounded-3xl bg-white text-slate-800 text-sm w-20 my-2 ">
        High Risk
      </div>
      </div>
      <div className=' w-[700px] h-[400px] bg-red-500'>
      <LineChart
        className=" mt-2 h-[400px]"
        data={chartdata}
        index="date"
        categories={['Running']}
        colors={['blue']}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
      </div>
      </div>
    </>
  );
}
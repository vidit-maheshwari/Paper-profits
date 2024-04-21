import React, { useState } from 'react';

const SIPCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateTotalAmount = () => {
    const principal = parseFloat(investmentAmount);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(interestRate) / 100 / 12;
    const periods = parseFloat(investmentPeriod) * 12;

    let total = 0;
    for (let i = 0; i < periods; i++) {
      total = (total + monthly) * (1 + rate);
    }

    total += principal * Math.pow(1 + rate, periods);

    setTotalAmount(total.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">SIP Calculator</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="investmentAmount">
            Investment Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="investmentAmount"
            type="number"
            placeholder="Enter Investment Amount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthlyContribution">
            Monthly Contribution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="monthlyContribution"
            type="number"
            placeholder="Enter Monthly Contribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestRate">
            Annual Interest Rate (%)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interestRate"
            type="number"
            placeholder="Enter Annual Interest Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="investmentPeriod">
            Investment Period (in years)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="investmentPeriod"
            type="number"
            placeholder="Enter Investment Period"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={calculateTotalAmount}
          >
            Calculate
          </button>
          {totalAmount !== null && (
            <p className="text-gray-700 font-bold">{`Total Amount after ${investmentPeriod} years: ₹${totalAmount}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;

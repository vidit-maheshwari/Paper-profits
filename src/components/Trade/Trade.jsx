import { useState, useEffect } from 'react';

const Trade = () => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState('btcusd');
  const [cryptoList, setCryptoList] = useState([
    { symbol: 'btcusd', name: 'Bitcoin (BTC)' },
    { symbol: 'ethusd', name: 'Ethereum (ETH)' },
    { symbol: 'usdtusd', name: 'Tether (USDT)' },
    { symbol: 'solusd', name: 'Solana (SOL)' },
    { symbol: 'usdcusd', name: 'USD Coin (USDC)' },
    { symbol: 'xrpusd', name: 'Ripple (XRP)' },
    { symbol: 'dogeusd', name: 'Dogecoin (DOGE)' },
  ]);

  const [transactions, setTransactions] = useState([]);
  const [buyingPrice, setBuyingPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [pnl, setPnl] = useState(0);
  const [netPnl, setNetPnl] = useState(0);
  const [isBuying, setIsBuying] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isPositionOpen, setIsPositionOpen] = useState(false);
  const [isSquareOffDisabled, setIsSquareOffDisabled] = useState([]);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://api.gemini.com/v2/ticker/${selectedCrypto}`);
        const data = await response.json();
        if (data.ask) {
          setCurrentPrice(parseFloat(data.ask));
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching cryptocurrency price:', error);
      }
    };

    const interval = setInterval(fetchPrice, 5000);
    fetchPrice();

    return () => clearInterval(interval);
  }, [selectedCrypto]);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('paperTradingTransactions'));
    if (savedTransactions) {
      setTransactions(savedTransactions);
      setIsSquareOffDisabled(Array(savedTransactions.length).fill(false));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('paperTradingTransactions', JSON.stringify(transactions));
    const pnlValues = transactions.map(transaction => parseFloat(transaction.pnl));
    const sumPnl = pnlValues.reduce((acc, val) => acc + val, 0);
    setNetPnl(sumPnl.toFixed(6));
  }, [transactions]);

  const handleBuy = () => {
    setBuyingPrice(currentPrice);
    setIsBuying(true);
    setIsPositionOpen(true);
    setFeedbackMessage('');
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseFloat(event.target.value);
    setQuantity(newQuantity);
  };

  const handleConfirmPurchase = () => {
    const purchaseMessage = `Purchase successful! Bought ${quantity} ${selectedCrypto.toUpperCase()} at $${currentPrice}`;
    setFeedbackMessage(purchaseMessage);

    const transaction = {
      type: 'buy',
      symbol: selectedCrypto,
      price: currentPrice,
      quantity: quantity,
      pnl: 0 // Set to 0 initially
    };

    setTransactions([...transactions, transaction]);
    setIsSquareOffDisabled([...isSquareOffDisabled, false]);
  };

  const handleSquareOff = () => {
    const pnlValue = (currentPrice - buyingPrice) * quantity;
    setPnl(pnlValue.toFixed(6));

    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.type === 'buy') {
        const pnlValue = (currentPrice - transaction.price) * transaction.quantity;
        return {
          ...transaction,
          pnl: pnlValue.toFixed(6)
        };
      }
      return transaction;
    });

    setTransactions(updatedTransactions);

    setIsPositionOpen(false);
    setBuyingPrice(null);
    setQuantity(1);
    setFeedbackMessage('Position squared off!');
  };

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };

  const handleSquareOffTransaction = (index) => {
    const transactionToSquareOff = transactions[index];
    if (transactionToSquareOff.type === 'buy') {
      const pnlValue = (currentPrice - transactionToSquareOff.price) * transactionToSquareOff.quantity;
      const updatedTransaction = {
        ...transactionToSquareOff,
        pnl: pnlValue.toFixed(6)
      };
      const updatedTransactions = [...transactions];
      updatedTransactions[index] = updatedTransaction;

      // Update net P&L
      const pnlValues = updatedTransactions.map(transaction => parseFloat(transaction.pnl));
      const sumPnl = pnlValues.reduce((acc, val) => acc + val, 0);
      setNetPnl(sumPnl.toFixed(6));

      // Update transactions
      setTransactions(updatedTransactions);

      // Reset state variables
      setIsPositionOpen(false);
      setBuyingPrice(null);
      setQuantity(1);
      setFeedbackMessage('Transaction squared off!');
      // Disable square off button for this transaction
      setIsSquareOffDisabled(prevState => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
    } else {
      // This transaction is not a buy transaction
      setFeedbackMessage('Cannot square off this transaction. Only buy transactions can be squared off.');
    }
  };

  return (
    <>
      <div className=''>
        <div className="container mx-auto w-98 p-4 bg-gray-100 rounded-lg shadow-lg ml-10">
          <h1 className="text-3xl font-bold text-center mb-4">Trades</h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Select Cryptocurrency:</p>
            <select
              className="text-lg"
              value={selectedCrypto}
              onChange={handleCryptoChange}
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.symbol} value={crypto.symbol}>{crypto.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Current Price:</p>
            <p className="text-lg">${currentPrice}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Net P&L:</p>
            <p className="text-lg">${netPnl}</p>
          </div>
          {isPositionOpen && (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md text-lg font-semibold mb-4"
              onClick={handleSquareOff}
            >
              Square Off
            </button>
          )}
          {isBuying ? (
            <div className="flex items-center mb-4">
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-1/2 mr-2"
                type="number"
                step="any"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-semibold mr-2"
                onClick={handleConfirmPurchase}
              >
                Confirm Purchase
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-md text-lg font-semibold"
                onClick={() => setIsBuying(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md text-lg font-semibold mb-4"
              onClick={handleBuy}
            >
              Buy
            </button>
          )}
          <h2 className="text-2xl font-bold mb-2">Transactions</h2>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index} className="mb-2">
                <p>
                  <span className="font-semibold">Type:</span> {transaction.type},
                  <span className="font-semibold"> Symbol:</span> {transaction.symbol},
                  <span className="font-semibold"> Price:</span> ${transaction.price},
                  <span className="font-semibold"> Quantity:</span> {transaction.quantity},
                  <span className="font-semibold"> P&L:</span> ${transaction.pnl}
                  <button
                    className="bg-red-500 text-white py-1 px-2 ml-2 rounded-md text-sm font-semibold"
                    onClick={() => handleSquareOffTransaction(index)}
                    disabled={isSquareOffDisabled[index]}
                  >
                    Square Off
                  </button>
                </p>
              </li>
            ))}
          </ul>
          {isPositionOpen && (
            <p className="text-lg font-semibold mt-4">Current Position P&L: ${pnl}</p>
          )}
          {feedbackMessage && (
            <p className="text-lg font-semibold mt-4">{feedbackMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Trade;

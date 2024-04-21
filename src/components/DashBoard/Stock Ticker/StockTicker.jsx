
export default function StockTicker() {
    return (
      <div className="w-full max-w-sm rounded-lg border border-gray-200 dark:border-gray-800 bg-white">
        <div className="flex items-center p-2">
          <StoreIcon className="w-6 h-6" />
          <h3 className="text-lg font-medium ml-2">Stocks</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">AAPL</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Apple Inc.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$175.96</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">+0.75%</div>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">GOOGL</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Alphabet Inc.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$2773.40</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">-1.25%</div>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">MSFT</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Microsoft Corporation</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$303.56</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">+1.50%</div>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">TSLA</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Tesla, Inc.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$1100.00</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">-2.00%</div>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">AMZN</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Amazon.com, Inc.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$3275.00</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">+0.50%</div>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium">NFLX</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Netflix, Inc.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">$400.00</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">-1.25%</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function StoreIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        <path d="M2 7h20" />
        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
      </svg>
    )
  }
  
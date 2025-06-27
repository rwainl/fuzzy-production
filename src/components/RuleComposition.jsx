import React from "react";

function RuleComposition({ item }) {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-100 border-l-4 border-blue-500 rounded-xl p-5 shadow-lg mb-6 flex items-start gap-4">
      <div className="bg-blue-500 p-3 rounded-full text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 18a9 9 0 100-18 9 9 0 000 18z"
          />
        </svg>
      </div>
      <div>
        <p className="text-gray-700">
          Berdasarkan data yang diberikan, jika jumlah{" "}
          <span className="font-medium text-blue-700">permintaan</span> adalah{" "}
          <span className="font-bold">{item.demandPred}</span> dan{" "}
          <span className="font-medium text-blue-700">persediaan</span> adalah{" "}
          <span className="font-bold">{item.supplyPred}</span>, maka jumlah{" "}
          <span className="font-medium text-green-700">produksi</span> yang
          disarankan adalah{" "}
          <span className="font-bold text-green-600">{item.momValue}</span>.
        </p>
      </div>
    </div>
  );
}

export default RuleComposition;

import React from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import RuleImplication from "./RuleImplication";
import RuleComposition from "./RuleComposition";

function ShowResult({ item }) {
  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-2 md:mb-0">
          Hasil Fuzzy Inference
        </h2>
        <p className="text-sm text-gray-500">{item.time}</p>
      </div>
      <hr className="my-4 border-gray-300" />
      <RuleComposition item={item} />
      <div className="grid grid-cols-1 gap-6">
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Permintaan</h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="w-full overflow-x-auto md:w-[470px]">
              <LineChart width={470} height={250} data={item.demandGraph}>
                <XAxis dataKey="x" />
                <YAxis domain={[0, 1]} />
                <Tooltip />
                <Legend
                  formatter={(value) => {
                    if (value === "turun") return "Permintaan Turun";
                    if (value === "naik") return "Permintaan Naik";
                    return value;
                  }}
                />
                <Line type="linear" dataKey="turun" stroke="#ff7300" />
                <Line type="linear" dataKey="naik" stroke="#387908" />
              </LineChart>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-auto">
              <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
                <p className="text-gray-700">
                  μ Permintaan Turun :
                  <span className="ml-2 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.demandMinResult}
                  </span>
                </p>
              </div>
              <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
                <p className="text-gray-700">
                  μ Permintaan Naik :
                  <span className="ml-2 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.demandMaxResult}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Persediaan</h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="w-full overflow-x-auto md:w-[470px]">
              <LineChart width={470} height={250} data={item.supplyGraph}>
                <XAxis dataKey="x" />
                <YAxis domain={[0, 1]} />
                <Tooltip />
                <Legend
                  formatter={(value) => {
                    if (value === "sedikit") return "Persediaan Sedikit";
                    if (value === "banyak") return "Persediaan Banyak";
                    return value;
                  }}
                />
                <Line type="linear" dataKey="banyak" stroke="#ff7300" />
                <Line type="linear" dataKey="sedikit" stroke="#387908" />
              </LineChart>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-auto">
              <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
                <p className="text-gray-700">
                  μ Persediaan Turun :
                  <span className="ml-2 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.supplyMinResult}
                  </span>
                </p>
              </div>
              <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
                <p className="text-gray-700">
                  μ Persediaan Naik :
                  <span className="ml-2 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.supplyMaxResult}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <RuleImplication item={item} />
        </div>
      </div>
    </>
  );
}

export default ShowResult;

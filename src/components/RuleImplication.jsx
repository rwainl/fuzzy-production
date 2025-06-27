import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function RuleImplication({ item }) {
  return (
    <>
      <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-sm">
          1
        </span>
        <h4 className="text-lg font-bold mb-3 text-indigo-700">Hasil Rule 1</h4>
        <AreaChart
          width={500}
          height={250}
          data={item.implicationAreaZ1}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="y"
            stroke="#4f46e5"
            fill="#c7d2fe"
            fillOpacity={0.5}
            name="α - predikat"
          />
        </AreaChart>
        <div className="text-gray-600">Aturan</div>
        <div className="text-gray-800 font-medium">
          Jika permintaan turun dan persediaan banyak, maka produksi =
          persediaan - permintaan
        </div>
        <div className="text-gray-600">α-predikat-1</div>
        <div className="text-gray-800 font-semibold">{item.rule1Result}</div>
        <div className="text-gray-600">z-1</div>
        <div className="text-gray-800 font-semibold">{item.z1}</div>
      </div>
      <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-sm">
          2
        </span>
        <h4 className="text-lg font-bold mb-3 text-indigo-700">Hasil Rule 2</h4>
        <AreaChart
          width={500}
          height={250}
          data={item.implicationAreaZ2}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="y"
            stroke="#4f46e5"
            fill="#c7d2fe"
            fillOpacity={0.5}
            name="α - predikat"
          />
        </AreaChart>
        <div className="text-gray-600">Aturan</div>
        <div className="text-gray-800 font-medium">
          Jika permintaan turun dan persediaan banyak, maka produksi =
          permintaan
        </div>
        <div className="text-gray-600">α-predikat-2</div>
        <div className="text-gray-800 font-semibold">{item.rule2Result}</div>
        <div className="text-gray-600">z-2</div>
        <div className="text-gray-800 font-semibold">{item.z2}</div>
      </div>
      <div className="border rounded-lg px-4 py-4 mb-4 shadow-md">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-sm">
          3
        </span>
        <h4 className="text-lg font-bold mb-3 text-indigo-700">Hasil Rule 3</h4>
        <AreaChart
          width={500}
          height={250}
          data={item.implicationAreaZ3}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="y"
            stroke="#4f46e5"
            fill="#c7d2fe"
            fillOpacity={0.5}
            name="α - predikat"
          />
        </AreaChart>
        <div className="text-gray-600">Aturan</div>
        <div className="text-gray-800 font-medium">
          Jika permintaan turun dan persediaan banyak, maka produksi =
          permintaan
        </div>
        <div className="text-gray-600">α-predikat-3</div>
        <div className="text-gray-800 font-semibold">{item.rule3Result}</div>
        <div className="text-gray-600">z-3</div>
        <div className="text-gray-800 font-semibold">{item.z3}</div>
      </div>
      <div className="border rounded-lg px-4 py-4 mb-4 shadow-md bg-white">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-sm">
          4
        </span>
        <h4 className="text-lg font-bold mb-3 text-indigo-700">Hasil Rule 4</h4>
        <AreaChart
          width={500}
          height={250}
          data={item.implicationAreaZ4}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="y"
            stroke="#4f46e5"
            fill="#c7d2fe"
            fillOpacity={0.5}
            name="α - predikat"
          />
        </AreaChart>
        <div className="text-gray-600">Aturan</div>
        <div className="text-gray-800 font-medium">
          Jika permintaan naik dan persediaan sedikit, maka produksi = 0.5 x
          persediaan - permintaan
        </div>
        <div className="text-gray-600">α-predikat-4</div>
        <div className="text-gray-800 font-semibold">{item.rule4Result}</div>
        <div className="text-gray-600">z-4</div>
        <div className="text-gray-800 font-semibold">{item.z4}</div>
      </div>
    </>
  );
}

export default RuleImplication;

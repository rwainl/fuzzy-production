import React from "react";

function Result({ data, dMin, dMax }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6 mt-6 border rounded-lg shadow-lg">
      {data.map((item, index) => (
        <>
          <div className="" key={index}>
            <p key={index}>D Min : {dMin(item.dLow, item.dHigh, item.dPred)}</p>
            <p key={index}>D Max : {dMax(item.dLow, item.dHigh, item.dPred)}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Result;

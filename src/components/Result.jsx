import React from "react";

function Result({ data, dMin, dMax }) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-6 mt-6 border rounded-lg shadow-lg">
        <ul>
          {data.map((item, index) => (
              <li key={index}>
                <p>Permintaan Minimal :{dMin()}</p>
                <p>Permintaan Maksimal :{dMax()}</p>
              </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Result;

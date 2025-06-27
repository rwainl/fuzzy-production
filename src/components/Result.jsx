import React from "react";
import { useState } from "react";
import ListResult from "./ListResult.jsx";
import ShowResult from "./ShowResult.jsx";

function Result({ data, onDelete}) {
  const [showedData, setShowedData] = useState([]);

  const showHandler = (id) => {
    const newData = data.filter((item) => item.id === id);
    setShowedData(newData);
  }

  return (
    <>
      <div className="max-w-8xl mx-auto px-6 py-6 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2">
          <div className="rounded-lg px-6 py-4">
            <h1 className="text-2xl font-bold mb-4 text-justify">History</h1>
            <ul>
            {data.map((item, index) => {
              return(
                  <ListResult item={item} onDelete={onDelete} onShow={showHandler} key={index} />
              )
            })}
            </ul>
          </div>
          <div className="col-span-3 px-4 py-4 rounded-lg">
            {showedData.map((item, index) => {
              return(
                <ShowResult item={item} key={index} />
              )
            })}
          </div>
      </div>
    </>
  );
}

export default Result;

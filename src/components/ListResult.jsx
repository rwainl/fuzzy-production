import React from "react";

function ListResult({ item, onDelete, onShow }) {
  return (
    <li className="mx-auto bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 mb-3 px-6 py-4">
      <div className="mb-4">
        <p className="ftext-sm text-gray-500 font-medium">{item.time}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onShow(item.id)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 rounded-md text-sm transition-colors duration-300"
        >
          Show
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-md text-sm transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListResult;

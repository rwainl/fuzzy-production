import React from "react";

function Toast({ message }) {
  return (
    <>
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all duration-300">
        {message}
      </div>
    </>
  );
}

export default Toast;

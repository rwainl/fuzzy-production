import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="">
        <nav className="bg-purple-600 text-white rounded-lg px-6 py-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Fuzzy Logic Prediction</h1>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;

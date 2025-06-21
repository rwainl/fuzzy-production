import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="">
        <nav className="border rounded-lg px-6 py-4 flex justify-between">
          <h1 className="text-lg font-semibold">Fuzzy Logic Prediction</h1>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;

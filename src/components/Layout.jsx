import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-purple-600 text-white rounded-lg px-6 py-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            Fuzzy Logic Prediction
          </h1>
        </nav>
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer className="bg-purple-800 text-purple-100 px-6 py-4 mt-8 rounded-t-lg text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Fuzzy Logic Prediction. All
              rights reserved.
            </p>
            <p>by rwainl | Built using React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full sm:min-w-min lg:max-h-screen">
      <Sidebar />
      <div className=" w-full flex flex-col">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;

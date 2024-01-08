import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id="main">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../templates/HomeTemplate/Layouts/Footer";
import Navbar from "../../templates/HomeTemplate/Layouts/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

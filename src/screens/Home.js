import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card"; // Import your Card component
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <Navbar />
     
      <div>
        <div> <Carousal /></div>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

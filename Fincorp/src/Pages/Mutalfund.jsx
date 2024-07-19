import React, { useState } from "react";
import Header from "../Component/Header";
import SIP from "./SIP";
import Lumpsum from "./Lumpsum";

function Mutalfund() {
  const [activeTab, setActiveTab] = useState("SIP");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Header />
      <div className="container flex justify-evenly">
        <button
          className={activeTab === "SIP" ? "active" : ""}
          onClick={() => handleTabClick("SIP")}
        >
          <p className=" p-2 m-2 rounded-md bg-black text-white font-sans text-lg font-medium"> SIP </p>
        </button>
        <button
          className={activeTab === "Lumpsum" ? "active" : ""}
          onClick={() => handleTabClick("Lumpsum")}
        >
         <p className=" p-1 m-1 rounded-md bg-black text-white font-sans text-lg font-medium">Lumpsum</p> 
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "SIP" && <SIP />}
        {activeTab === "Lumpsum" && <Lumpsum />}
      </div>
    </div>
  );
}

export default Mutalfund;

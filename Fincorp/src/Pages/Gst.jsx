import React, { useState } from "react";
import Header from "../Component/Header";
import InclusiveGST from "./InclusiveGST";
import ExclusiveGST from "./ExclusiveGST";

const calculateGST = () => {
  const [activeTab, setActiveTab] = useState("Inclusive");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    // Section for Tabs
    <div className="container">
      <Header />
      <div className="container flex justify-center">
        <button
          className={activeTab === "Inclusive" ? "active" : ""}
          onClick={() => handleTabClick("Inclusive")}
        >
          Inclusive GST
        </button>
        <button
          className={activeTab === "Exclusive" ? "active" : ""}
          onClick={() => handleTabClick("Exclusive")}
        >
          Exclusive GST
        </button>
      </div>

      {/* Section for Tab Contents */}
      <div className="container flex justify-center">
        {activeTab === "Inclusive" && <InclusiveGST />}
        {activeTab === "Exclusive" && <ExclusiveGST />}
      </div>
    </div>
  );
};

export default calculateGST;

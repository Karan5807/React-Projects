import React, { useState } from "react";
import Header from "../Component/Header";

const calculateGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);
  const [activeTab, setActiveTab] = useState("Inclusive");

  const includedTax = taxAmount * (taxSlab / 100);
  const afterTax = includedTax + taxAmount;

  const excludedTax = Math.round(
    taxAmount - [taxAmount * (100 / (100 + taxSlab))]
  );
  const postGst = taxAmount - excludedTax;
  console.log(excludedTax, postGst);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    // Section for Tabs 
    <div className="container">
      <Header/>
      <div className="container flex justify-between">
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
      <div className="container">
        {activeTab === "Inclusive" && (
          <div className="container">
            <div className="container">
              <p>Tax Amount</p>
              <p>{taxAmount}</p>
              <input
                type="range"
                min={500}
                max={1000000}
                step={1}
                value={taxAmount}
                onChange={(e) => setTaxAmount(e.target.value)}
              />
              <p>Tax Slab</p>
              <p>{taxSlab}</p>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={taxSlab}
                onChange={(e) => setTaxSlab(e.target.value)}
              />
              <p>Total GST</p>
              <p>{includedTax}</p>

              <p>Post GST Amount</p>
              <p>{afterTax}</p>
            </div>
          </div>
        )}
        {activeTab === "Exclusive" && (
          <div className="container">
            <div className="container">
              <p>Tax Amount</p>
              <p>{taxAmount}</p>
              <input
                type="range"
                min={5000}
                max={1000000}
                step={1}
                value={taxAmount}
                onChange={(e) => setTaxAmount(e.target.value)}
              />
              <p>Tax Slab</p>
              <p>{taxSlab}</p>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={taxSlab}
                onChange={(e) => setTaxSlab(e.target.value)}
              />
              <p>Total GST</p>
              <p>{excludedTax}</p>

              <p>Post GST Amount</p>
              <p>{postGst}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default calculateGST;

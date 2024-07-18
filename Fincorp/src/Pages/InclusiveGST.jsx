import React, { useState } from "react";

const InclusiveGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const Amount = parseInt(taxAmount);
  const taxPercent = parseFloat(taxSlab / 100);

  // Section for Inclusive
  const inclusiveTax = Math.round(Amount * taxPercent);
  const afterInclusiveTax = Amount + inclusiveTax;

  return (
    <div className="container">
      <p>Tax Amount</p>
      <p>{taxAmount}</p>
      <input
        type="range"
        min={500}
        max={500000}
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
      <p>{inclusiveTax}</p>

      <p>Post GST Amount</p>
      <p>{afterInclusiveTax}</p>
    </div>
  );
};

export default InclusiveGST;

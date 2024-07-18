import React, { useState } from "react";

const ExclusiveGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const Amount = parseInt(taxAmount);

  //  Section for Excluisve
  const excludedTax = Math.round(Amount - [Amount * (100 / (100 + taxSlab))]);
  const postGst = parseInt(Amount - excludedTax);

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
      <p>{excludedTax}</p>

      <p>Post GST Amount</p>
      <p>{postGst}</p>
    </div>
  );
};

export default ExclusiveGST;

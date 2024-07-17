import React, { useState } from 'react';

const EPFCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [employeeContribution, setEmployeeContribution] = useState(12); // default EPF contribution by employee in %
  const [employerContribution, setEmployerContribution] = useState(3.67); // default EPF contribution by employer in %
  const [years, setYears] = useState(30); // default number of years
  const [rate, setRate] = useState(8.1); // current EPF interest rate
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateEPF = () => {
    let salary = parseFloat(basicSalary);
    let employeeMonthlyContribution = (salary * employeeContribution) / 100;
    let employerMonthlyContribution = (salary * employerContribution) / 100;
    let annualContribution = (employeeMonthlyContribution + employerMonthlyContribution) * 12;
    let r = parseFloat(rate) / 100;
    let n = parseInt(years);

    // The formula to calculate EPF maturity amount
    // A = P * (1 + r/n)^(n*t)
    let a = annualContribution * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    setMaturityAmount(a.toFixed(2));
  };

  return (
    <div>
      <h2>EPF Calculator</h2>
      <div>
        <label>Basic Monthly Salary: </label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Employee Contribution (%): </label>
        <input
          type="number"
          value={employeeContribution}
          onChange={(e) => setEmployeeContribution(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label>Employer Contribution (%): </label>
        <input
          type="number"
          value={employerContribution}
          onChange={(e) => setEmployerContribution(e.target.value)}
          step="0.1"
        />
      </div>
      <div>
        <label>Number of Years: </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%): </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          step="0.1"
        />
      </div>
      <button onClick={calculateEPF}>Calculate</button>
      {maturityAmount && (
        <div>
          <h3>Maturity Amount: ₹{maturityAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default EPFCalculator;

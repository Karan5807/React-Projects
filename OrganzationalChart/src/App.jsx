import './App.css'
import demoData from './assets/Database/demoData';

const App = () => {

  console.log(demoData, "demoData");

  const employeeList = demoData?.map((data) => data?.employees?.[1])

  console.log(employeeList, "Engineer");

  const mapped = employeeList?.map((data) => data?.[0])
  console.log(mapped,"mapped");


  const TeamMember = ({ name, role, imageUrl }) => {
    return (
      <div className="team-member-card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    );
  };

  return (
    <>
      <p>Hello</p>
      {employeeList?.map((employee) => {
        <TeamMember name={employee?.name} />
      })}
    </>
  )
}

export default App;

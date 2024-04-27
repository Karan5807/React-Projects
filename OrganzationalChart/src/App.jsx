import './App.css'
import demoData from './assets/Database/demoData';
import MemberCard from './assets/Component/MemberCard';
import CompanyCard from './assets/Component/CompanyCard';
import {Tree, TreeNode} from "react-organizational-chart";

const App = () => {
  const companyData = demoData?.[0];
  const employeeList = companyData.employees;

  // Function to filter data based on name
  function filterDataByBranch(data, department) {
     return data.filter(item => item.department === department);
  }
  const CEO = filterDataByBranch(employeeList, "CEO");
  console.log(CEO,"CEO");

    // Function to filter data based on name
  function filterDataByLevel(data, Level) {
    return data.filter(item => item.Level === Level);
  }
  const Level2 = filterDataByLevel(employeeList, 2);
  const Level3 = filterDataByLevel(employeeList, 3);
  const Level5 = filterDataByLevel(employeeList, 5);

  const engineerList = filterDataByBranch(Level5,"Engineering");
  const managerList = filterDataByBranch(Level5,"Marketing");
  console.log(Level2, "Level");
  console.log(Level3, "Level");
  console.log(engineerList,"Engineering");
  console.log(managerList,"Marketing");





 

  return (
    <div>
      <Tree lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'}label={<div>
        {demoData.map((data, idx)=>(<CompanyCard key={idx} companyName={data.name} ceo={data.ceo}/>))}
      </div>}>
        <TreeNode lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'}>
          <Tree lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'} label={<div>{CEO.map((data, index) =>(<MemberCard key={index} employeeName={data.first_name+ " " +data.last_name} role={data.position} email={data.email}/>))}</div>}>
          <TreeNode lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'}>
            {Level2.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}
            <TreeNode>{engineerList.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}</TreeNode>
            <TreeNode>{managerList.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}</TreeNode>
          </TreeNode>
          </Tree>
        </TreeNode>

        
        {/* <TreeNode>{engineerList.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}
        </TreeNode> */}
      </Tree>
    </div>
  )
}

export default App;

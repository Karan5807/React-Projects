import './App.css'
import demoData from './assets/Database/demoData';
import MemberCard from './MemberCard';
import {Tree, TreeNode} from "react-organizational-chart";

const App = () => {
  const companyData = demoData?.[0];
  const companyName = demoData?.[0].name;
  const employeeList = companyData.employees;

  // Function to filter data based on name
  function filterDataByBranch(data, department) {
     return data.filter(item => item.department === department);
  }

  const department = filterDataByBranch(employeeList,"department")
  console.log(department);

  const CEO = filterDataByBranch(employeeList, "CEO");
  const engineerList = filterDataByBranch(employeeList,"Engineering");
  const managerList = filterDataByBranch(employeeList,"Marketing");
  console.log(engineerList,"Engineering");
  console.log(managerList,"Marketing");
  console.log(CEO,"CEO");

 

  return (
    <>
      <Tree lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'} label={companyName}>
        <TreeNode label={"department"}>
          <TreeNode>{engineerList.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}
          </TreeNode>
        </TreeNode>

        <TreeNode>{managerList.map((data)=><MemberCard name={data.first_name+ " " +data.last_name}/>)}</TreeNode>
      </Tree>
    </>
  )
}

export default App;

import React from 'react';
import Employee from './Employee/Employee';
import './App.css';


function App() {
  const state = {
    employees: [
      { name : "Charlie", job: "Janitor"},
      {name : "Mac", job:"Bouncer"},
      {name:"Dee", job: "Aspiring Actress"},
      {name : "Dennis", job:"Bartender"}
    ]
  }
 let employee=(
    state.employees.map(emp =>{
      return <Employee name={emp.name} job={emp.job}/>
    })
  );
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
        {employee}
        </table>      
    </div>
  );
}

export default App;

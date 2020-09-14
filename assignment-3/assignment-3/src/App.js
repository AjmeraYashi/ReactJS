import React, {Component} from 'react';
import './App.css';
//import Employee from './Employee/Employee';

class App extends Component {
  constructor() {
      super();
      this.state = {
      name:'',
      job: '',
      employee: []
    }
  };

  name1 = "Name";
  job1 = "Job";
  remove = "Remove";

  changeHandler = (event) => {
     let input = event.target;
     let tempName = event.target.name;
     let value = input.value;
     this.setState({[tempName]:value})
  };

  addEmployeeHandler = (event) => {
    event.preventDefault();
    let employeeA = [...this.state.employee];
    employeeA.push({name:this.state.name, job:this.state.job});
    this.setState({employeeA, name: '',job:''});
  }

  style = {
    fontWeight: 'bold',
    paddingLeft: '10px'
  }

  // employeeArray = (
  //   this.state.employee.map(emp => {
  //     return <Employee 
  //       name={emp.name}
  //       job={emp.job}
  //     />
  //   })
  // );

  render() {
    return (
    <div className="App">
      <p>Add an employee with a name and a job to the table</p>
      <table>
      <thead>
        <tr>
          <th>{this.name1}</th>
          <th>{this.job1}</th>
          <th>{this.remove}</th>
        </tr>
      </thead>
      </table>
      {this.employeeArray}
      
      <form onSubmit= {this.addEmployeeHandler.bind(this)}>
        <h2>Add New Employees</h2>
        <div style={this.style}> {this.name1}</div>
        
        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
        
        <div style={this.style}> {this.job1}</div>
        
        <input type="text" name="job" value={this.state.job} onChange={this.changeHandler.bind(this)}/>
        
        <button type="submit" value="Submit"> Submit </button>
      </form>

    </div>
    )
  }
}

export default App;
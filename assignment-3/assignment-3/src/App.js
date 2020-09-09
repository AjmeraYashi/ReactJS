
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    
    super();
    this.state={
      employeeList : [
        
      ],
      addEmployee : false,
    }
    
  }
  addEmployee() {
      this.setState({
          
          addEmployee : true,
          editIndex:null,
        })
  }


  addEmployeeData(event){
    
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    
    this.state.employeeList.push(
      {
        name:name,
        job:job
      },
    )
    console.log(name);
      this.setState({
        addEmployee : false,
      })
  }


  deleteEmployee=(event, index) =>{
    const emp = this.state.employeeList.slice()
    emp.splice(index, 1)
    this.setState({  emp })
}

  renderDisplay(){
    return(
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
          {this.state.employeeList.map((value,index)=>{
            return(
              <tr>
                <td>{value.name}</td>
                <td>{value.job}</td>
                <td><button onClick={()=>{
                              this.deleteEmployee(index)
                            }}>Delete</button></td>
                </tr>
            )
            
          })}
        </table>
      </div>
    )
  }
  renderAddEmployee() {
    return(
      <div className="loginForm">
        <h1>Add New Employee</h1>
        <form>
          <label >First Name</label>
          <input type="text" id="name" placeholder="Enter Name"/>
  
          <label >Job</label>
          <input type="text" id="job" placeholder="Enter Job Title"/>
        

        <button onClick={()=>{
        this.addEmployeeData()
        }}>Submit</button>
        </form>
        
      </div>
    )
  }
  render() {
    return (
      
      <div className="App">
        {this.renderDisplay()}
      {this.addEmployee && this.renderAddEmployee()}
      

      </div>
    );
  }
}

export default App;

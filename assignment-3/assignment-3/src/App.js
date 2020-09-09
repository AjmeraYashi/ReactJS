import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    
    super();
    this.state={
      employeeList : [
       
      ],
      addEmployee : false
    }
    
  }


  addEmployee() {
      this.setState({
          
          addEmployee : true,
        })
  }


  addEmployeeData(){

    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
  
    this.state.employeeList.push(
      {
        name:name,
        job: job,

      },
    )
      this.setState({
        addEmployee : false,
      })
  }


  deleteEmployee(index){
   const empList = this.state.employeeList;
    empList.splice(index, 1)
   this.setState({
     empList
   })
  }
    

  renderDisplay(){
    return(
      
        <div>
          <h1>Employee List</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th >Name</th>
                  <th >Job</th>
                 
                  <th >Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                       <tr>
                            <td>{value.name}</td>
                            <td >{value.job}</td>
                        
                            <td ><button onClick={()=>{
                              this.deleteEmployee(index)
                            }}>Delete</button></td>
                          </tr>
                         
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
    )
    
  }

  renderAddEmployee() {
    return(
      <div>
        <h1>Add New Employee</h1>
        <form>
        <div>
          <label >Name</label>
          <input type="text"  id="name"  placeholder="Enter Name"/>
        </div>
        <div>
          <label >Job</label>
          <input type="text"  id="job" placeholder="Enter Job Title"/>
        </div>
        </form>
        <button onClick={()=>{
        this.addEmployeeData()
        }}>Submit</button>
      </div>
    )
  }

  render() {
    return (
      
      <div className="App">
      { this.renderDisplay()}
      { this.renderAddEmployee()} 
      </div>
    );
  }
}

export default App;
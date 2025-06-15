import { Component } from "react";

export default class App extends Component
{
  constructor(){
    super()
    this.state = {
      employees : [
        {empid:101,name:'Vikas',age:34,salary:12000},
        {empid:102,name:'Gopal',age:31,salary:15000},
        {empid:103,name:'Meena',age:36,salary:11000},
        {empid:104,name:'Pooja',age:32,salary:17000},
        {empid:105,name:'Lokesh',age:34,salary:19000},
      ]
    }
  }

  add = ()=>{
    var ob = {
      empid : this.idbox.value*1,
      name : this.namebox.value,
      age : this.agebox.value*1,
      salary : this.salbox.value*1
    }
    this.setState({employees: [...this.state.employees,ob]})
  }

  deleteEmp = (id)=>{
      var status = window.confirm("Are You Sure To Delete ?")
      if(status){
        // ?????????????
      }
  }

  render()
  {
    return <div>
        <h1 className="alert-success text-center">Employee Records</h1>

        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
              <input type="number" ref={ob=>this.idbox=ob} className="form-control" placeholder="Employee Id"/>
            </div>
            <div className="col-lg-6 col-md-6">
              <input type="text" ref={ob=>this.namebox=ob}  className="form-control" placeholder="Employee Name"/>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
              <input type="number" ref={ob=>this.agebox=ob}  className="form-control" placeholder="Employee Age"/>
            </div>
            <div className="col-lg-6 col-md-6">
              <input type="number" ref={ob=>this.salbox=ob}  className="form-control" placeholder="Employee Salary"/>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
              <button onClick={this.add} className="btn btn-success">Add Employee</button>
            </div>
            <div className="col-lg-6 col-md-6">
            
            </div>
          </div>
        </div>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp=><tr>
              <td>{emp.empid}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={()=>this.deleteEmp(emp.empid)} className="btn btn-danger">Delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
    </div>
  }
}
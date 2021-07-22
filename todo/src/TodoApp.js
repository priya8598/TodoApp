import React from "react";
import "./TodoApp.css";
import ViewItems from "./ViewItems";
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      duedate: "",
      status: "Initiated",
      click: "notClicked",
      items: [],
    };
  }
  onInputChange = (e) => {
    console.log();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addItem = () => {
    let currentDate = new Date();
    let givenDate = this.state.duedate;
    let items = this.state.items;
    givenDate = new Date(givenDate);
    let status = this.state.status;
    if (givenDate < currentDate) {
      status = "OverDued";
    } else {
      status = "Initiated";
    }
    if(this.state.task===''||this.state.duedate===''){
        alert('Input fields cannot be empty!')
        return
    }
    items.push({
      task: this.state.task,
      duedate: this.state.duedate,
      status: status,
      click: "notClicked",
    });
    this.setState(
      {
        task: "",
        duedate: "",
        items,
      });
  };
  onClick = (i) => {
    console.log(i, "i");
    let items = this.state.items;
    items[i].click = "clicked";
    this.setState({
      items,
    });
  };
  render() {
    return (
      <div className="todoApp">
        <div className="inputDiv">
          <label>Add Task</label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.onInputChange}
          />
          <label>Due date</label>
          <input
            type="date"
            name="duedate"
            value={this.state.duedate}
            onChange={this.onInputChange}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ViewItems
          items={this.state.items}
          duedate={this.state.duedate}
          status={this.state.status}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

import React from "react";
export default class ViewItems extends React.Component {
   
  render() {
    let items = this.props.items;
    return (
      <div>
        {items.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Due date</th>
                <th>Status</th>
              </tr>
            </thead>
            {items.map((item, i) => {
              return (
                <tbody>
                  <tr key={i} className = {item.click==='clicked'?'clicked':'notClicked'} onClick = {()=>this.props.onClick(i)}>
                    <td className = {item.status==='OverDued'?'statusOverdue':'status'}>{item.task}</td>
                    <td className = {item.status==='OverDued'?'statusOverdue':'status'}>{item.duedate}</td>
                    <td className = {item.status==='OverDued'?'statusOverdue':'status'}>{item.status}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}

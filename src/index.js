import ReactDOM from "react-dom";
import React from 'react';
import './index.css';
 
ReactDOM.render(
  <>
  <h1 className = "one">Entry Form</h1>
      <div className ="div">
        <input type="text" placeholder="Enter Name" />
        
        <input type="text" placeholder="Enter Father's Name" />
        
        <input type="text" placeholder="Enter Mother's Name" />
        
        <input type ="textarea" placeholder = "Current Address" />
        
        <input type ="number" placeholder = "Mobile Number" />
        
        <button type = "submit">Submit</button>
      </div>
      </>, document.getElementById("root")
);

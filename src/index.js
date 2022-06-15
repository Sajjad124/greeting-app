import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currTime = new Date().getHours();
const cssStyle = {};
let greeting = "";

if (currTime >= 1 && currTime <= 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currTime > 12 && currTime < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "gold";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <div>
        <marquee>Greeting App</marquee>
      </div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);

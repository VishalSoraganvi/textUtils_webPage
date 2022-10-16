import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerrcase", "success");
  };
  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("reversed the text", "success");
  };

  const changes = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="my-3">
          <h1
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            onChange={changes}
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2c2d46",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className={`btn btn-primary mx-2`} onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>
          reverse
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element !== "";
            }).length}
          minutes to read
        </p>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Please enter something" : text}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./Textanalyzer.css";

function Textanalyzer() {
  let [Text, updateText] = useState();

  function clearText() {
    if (Text != null) updateText("");
    else alert(`Please Type something in Textanalyzer !`);
  }

  function changeHandler(event) {
    Text = event.target.value;
    console.log(Text);
    updateText(Text);
  }

  function capitalization() {
    if (Text != null) {
      updateText(Text.toUpperCase());
    } else {
      alert(`Please Type something in Textanalyzer !`);
    }
  }

  function LowerCase() {
    if (Text != null) {
      updateText(Text.toLowerCase());
    } else {
      alert(`Please Type something in Textanalyzer !`);
    }
  }

  function submitHandler() {
    if (Text != null) {
      alert(`Hi your Text "${Text}" has been Submitted, Thanks`);
    } else {
      alert(`Please Type something in Textanalyzer !`);
    }
  }

  return (
    <div className="container">
      <div className="Main">
        <h1>Text Analyzer </h1>
        <textarea
          rows="18"
          placeholder="Type text here... "
          onChange={changeHandler}
          value={Text}
          className="Textanalyzer"
        />
        <br />

        <div className="button">
          <button onClick={clearText}>Clear Text</button>
          <button onClick={capitalization}>Capitalize</button>
          <button onClick={LowerCase}>LowerCase</button>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Textanalyzer;

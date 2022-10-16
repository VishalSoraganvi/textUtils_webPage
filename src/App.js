import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Accordian from "./components/Accordian";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //state defined in app.js because we can control every pages from here
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //this function will be called when a button is clicked
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e243a";
      showAlert("Dark mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<Accordian mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text here to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter Title",
  home: "Home",
  about: "About",
};

export default App;

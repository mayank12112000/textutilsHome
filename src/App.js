import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {  // function based components, earlier class based components were used
  const [mode, setMode] = useState("light") // whether dark mode is enable or not
  const [alert,setAlert]= useState(null)

  
const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
})
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
  const toggleMode = function(){
    if(mode === "light"){
      document.body.style.backgroundColor = "#1B1A55"
      setMode("dark")
      showAlert("dark mode enabled", "success")
    }
    else{
      document.body.style.backgroundColor = "white"
      setMode("light")
      showAlert("light mode enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "Textutils" mode ={mode} toggleMode ={toggleMode} aboutText = "About"/>
    <Alert className="my-3" alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
         {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

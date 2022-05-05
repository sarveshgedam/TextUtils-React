import React, { useState } from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

import Alert from './Components/Alert';
// import About from './Components/About'; 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  };


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#093069';
      showAlert("Dark Mode has been Enabled", 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", 'success');
    }
  };
  
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Utlis" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter Text Here To Analyze..." mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

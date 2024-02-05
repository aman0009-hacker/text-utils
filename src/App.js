// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './CstmComponent/Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';







function App() {
  const[mode,setMode]=useState('dark');
  const[modeString,setModeString]=useState('Enable Dark Mode');
  const[alert,alertType]=useState(null);
  


  const runConstant=()=>{
    setInterval(() => {
      document.title="TextUtils-Dark mode"

    }, 2000);
    setInterval(() => {
      document.title="TextUtils-Light mode"

    }, 1500);
  }
  const setAlert=(message,type)=>{
    alertType({
      msg:message,
      type:type

    })
   
    setTimeout(() => {
       alertType(null);
    }, 1000);
      }
  function main()
{
     if(mode==='dark')
     {
      setMode('light');
      setModeString('Enable dark Mode');
      document.body.style.backgroundColor='#063b8a';
      setAlert('Light Mode is enabled','danger');

     }
     else
     {
      setMode('dark');
      setModeString('Enable light Mode');
      document.body.style.backgroundColor='#fff';
      setAlert('Dark Mode is enabled','success');
     }
}


return (
  
  <>
  {/* <Router> */}
    <Navbar main={main} mode={mode}  run={runConstant}/>
    <TextForm header="Enter the text to analyze" mode={mode} alert={setAlert} continue={runConstant}/>
    <Alert alert={alert}/>
        <div className='container'>
          {/* Your navigation or layout components can go here */}
          {/* <Routes> */}
            {/* Define your routes */}
            {/* <Route path="/" exact element={<TextForm header="Enter the text to analyze" mode={mode} alert={setAlert} continue={runConstant}/>}/> */}
            {/* <Route path="/about" exact element={<About mode={mode}/>} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}

    </>
   );
}


export default App;

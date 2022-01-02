import React, { Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Bjfoot from './components/BJfooter';

import Jumbo from './components/BJjumbo';
import Bjlog from './components/BJlogin';
import Bjv from './components/BJvideos';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom';
import BJhead from './components/BJheader';
import BJhome from './BJhome';
import BJcourse from './components/BJcourse';
const App=()=> {
  
  return (

  <>  
    <Routes>
      <Route path="/" element={<BJhome/>}/>
      <Route path="/BJlogin" element={<Bjlog/>}/>
      <Route path="/BJlogin?login=(\&)login=" element={<BJcourse/>}/>
    </Routes>

  </> 
  
  );
}

export default App;

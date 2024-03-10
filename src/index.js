import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import App from './App';
import Signup from './Signup';
import Signin from './Signin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
  {/* <Signup/> */}
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/" element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </>
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

reportWebVitals();


// ========= Dark Mode =========
// var checkbox = document.getElementById("checkbox");
// var logo_toggler = document.getElementById("logo_toggler").src;

//   checkbox.addEventListener ('change', ()=> {
//       document.body.classList.toggle("dark-theme");
//       if(document.body.classList.contains("dark-theme")){
//         logo_toggler.src = "Logo"
//         console.log()
//       }
//       else(
//         logo_toggler.src = "Logo2"
//       )
//   })


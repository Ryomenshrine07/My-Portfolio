import React from "react";
import ReactDOM from 'react-dom';
import App from "./Components/App";
import {BrowserRouter} from 'react-router-dom';


function Main()
{
  return(
    <BrowserRouter><App/></BrowserRouter>
  );
}

let rootElement = document.querySelector('#root')

ReactDOM.render(<Main/>,rootElement);
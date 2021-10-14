import React from 'react'
import ReactDOM from 'react-dom'
import Amazon from './Amazon.js';
import App2 from './App2.js'
import data from './data.js'

ReactDOM.render(
    <Amazon slides={data}/>
, document.getElementById("root"));
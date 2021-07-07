import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import CoinModal from "./components/CoinModal";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [display, setDisplay ] = useState('none');
  const [coin, setCoin] =  useState([]);
  useEffect(() => {
    fetchCoinData();
  }, []);

  const fetchCoinData = () =>{
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    )
    .then(res => setCoinData(res.data))
    .catch(err => console.log(err));
  }
  const handleClick = (e, data) =>{
    e.preventDefault();
    console.log(data)
    setCoin(data)
  }
  return (
    <div className="App">

      <Navbar />

      <Route 
        path ='/'
        exact
        render = {props=>{
          return  <Charts 
                    {...props}
                    coinData={coinData} 
                    handleClick ={handleClick}
                  />
        }}
      />
      <Route 
        path ='/chart/:id'
        exact
        render = {props=>{
          return  <CoinModal 
                    {...props}
                    coin = {coin}
                    handleClick = { handleClick }
                  />
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>
, rootElement);

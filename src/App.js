import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import VersionCard from './Components/VersionCard';
import {useSelector} from 'react-redux';

const App = (props) => {
const cars = useSelector((state)=>state.cars)
    
return (
      <div className="App">
       <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
 
                <VersionCard cars={props.cars}/>
              </div>
              <div className="col-6">
                <VersionCard />
              </div>
            </div>
          </div>
        </div>
    );
  
}

export default App;

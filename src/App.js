import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import VersionPage from './Components/VersionPage';
import ColorPage from './Components/ColorPage';
import WheelPage from './Components/WheelPage';
import SelleriePage from './Components/SelleriePage';
import EquipementPage from './Components/EquipementPage';
import AccessoiresPage from './Components/Accessoires';
import RecapPage from './Components/RecapPage';



const App = () => {

return (

  <Router>
    <div className='App'>
    
      <Switch>

        <Route path="/VersionPage">
          <VersionPage />
        </Route>

        <Route path="/ColorPage">
          <ColorPage />
        </Route>

        <Route path="/WheelPage">
          <WheelPage />
        </Route>

        <Route path="/SelleriePage">
          <SelleriePage />
        </Route>

        <Route path="/EquipementPage">
          <EquipementPage />
        </Route>

        <Route path="/AccessoiresPage">
          <AccessoiresPage />
        </Route>

        <Route path="/RecapPage">
          <RecapPage />
        </Route>

      </Switch>
    </div>

  </Router>
    );
}

export default App;

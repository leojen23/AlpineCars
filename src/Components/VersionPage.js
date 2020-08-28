import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import VersionCard from './VersionCard';
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from 'react-redux';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import Carouselo from './Carousel';


const VersionPage = (props) => {
    
    const versions = useSelector((state) => state.version)
    const prices = useSelector((state) => state.price)
    const headerTitles = useSelector((state) => state.headerTitle)
    const steps = useSelector((state)=>state.step) 
    const paths = useSelector((state)=>state.paths) 

    // const selectVersion = (event) => {
    //     const card = event.target.parentNode.parentNode.classList.toggle("selected")
    //   }

    const displayVersionCards = () => {
        
        return Object.keys(versions).map(key => (
                <VersionCard key={versions[key].id} version={versions[key]} versionString={versions[key].name} price={prices[key]}/>
             
        ));
      }
    
    return (
        <div id='versionPage wrapper' className='versionPage'>
            
            <Header title={headerTitles.version}/>
            


            <div className="container-fluid version-body">
                
                    {displayVersionCards()}
                
            </div>
       

            <div className='footer'>
                <Footer version={versions} 
                step={steps.landing} 
                previousPath={paths[0]} 
                nextPath={paths[2]} 
                price={prices.legende}
                previousPageName={steps.landing}
                nextPageName={steps.color}/>
            </div>

        
          </div>
        
    )
}

export default VersionPage;
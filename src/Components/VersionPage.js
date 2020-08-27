import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import VersionCard from './VersionCard';
import Button from 'react-bootstrap/Button';
import {useSelector} from 'react-redux';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import Carouselo from './Carousel';


const VersionPage = (props) => {
    
    const versions = useSelector((state) => state.version)
    const headerTitles = useSelector((state) => state.headerTitle)
    const steps = useSelector((state)=>state.step) 
    const paths = useSelector((state)=>state.path) 

    const selectVersion = (event) => {
        const card = event.target.parentNode.parentNode.classList.toggle("selected")
      }

    const displayVersionCards = () => {
        // console.log(version.key)
        return Object.keys(versions).map(key => (
            <div onClick={() => selectVersion(event)}>
                <VersionCard key={versions[key].id} version={versions[key]}  />
             </div>
        ));
      }
    
    return (
        <div id='versionPage wrapper'>
            
                <Header title={headerTitles.version}/>
            


            <div className="container-fluid ">
                <div className="row version-body">
                    {displayVersionCards()}
                </div>
            </div>
            <Carouselo />
            <div className='footer'>
                <Footer version={versions} step={steps.color} path={paths}/>
            </div>

            

          </div>
        
    )
}

export default VersionPage;
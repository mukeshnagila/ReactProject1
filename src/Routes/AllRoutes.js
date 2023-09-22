import '../Components/nav.css';
import '../Components/NewPage/details.css';
import Home from '../Components/Navbar/Headers/Home';
import Bollywood from '../Components/Navbar/Headers/Bollywood';
import Technology from '../Components/Navbar/Headers/Technology';
import Hollywood from '../Components/Navbar/Headers/Hollywood';
import Fitness from '../Components/Navbar/Headers/Fitness';
import Food from '../Components/Navbar/Headers/Food';
import Error from '../Components/ForError/Error';
import {Routes, Route, NavLink} from "react-router-dom";
import ContextStore from '../ContextStore/ContextStore';
import Footer from '../Components/Navbar/Footers/Footer';
import Details from '../Components/NewPage/Details';
import { useState } from 'react';

function AllRoutes(){

    const [menuOpen, SetMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
        SetMenuOpen(false);
      };

  return(

    <div>    
        <div className='body'>
            <div className='navbaar'>
                <div className='logo'>
                    <h4 className='logoh4'>The</h4><h1 className='logoh1'>Siren</h1>
                </div>

                <div className='menu' onClick={() => {
                    SetMenuOpen(!menuOpen);
                }}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <div id="close" className={menuOpen ? "open" : ""}>
                    <div className='links'>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/" >Home</NavLink></div>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/Bollywood" >Bollywood</NavLink></div>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/Technology" >Technology</NavLink></div>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/Hollywood" >Hollywood</NavLink></div>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/Fitness" >Fitness</NavLink></div>
                        <div className='clickon'><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "green"})} className='Linkline' to="/Food" >Food</NavLink></div>
                    </div>
                </div>
                <hr></hr>
            </div><br/>
        </div>

        <ContextStore>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Bollywood" element={<Bollywood/>} />
                    <Route path="/Technology" element={<Technology/>} />
                    <Route path="/Hollywood" element={<Hollywood/>} />
                    <Route path="/Fitness" element={<Fitness/>} />
                    <Route path="/Food" element={<Food/>} />
                    <Route path="*" element={<Error/>} />
                    <Route path="/Details/:id" element={<Details />} />
                </Routes>
            </div><br/>


            <div>
                <Footer />
            </div>
        
        </ContextStore>

    </div>   
)
}

export default AllRoutes;
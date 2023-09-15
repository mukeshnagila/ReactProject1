import React from "react";
import {NavLink} from "react-router-dom";
import LastFooter from "./LastFooter";

function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      };

    return(
        <>  
            <div className="Footer">
                <div className="Fcontainer">
                    <div className="Fbox1">
                        <div className='logo'>
                            <h4 className='logoh4'>The</h4><h1 className='logoh1'>Siren</h1>
                        </div><hr/><br/>
                        <h3>Contact: +91 772 882 7144</h3>
                        <h4>Email: nagilamukesh43@gmail.com</h4>
                        <h4>Address: Pithoragarh, Uttrakhand</h4>
                        <div className="icons">
                            <a href="https://www.instagram.com/nagilabhai/"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png" alt="instaimg"></img></a>
                            <a href="https://www.facebook.com/mukesh.nagila.9"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFt4Hfav-44Qi-RvgXuP2uJbErtN1prswGkj8wlSGfe13Ek8l3aCwk3xOoC1NN6DSvBc&usqp=CAU" alt="instaimg"></img></a>
                            <a href="https://www.linkedin.com/in/mukesh-nagila-989775255/"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="instaimg"></img></a>
                            <a href="https://www.youtube.com/channel/UC0KGSCNE-RF1CLY3gUmop8A"><img src="https://static.vecteezy.com/system/resources/thumbnails/017/396/822/small/youtube-icon-social-media-apps-free-png.png" alt="instaimg"></img></a>
                        </div>
                    </div>
                    <div className="Fbox2">
                        <h3>Know More</h3><br/>
                        <h5>"You want potential leads to be able to get in contact with you as easily as possible. For that reason, website footers will often contain contact details like a business email, phone number, or mailing address. Or it might simply include a link that brings you to a contact form."</h5>
                    </div>
                    <div className="Fbox3">
                        <h3>Quick Link's</h3>                    
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/" >Home</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Bollywood" >Bollywood</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Technology" >Technology</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Hollywood" >Hollywood</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Fitness" >Fitness</NavLink></div>
                        <div><NavLink onClick={scrollToTop} style={({isActive}) => ({color : isActive ? "blue" : "White"})} className='Linkline' to="/Food" >Food</NavLink></div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                    <LastFooter />
            </div>        
        </>
    )
}

export default Footer;
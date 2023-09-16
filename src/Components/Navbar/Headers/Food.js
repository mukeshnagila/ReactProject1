
import React, { useContext } from "react";
import { store } from "../../../ContextStore/ContextStore";
import { NavLink } from "react-router-dom";

const Food = () => {
    const [cdata] = useContext(store);
    console.log(cdata);

    var num = 0;
    var num2 = 0;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    };

    return(
        <>
            <div className="startslider">
                    <div className="container">
                        <div className="box1">
                            <h1 className="theh1"> Food's </h1>
                                {cdata.filter((item) => item.category === "Food").map((item, index) => {
                                    return(
                                        <div key={index}>
                                                    <div className="inlinediv">
                                                        <div className="forimg">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <img className="img" src={item.image} alt="Food img"></img>
                                                        </NavLink>    
                                                        </div>
                                                        <div className="forcontent">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <h2 className="name">{item.name}</h2>
                                                        </NavLink>    
                                                            <p className="description">{item.description.slice(0, 360)}......</p>
                                                            <h3 className="category">{item.category} : </h3>
                                                            <p className="date">{item.date}</p>
                                                        </div>
                                                    </div><hr/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="box2">
                                    <h1 className="theh1"> Top_Posts </h1><br/>
                                    <div className="toppost">
                                        {cdata.filter((item) => item.category === 'TopFoodMain').map((item, index) => {
                                            return(
                                                <div key={index}>
                                                    <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                                    <div className="TopContainer">
                                                        <div className="TCpart1">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <h2 className="Topname">{item.name}</h2>
                                                        </NavLink>    
                                                            <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                        </div>
                                                        <div className="TCpart2">
                                                            <p className="TCpart2p">{num = num + 1}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div><br/><hr/>
                                        {cdata.filter((item) => item.category === "TopFoodSmall").map((item, index) => {
                                            return(
                                                <div key={index}>
                                                    <div className="smalltopblog">
                                                        <div className="smalltopimg">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                        </NavLink>    
                                                        </div>
                                                        <div className="smalltoptext">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <h2 className="smalltopname">{item.name}</h2>
                                                        </NavLink>    
                                                            <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                        </div>
                                                            <p className="smalltopp">{num = num + 1}</p>
                                                    </div><hr/>
                                                </div>
                                            )
                                        })}

                                    <div className="foradvertisement">
                                        <p className="advertisementP2">Advertisement</p>
                                    </div>

                                    <h1 className="theh1"> Other_Foods- </h1><br/>
                                    {cdata.filter((item) => item.category === "otherfoods").map((item, index) => {
                                            return(
                                                <div key={index}>
                                                    <div className="smalltopblog">
                                                        <div className="smalltopimg">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                        </NavLink>    
                                                        </div>
                                                        <div className="smalltoptext">
                                                        <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                            <h2 className="smalltopname">{item.name}</h2>
                                                        </NavLink>    
                                                            <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                        </div>
                                                            <p className="smalltopp">{num2 =num2 + 1}</p>
                                                    </div><hr/>
                                                </div>
                                            )
                                        })}


                                    <div className="foradvertisement">
                                        <p className="advertisementP2">Advertisement</p>
                                    </div>
                                    
                                        
                            </div>
                    </div>
            </div>        
        </>
    )
}

export default Food;
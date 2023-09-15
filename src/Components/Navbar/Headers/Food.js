
import React, { useContext } from "react";
import { store } from "../../../ContextStore/ContextStore";

const Food = () => {
    const [cdata] = useContext(store);
    console.log(cdata);
    return(
        <>
            
            <div className="container">
                <div className="box1">
                    <h1 className="theh1"> Food's </h1>
                        {cdata.filter((item) => item.category === "Food").map((item, index) => {
                            return(
                                <div key={index}>
                                            <div className="inlinediv">
                                                <div className="forimg">
                                                    <img className="img" src={item.image} alt="Food img"></img>
                                                </div>
                                                <div className="forcontent">
                                                    <h2 className="name">{item.name}</h2>
                                                    <p className="description">{item.description}</p>
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
                                                    <h2 className="Topname">{item.name}</h2>
                                                    <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                </div>
                                                <div className="TCpart2">
                                                    <p className="TCpart2p">1</p>
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
                                                    <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                </div>
                                                <div className="smalltoptext">
                                                    <h2 className="smalltopname">{item.name}</h2>
                                                    <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                </div>
                                                     <p className="smalltopp">2</p>
                                            </div><hr/>
                                        </div>
                                    )
                                })}

                            <div className="foradvertisement">
                                <p className="advertisementP">Advertisement</p>
                            </div>

                            <h1 className="theh1"> Other_Foods- </h1><br/>
                            {cdata.filter((item) => item.category === "otherfoods").map((item, index) => {
                                    return(
                                        <div key={index}>
                                            <div className="smalltopblog">
                                                <div className="smalltopimg">
                                                    <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                </div>
                                                <div className="smalltoptext">
                                                    <h2 className="smalltopname">{item.name}</h2>
                                                    <h3 className="category">TopFood : <span className="date">{item.date}</span></h3>
                                                </div>
                                                     <p className="smalltopp">3</p>
                                            </div><hr/>
                                        </div>
                                    )
                                })}


                            <div className="foradvertisement">
                                <p className="advertisementP">Advertisement</p>
                            </div>
                            
                                
                    </div>
            </div>
        </>
    )
}

export default Food;
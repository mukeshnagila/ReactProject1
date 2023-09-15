import React, { useContext } from "react";
import { store } from "../../../ContextStore/ContextStore";
import Slider from "../../../Slider/Slider";

const Home = () => {
    const [cdata] = useContext(store);
    console.log(cdata);
    return(
        
        <>
            <div className="startsliderhome">
                <Slider />
            </div>
            <div className="home">
                    <div className="homecontainer">
                        {cdata.filter((item) => item.category === 'SliderImg1').map((item,index) => {
                            return(
                                <div className="Csliderimg1" key={index}>
                                    <img className="sliderimg" src={item.image} alt="homeimg1"></img>
                                </div>
                            )
                        })}

                        <div className="Csliderimg2" >
                                    {cdata.filter((item) => item.category === 'SliderImg2').map((item,index) => {
                                        return(
                                            <>
                                                <span key={index}>
                                                        <img className="sliderimg2" src={item.image} alt="homeimg1"></img><br/>
                                                </span>
                                            </>
                                        )
                                    })} 
                                    {cdata.filter((item) => item.category === 'SliderImg3').map((item,index) => {
                                        return(                
                                            <>
                                                <span key={index}>
                                                        <img className="sliderimg2" src={item.image} alt="homeimg1"></img>
                                                </span>
                                            </>
                                        )
                                    })}    
                        </div>
                    </div>

                    {/*....................................... Latest  Post ..................................*/}


                    <h1 className="theh1"> The_Latest.... </h1><br/>
                    <div className="Hcontainer2">
                        {cdata.filter((item) => item.category === "LatestImg").map((item, index) => {
                            return(
                                <>
                                    <div className="HCchildbox" key={index}>
                                        <img className="latestIMG" src={item.image} alt="HomeContentImg"></img>
                                        <h2 className="name">{item.name}</h2><br />
                                        <p className="description">{item.description.slice(0, 250)}.......</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    {/*....................................... Top Stories Of Home Page And Top Post ..................................*/}

                    <div className="container">
                    <div className="box1">
                        <h1 className="theh1"> Top_Stories </h1>
                            {cdata.filter((item) => item.id % 9 === 0).map((item, index) => {
                                console.log(item);
                                return(
                                    <div key={index}>
                                                <div className="inlinediv">
                                                    <div className="forimg">
                                                        <img className="img" src={item.image} alt="bollywood img"></img>
                                                    </div>
                                                    <div className="forcontent">
                                                        <h2 className="name">{item.name}</h2>
                                                        <p className="description">{item.description.slice(0, 250)}.....</p>
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
                                    {cdata.filter((item) => item.category === 'TopBollywoodMain').map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <img className="Topimg" src={item.image} alt="TopPost Img"></img>
                                                <div className="TopContainer">
                                                    <div className="TCpart1">
                                                        <h2 className="Topname">{item.name}</h2>
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                    <div className="TCpart2">
                                                        <p className="TCpart2p">1</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div><br/><hr/>
                                {cdata.filter((item) => item.id % 20 === 0).map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                        <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                    </div>
                                                    <div className="smalltoptext">
                                                        <h2 className="smalltopname">{item.name}</h2>
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                        <p className="smalltopp">2</p>
                                                </div><hr/>
                                            </div>
                                        )
                                    })}

                                <div className="foradvertisement">
                                    <p className="advertisementP">Advertisement</p>
                                </div>

                                <h1 className="theh1"> Trands- </h1><br/>
                                {cdata.filter((item) => item.id % 21 === 0).map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <div className="smalltopblog">
                                                    <div className="smalltopimg">
                                                        <img className="smalltopimg" src={item.image} alt="smalltopimg"></img>
                                                    </div>
                                                    <div className="smalltoptext">
                                                        <h2 className="smalltopname">{item.name}</h2>
                                                        <h3 className="category">{item.category} : <span className="date">{item.date}</span></h3>
                                                    </div>
                                                    <div className="smalltopp">
                                                        <p className="smalltopp">3</p>
                                                    </div>    
                                                </div><hr/>
                                            </div>
                                        )
                                    })}


                                <div className="foradvertisement">
                                    <p className="advertisementP">Advertisement</p>
                                </div>
                                
                                    
                        </div>
                </div>    
                    
            </div>
        </>    
    )
}

export default Home;
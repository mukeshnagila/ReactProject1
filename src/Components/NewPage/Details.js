import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { store } from '../../ContextStore/ContextStore';
import { NavLink } from "react-router-dom";


function Details() {

    const [AllData] = useContext(store);
    console.log(AllData);

    const id = useParams().id;
    console.log(id);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    };

    return (
        <>
        
        <div className='pagedetail'>
            <h1 className='detailH1'> This Site Is Best To Read Blog's</h1>
             
                    {AllData.filter((data) => data.id === parseInt(id)).map((item, index) => {
                        return(
                            <>
                                <div className='newpageblog'>
                                        <div className='profileArea'>
                                                <div>
                                                        <img className='DetailIMG' src='https://www.tractorbynet.com/forums/data/avatars/o/380/380682.jpg?1680699077' alt='profile'></img>
                                                </div>
                                                <div className='Detailname'>
                                                        <h5>Mukesh Nagila</h5>
                                                        <p>Jan 28, 2019 · 10 min read</p>
                                                </div>
                                                <div className='Detaillogos'>
                                                        <div><img className='logoimg' src='https://png.pngitem.com/pimgs/s/165-1657001_black-and-white-twitter-logo-png-transparent-png.png' alt='logo'></img></div>
                                                        <div><img className='logoimg' src='https://icon2.cleanpng.com/20180701/hlx/kisspng-computer-icons-clip-art-icon-instagram-5b396cec202ce2.0007229515304900921318.jpg' alt='logo'></img></div>
                                                        <div><img className='logoimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm24Z1-XlXktAfYj2xSGpq00kXFictZ0ZXbQ&usqp=CAU' alt='logo'></img></div>
                                                        <div><img className='logoimg' src='https://www.nicepng.com/png/detail/19-198727_png-file-linkedin-icon-png-black.png' alt='logo'></img></div>
                                                </div>
                                        </div>

                                        <div className='DisplayData'>
                                               <div key={index}>
                                                        <img className='displayimg' src={item.image} alt='DisplayImage'></img><br/><br/>
                                                        <h2 className='displayname'>{item.name}</h2><br/>
                                                        <p className='displaydis'>{item.description}</p>
                                                        
                                               </div> 
                                        </div><hr/><br/>

                                        <div className='Likesection'>
                                                <div className='LS1'>
                                                        <img className='likeimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SW0wt27LmB8f104rdPqCBS168D9_8FvVzv4bq_O3GGZWIm6Xzjr9j1OiZYSwl3o2oeI&usqp=CAU' alt='likeimg'></img>
                                                        <h5 className='Lh5'>2.6 k</h5>
                                                </div>

                                                <div className='LS2'>
                                                        <img className='shareimg' src='https://img.favpng.com/12/3/2/social-media-portable-network-graphics-share-icon-computer-icons-image-png-favpng-5EZ17mi8nFVhDqAE1n7p4G1LA.jpg' alt='shareimg'></img>
                                                        <p>Share This Artical</p>
                                                </div>
                                        </div><hr/>
                                </div>
                            </>
                        )
                    })}
            </div>

            
     {/*....................................... Acording to Post ..................................*/}

                <div className='Container2'>

                            <h1 className="theh1"> Explore_More.... </h1><br/>
                            <div className="Hcontainer2">
                                {AllData.filter((item) => item.category === "LatestImg").map((item, index) => {
                                    return(
                                        <>
                                            <div className="HCchildbox" key={index}>
                                            <NavLink onClick={scrollToTop} className= "linkunderline" to={`/Details/${item.id}`}>
                                                <img className="latestIMG" src={item.image} alt="HomeContentImg"></img>
                                                <h2 className="name">{item.name}</h2><br />
                                            </NavLink>    
                                                <p className="description">{item.description.slice(0, 250)}.......</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            
                </div>
                             
        </>
    )
}

export default Details;
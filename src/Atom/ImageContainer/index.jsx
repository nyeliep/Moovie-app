import React, { useState } from "react";
import './style.css'
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;


const ImageContainer = ({props})=>{
    const [isHovered, setIsHovered]= useState(false)
    return(
        <div className={`movie-image ${isHovered? "hovered":""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <div className="movie-image" style={{padding:"20px"}}>
        <img src={`${IMAGE_BASE_URL}${props.poster_path}`}alt={props.title}/>
        {/* <h1>{props.title}</h1> */}
        <div className={`overlay ${isHovered ? "slide-up" : ""}`}>
        <h1>{props.title}</h1>
       <p>{props.overview}</p>
    </div>
    </div>
    </div>

    )
}

export default ImageContainer;
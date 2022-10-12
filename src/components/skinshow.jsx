import React, { useState, useEffect } from "react";



const Skinshow = (props) => {

    const { chromas,  } = props;
    const [currentPic, setCurrentPic] = useState(null);
    
    return (
        <div className = "skinshow">
            {chromas.map((chroma, i)=>{
                //display a pic but I want it to be a slideshow so this isnt the way I want to do it
            })}
        </div>
    )
}
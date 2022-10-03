import React, {useState} from "react";


const Header = (props) => {

    return(
        <div className = "header">
           <div className = "header-title">
                VALORANT SKIN GALLERY
           </div>
           <div className = "gallery-nav">
                <div className = "gallery-nav-link">Rifles</div>
                <div className = "gallery-nav-link">SMGs</div>
                <div className = "gallery-nav-link">Heavy</div>
                <div className = "gallery-nav-link">Pistols</div>
                <div className = "gallery-nav-link">Snipers</div>
           </div>
        </div>
    )

}


export default Header;
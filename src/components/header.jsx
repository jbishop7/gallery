import React, {useState} from "react";
import Dropdown from "./dropdown";

let rifles = ["Phantom","Vandal","Bulldog","Guardian"];
let smgs = ["Stinger", "Spectre"];
let pistols = ["Classic", "Shorty", "Frenzy", "Ghost", "Sherrif"];
let snipers = ["Marshall", "Operator"];
let heavy = ["Bucky", "Judge", "Ares", "Odin"];


const Header = (props) => {

    return(
        <div className = "header">
           <div className = "header-title">
                VALORANT SKIN GALLERY
           </div>
           <div className = "gallery-nav">
                <Dropdown label = "Rifles" items = {rifles}/>
                <Dropdown label = "SMGs" items = {smgs} />
                <Dropdown label = "Heavy" items = {heavy}/>
                <Dropdown label = "Pistols" items = {pistols}/>
                <Dropdown label = "Snipers" items = {snipers}/>
           </div>
        </div>
    )

}


export default Header;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Dropdown = (props) => {

    const [expanded, setExpanded] = useState(false);
    const { items } = props;


    return (
        <div className = "dropdown-button" onClick={()=>{setExpanded(!expanded);}} >
            <div className = "gallery-nav-link" >{props.label}</div>
            {expanded && 
                <div className = "dropdown-list"  >
                    {items.map((item, i) => {
                        return (
                            <div className = "dropdownItem" key = {`${item}-${i}`}><Link to= {`${item}`}>{item}</Link></div>
                        )
                    })}
                </div>
            }
        </div>
    )
}


export default Dropdown;
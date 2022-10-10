import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

export const Operator = (props) => {
    const [skins, setSkins] = useState(null);

    const FetchSkins = () =>{
        // axios.get("https://valorant-api.com/v1/weapons/skins").then((resp)=>{
        //     console.log(resp.data);
        // })
        //fetch all UUIDs
        //Then check for "Operator"
        //take that UUID
        //Then fetch by UUID
    }

    FetchSkins();

    return (
        <div>
            Operator skins go here
        </div>
    )
}


export const Marshall = (props) => {


}
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const OP = "OPERATOR";
const MARSH = "MARSHAL"

export const Operator = (props) => {
    const [skins, setSkins] = useState(null);
    const [uuid, setUuid] = useState(null);

    const FetchSkins = (id) =>{
        axios.get(`https://valorant-api.com/v1/weapons/${id}`).then((resp)=>{
            let retSkins = resp.data.data.skins;//the skins that are returned
            let skins = []; //we will remove some skins and add them here
            retSkins.forEach((s, i)=> {
                if (s.displayName !== "Random Favorite Skin"){  //we dont want this
                    skins.push(s);
                }
            });
            console.log(skins);
        })
        
    }

    const FetchUUID = () => {
        axios.get("https://valorant-api.com/v1/weapons").then((resp)=>{
            //now I want to get the UUID that matches operator
            let data = resp.data.data;
            for (let i = 0; i < data.length; i++){
                if (data[i].displayName.toUpperCase() === OP){
                    setUuid(data[i].uuid);
                    FetchSkins(data[i].uuid);
                    break;
                }
            }
        })
    }

    useEffect(()=> {
        FetchUUID();
    }, []);

    if (skins !== null){
        return (
            <div style = {{color:"white"}}>
            {skins.map((skin, i) => {
                
            })}
            
            </div>
        )
    }

    return (
        <div style = {{color:"white"}}>
            Operator skins go here
            
        </div>
    )
}


export const Marshall = (props) => {


}
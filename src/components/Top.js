import React from "react"
import "../Styles/Top.css"

export default function Top(props){
    return(
        <a href="#" className="Top-container">
            <img className="Top-img" src={props.item.imageUrl} alt="img"/>
            
            <div className="Top-text"><h3>{props.item.title}</h3></div>
            
        </a>
        


    )
}
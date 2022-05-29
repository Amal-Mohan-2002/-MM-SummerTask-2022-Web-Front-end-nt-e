import React from "react"
import "../Styles/NewsTemp.css"; 

export default function NewsTemp(props){
    return(
        <div className="n-container">
            <img className="n-img" src={props.item.imageUrl} alt="News-img"/>
            <div className="n-text">
                <h2 className="n-title">{props.item.title}</h2>
                <p className="n-Summary">{props.item.description}</p>
                <p className="n-end">
                <img className="like" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="like"/>
                <img className="n-img-end" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="end-img"/>
                <span className="n-end-text">2hrs ago</span>
                </p>
            </div>
        </div>
    )
}
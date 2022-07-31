import React,{useState, useEffect} from "react";
import "../NewsTemp.css";



export default function NewsTemp(){
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/api/article/all")
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setData(result.articles)
        })
      },[])

    return(
        <div>
            {
                data.map(item=>{
                    return(
                        <div className="n-container">
                            {/* <img className="n-img" src='{}' alt="News-img"/> */}
                            <div className="n-text">
                                <h2 className="n-title">{item.title}</h2>
                                <p className="n-Summary">{item.description}</p>
                                <p className="n-end">
                                <a href="#"><img className="like" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="like"/></a>
                                <img className="n-img-end" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="end-img"/>
                                <span className="n-end-text">2hrs ago</span>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
        

    )
}
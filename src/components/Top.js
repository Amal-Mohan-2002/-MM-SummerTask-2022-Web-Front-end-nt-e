import React,{useState, useEffect} from "react";
import "../Styles/Top.css"

export default function Top(props){
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/api/article/trending")
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
                        <a href="#" className="Top-container">
                            {/* <img className="Top-img" src={props.item.imageUrl} alt="img"/> */}
                            
                            <div className="Top-text"><h3>{item.title}</h3></div><br/>
                            <img className="like" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="like"/>

                            
                        </a>
                    )
                })
            }
        </div>
        
        


    )
}
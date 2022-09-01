import "./Flipcard.scss"
import { useState, useEffect } from "react"
import axios from "axios"

const Flipcard = () => {

    const [movieCards, setMovieCards] = useState(null)

    useEffect(()=>{
        const videos = axios.get("http://localhost:8080/all")
        videos
            .then((response)=>{
                setMovieCards(response.data)
            })
        
    },[])

    if(!movieCards) {
        return (
            <p>Loading . . .</p>
        )
    }
    
    
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={`${movieCards[Math.floor(Math.random()* 250)].image}`} alt="Avatar" className="flip__image"></img>
                </div>
                <div className="flip-card-back">
                    <img src={`${movieCards[Math.floor(Math.random()* 250)].image}`} alt="Avatar" className="flip__image"></img>
                </div>
            </div>
        </div>

        
    )
    
}

export default Flipcard



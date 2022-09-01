import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Gamecard from "../components/gamecard/Gamecard"

const Game = () => {

    const [movie, setMovie] = useState(null)
    const [selected, setSelected] = useState(false)
    const [success, setSuccess] = useState(false)
    const [rerender, setRerender] = useState(false)
    let score = 0

    const handleWinClick = () => {
        setSuccess(false)
        setSelected(false)
        setRerender(true)
        if (rerender) {
            setRerender(false)
        }
    }

    const handleClick = (card)=>{
        const cardId = card.id
        setSelected(true) 
        const unselectedCard = movie.filter((item)=>{
            return item.id !== cardId
        })
       if (card.rating > unselectedCard[0].rating) {
        setSuccess(true)
        score++
       }
       console.log(score)
        return cardId
    }
    
    useEffect(()=>{
        const videos = axios.get("http://localhost:8080/videos")
        videos
            .then((response)=>{
                setMovie(response.data)
            })
    },[rerender])

    if(!movie) {
        return (
            <h3>Loading . . .</h3>
        )
    }

    return (
        <div className="win__container">
            <div className="card__container">
                <Gamecard handleClick={handleClick} selected={selected} card={movie[0]}/>
                <Gamecard handleClick={handleClick} selected={selected} card={movie[1]}/>
            </div>
            {success && <Link to="/game" onClick={handleWinClick}>WooHoo</Link>}
        </div>

    )
}

export default Game
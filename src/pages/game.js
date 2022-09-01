import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import axios from "axios"
import Gamecard from "../components/gamecard/Gamecard"
import "./game.scss"
import Modal from "../components/Modal/Modal"


const Game = ({ name }) => {

    const [movie, setMovie] = useState(null);
    const [selected, setSelected] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [rerender, setRerender] = useState(false);
    
    const [score, setScore] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState(0);



    const handleWinClick = () => {
        setSuccess(false)
        setSelected(false)
        setRerender(true)
        setScore(score +1)
        setGamesPlayed(gamesPlayed +1)
        if (rerender) {
            setRerender(false)
        }

    }

    const handleLoseClick = () => {
        setFailure(false)
        setSelected(false)
        setRerender(true)
        setGamesPlayed(gamesPlayed +1)
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
       } else{
        setFailure(true)
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
        <>
        <div className="show-modal">
             {(gamesPlayed === 3) && <Modal score={score} />}
        </div>
       
        <div className="win__container">
            <div className="win__score"><h2>Score: {score}</h2> </div> 
            <div className="card__container">
                {console.log(name)}
                {(gamesPlayed < 3) &&    <> <Gamecard handleClick={handleClick} selected={selected} card={movie[0]}/>
                <Gamecard handleClick={handleClick} selected={selected} card={movie[1]}/> </>}
            </div>
            {success && <button className="success" onClick={handleWinClick}>NEXT</button>}
            {failure && <button className="success" onClick={handleLoseClick}>NEXT</button>}
            
           
        </div>
        </>

)
}

export default Game;




{/* <div className="win__score"><h2>Score: {score}</h2> </div> */}
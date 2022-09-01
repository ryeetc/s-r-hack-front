import { useState } from "react"
import "./Gamecard.scss"

const Gamecard = ({card, handleClick, selected}) => {


    return (
        <div onClick={()=>{handleClick(card)}} className="card__holder">
            <div className="card" style={{backgroundImage: `url(${card.image})`}}>
                
            </div>
            <h1 className="card__title">{card.title}</h1>
            {selected && <span className="card__rating">IMDB Rating: {card.rating}</span>} 
        </div>
    )
}
export default Gamecard
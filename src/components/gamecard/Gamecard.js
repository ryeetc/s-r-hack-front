import { useState } from "react"

const Gamecard = ({card, handleClick, selected}) => {


    return (
        <div onClick={()=>{handleClick(card)}} className="card__container">
            <div className="card">
                <h1>{card.title}</h1>
                <img src={card.image}></img>
            </div>
            {selected && <span>IMDB Rating: {card.rating}</span>}
            
        </div>
    )
}
export default Gamecard
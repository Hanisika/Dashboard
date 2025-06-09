import React from 'react'
import './cards.css'
import { CardsData } from '../../Data/data'
import Card from '../card/card'
const Cards = () => {
  return (
    <div className="cards">
  
    {CardsData.map((card, id)=>{
        return(
            <div className="parentcontainer">
               <Card

               title={card.title}
               color={card.color}
               barValue={card.barValue}
               value={card.value}
               pnd={card.png}
               series={card.series}
                />
            </div>
        )

    })}
   </div>


  )
}

export default Cards

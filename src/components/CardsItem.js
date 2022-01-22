import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const CardsItem = (props) => {
   return (
      <>
         <li className='cards-item'>
            < Link to={props.path} className='cards-item__link' >
               <figure className='cards-item__pic-wrap' data-category={props.label}>
                  <img src={props.src} alt="Travel" className="cards-item__img" />
               </figure>
               <div className="cards-item__info">
                  <h5 className="cards-item__text">{props.text}</h5>
               </div>
            </Link>
         </li>
      </>
   )
}

export default CardsItem

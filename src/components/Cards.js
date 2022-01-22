import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css'

const Cards = () => {
   return (
      <div className='cards'>
         <h1>Check out these EPIC Destination!</h1>
         <div className="cards__container">
            <div className="cards__wraper">
               <ul className='cards__items'>
                  <CardsItem src='images/img-9.jpg'
                     text='Explore the hidden waterfall deep inside the Amazon Jungle'
                     label='Adventure'
                     path='/services'
                  />
                  <CardsItem src='images/img-2.jpg'
                     text='Travel througs the Island of Bali in a Private Cruise'
                     label='Luxury'
                     path='/services'
                  />
               </ul>
               <ul className='cards__items'>
                  <CardsItem src='images/img-3.jpg'
                     text='Set Sail in the Atlantic Ocean visiting'
                     label='Mystery'
                     path='/services'
                  />
                  <CardsItem src='images/img-4.jpg'
                     text='Experience Football on Top the Himilayan Mountains'
                     label='Adventure'
                     path='/products'
                  />
                  <CardsItem src='images/img-8.jpg'
                     text='Ride through the Sahsra Desert on a guided camel tour'
                     label='Adventure'
                     path='/sign-up'
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards

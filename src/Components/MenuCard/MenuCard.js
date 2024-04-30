import React from 'react';
import './MenuCard.css';

const MenuCard = ({data}) => {
  return(
   <div>
        <div className='menucard-main'>
            <img src={data.image} alt='dummy-pic' className='menucard-image'/>
            <h2>{data.name}</h2>
        
        <div className='menucard-rating'>
            <h1 className='menucard-star'>* * * * *</h1>
            <h3 className='menucrad-rate'>({data.rating})</h3>
        </div>
        <div className='menucard-price'>
            <h2>{data.price}</h2>
            <button className='menucard-button'>Buy Now</button>
        </div>
        </div>
   </div>
  )
}

export default MenuCard;
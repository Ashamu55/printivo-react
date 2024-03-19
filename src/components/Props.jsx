import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function Props({imageUrl, title, amount, quantity,}) {
  return (
    <>
    <div className='card'>
        <div className='image-wrapper'>
            <img className='card-image' src={imageUrl} alt={title} />
        </div>
            <h2 className='card-title'>{title}</h2>
            <h4 className='card-text'>STARTING AT</h4>
            <p className='amount'>
              <span className='price'>{amount} </span>
              <span className='quantity'>per {quantity}</span>
            </p>
            <button className='button'>
              <span className='button-text'>Browse {title}</span>
              <span className='button-icon'><MdKeyboardArrowRight style={{fontSize: "22px"}}/></span>
            </button>
    </div>
    </>
  )
}

export default Props
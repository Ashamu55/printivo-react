import React from 'react'
import business from "../assets/business.png"

function Props(Props) {
  return (
    <>
    <div style={{marginLeft:"330px"}}>
        <div className='first-class'>
            <img className='business' src={business} alt="" />
            <h3>{Props.text}</h3>
            <p className='start'>STARTING AT</p>
            <p><span>{Props.amount}</span><span></span></p>
            <button>Browse Two-sided Bu...</button>
        </div>
    </div>
    </>
  )
}

export default Props
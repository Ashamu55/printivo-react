import React from 'react'
import print from "../assets/print.svg"
import shop from "../assets/shop.svg"
import card from "../assets/card.png"
import { BsSearch } from "react-icons/bs";


function Navbaar() {
  return (
    <>
        <div style={{
            display:"flex",
            justifyContent:"center",
            justifyContent:"space-between", 
            alignItems:"center",
            width:"78.4%",
            margin:"auto",
            backgroundColor:"#f7f6f4",
            padding:"10px",
            position:"sticky",
            top:'0',
            bottom:"0",
            zIndex:"1000"
            }}>
            <ul style={{listStyle:"none", paddingLeft:"110px"}}>
                <li>
                    <img style={{listStyle:"none"}} src={print} alt="" />
                </li>
            </ul>
            <ul style={{display:"flex", gap:"18px", listStyle:"none", fontFamily:"serif", fontSize:"16px", paddingLeft:"280px"}}>
                <li><a style={{textDecoration:"none", color:"#394a63",}} href="">All Products</a></li>
                <li><a style={{textDecoration:"none",  color:"#394a63"}} href="">Become a Reseller</a></li>
                <li><a style={{textDecoration:"none",  color:"#394a63"}} href="">Merch Store</a></li>
                <li><a style={{textDecoration:"none",  color:"#394a63"}} href="">Marketplace</a></li>
            </ul>
            <ul style={{display:"flex", textAlign:"center", gap:"10px", listStyle:"none", alignItems:"center",fontFamily:"serif", fontSize:"17px", paddingRight:"135px"}}>
                <li><a style={{textDecoration:"none",  color:"#d98485"}} href="">sign in</a></li>
                <li><a style={{textDecoration:"none",  color:"#394a63"}} href="">Create Account</a></li>
                <li>
                    <img src={shop} alt="" />
                </li>
            </ul>
        </div>

        <div style={{
            display:"flex", 
            justifyContent:"center",
            justifyContent:"space-between",
            width:"78.4%", margin:"auto",   
            backgroundColor:"#ede8d8",
            paddingTop:"30px",
            }}>
            <ul  style={{listStyle:"none", paddingLeft:"100px", }}>
                <li>
                    <h2 style={{fontFamily:"revert", fontSize:"80px"}}>Quality Print</h2>
                    <p style={{fontSize:"30px", fontFamily:"monospace", marginLeft:"28px",  color:'gray'}}>shipped to your doorstep</p>
                </li>
                <li style={{marginTop:"35px", marginLeft:'25px', fontSize:"20px",}}>
                    <p>what would you like to print today?</p>
                    <li style={{width:"160%", backgroundColor:"white", padding:"20px", borderRadius:"2px",marginTop:"10px"}}>
                    <input style={{width:"95%", height:"40px", padding:'2px', fontSize:"20px", border:"none", outline:"none"}} type="text" placeholder='Search for Business Card, T-shirts, Mugs etc' />
                    <a style={{fontSize:"25px"}} href=""><BsSearch /></a>
                    </li>
                </li>
            </ul>
            <ul  style={{listStyle:"none",}}>
                <li>
                    <img style={{width:"400px"}} src={card} alt="" />
                </li>
            </ul>
        </div>

        <div style={{display:"flex", justifyContent:"center", justifyContent:"space-between", textAlign:"center", padding:"50px"}}>
            <h3 style={{color:"#394a63", fontFamily:"initial", fontSize:"35px", marginLeft:"272px"}}>Popular Products</h3>
            <p><a style={{color:"#e29281", textDecoration:"none", fontSize:'20px', marginRight:"272px"}} href="">See All Products</a></p>
        </div>
    </>
  )
}

export default Navbaar
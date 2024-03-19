import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function Popular({imageUrl, title, amount, quantity,}) {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", justifyContent: "space-between", textAlign: "center", padding: "50px" }}>
                <h3 style={{ color: "#394a63", fontFamily: "initial", fontSize: "35px", marginLeft: "272px" }}>Popular Categories</h3>
                <p><a style={{ color: "#e29281", textDecoration: "none", fontSize: '20px', marginRight: "272px" }} href="">See All Categories</a></p>
            </div>
        </>
    )
}

export default Popular
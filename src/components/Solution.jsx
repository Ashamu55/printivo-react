import React from 'react'
import Group from "../assets/Group.png"

function Solution() {
    return (
        <>
            <div style={{ marginLeft: "330px" }}>
                <h2 style={{ fontSize: "36px", color: "#394b62", marginBottom: "10px" }}>Nigeria&rsquo;s No. 1 online print shop 👑</h2>
                <p style={{ fontSize: "25px", color: "#516682", marginBottom: "25px" }}>Our print services and solutions are trusted by these brands and <br />over
                    15,000 other businesses in Nigeria.</p>
                <img style={{ width: "1250px", marginBottom: "100px" }} src={Group} alt="" />
            </div>
        </>
    )
}

export default Solution
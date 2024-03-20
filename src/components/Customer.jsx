import React from 'react'
import twitter from "../assets/twitter.svg"

function Customer() {
  return (
    <>
      <div style={{ padding: "40px", background: "#ecf7fd", width: "1500px", height: "300px", marginLeft:"200px" }}>
        <h3 style={{color:"#3c4a63", fontSize: "30px", marginLeft:"45px"}}>What Customers Say About Us 🙌🏾</h3>
        <div style={{ display: "flex", padding:"35px 20px 10px 50px"}}>
          <div style={{ display: "flex", position: "absolute", gap: "15px", width: "400px", backgroundColor: "#ffffff", padding: '20px', boxShadow: "-0px -0px 4px -1px" }}>
            <img style={{ position: "relative", top: '-5px', border: '1px solid grey', width: '40px', height: '35px', padding: '10px', borderRadius: "100px" }} src={twitter} alt="" />
            <div style={{ fontSize: "18px" }}>
              <p style={{ marginBottom: "15px" }}>Amina Ebele <a style={{ textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive', fontSize: "16px" }} href="">@DeliciousAmina</a></p>
              <p>I am now the unofficial <a style={{ textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive', fontSize: "16px" }} href="">@Printivo </a>ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
            </div>
          </div>

          <div style={{
            display: "flex", position: "absolute", gap: "15px", width: "400px", backgroundColor: "#ffffff", padding: '30px',
            boxShadow: "-0px -0px 4px -1px", marginLeft: "450px"
          }}>
            <img style={{
              position: "relative", top: '-5px', border: '1px solid grey', width: '40px', height: '35px', padding: '10px',
              borderRadius: "100px"
            }} src={twitter} alt="" />
            <div style={{ fontSize: "18px" }}>
              <p style={{ marginBottom: "15px" }}>Oluwatosin <a style={{
                textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive',
                fontSize: "16px"
              }} href=""> @tosingirlfx</a></p>
              <p><a style={{ textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive', fontSize: "16px" }}
                href="">@Printivo </a> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
            </div>
          </div>


          <div style={{
            display: "flex", position: "absolute", gap: "15px", width: "400px", backgroundColor: "#ffffff", padding: '23px',
            boxShadow: "-0px -0px 4px -1px",marginLeft: "900px"
          }}>
            <img style={{
              position: "relative", top: '-5px', border: '1px solid grey', width: '40px', height: '35px', padding: '10px',
              borderRadius: "100px"
            }} src={twitter} alt="" />
            <div style={{ fontSize: "18px" }}>
              <p style={{ marginBottom: "15px" }}>Oluwatosin <a style={{
                textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive',
                fontSize: "20px"
              }} href=""> @olgablark</a></p>
              <p>These guys  <a style={{ textDecoration: "none", color: '#67a0f2', fontFamily: 'cursive', fontSize: "16px" }}
                href="">@Printivo  </a> are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customer
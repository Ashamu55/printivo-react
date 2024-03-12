import Nigeria from "../assets/Nigeria.png"
import whatsapp from "../assets/whatsapp.webp"

function Navbar() {
  return (
    <>
        <div style={{
            display:"flex", 
            justifyContent:"center", 
            justifyContent:"space-between", 
            width:"78.4%", 
            backgroundColor:"#f7f7f5",
            margin:"auto",
            padding:"10px",
            alignItems:"center",
            }}>
            <ul style={{display:"flex", gap:"20px", paddingLeft:"108px", listStyle:"none", }}>
                <li><a style={{textDecoration:"none", color:"#384a62"}} href="">Cost Calculator</a></li>
                <li><a style={{textDecoration:"none", color:"#384a62"}} href="">Discover Stores</a></li>
                <li><a style={{textDecoration:"none", color:"#384a62"}} href="">Track Orders</a></li>
            </ul>
            <ul style={{display:"flex", listStyle:"none",gap:"100px", paddingRight:"150px"}}>
                <li style={{display:"flex", alignItems:"center", }}>
                    <p>Need help? Call:</p>
                    <a style={{textDecoration:"none", color:"#1db1f3"}} href="">+2342013306047</a>
                </li>
                <li>
                    <img style={{width:"40px", borderRadius:"40px"}} src={whatsapp} alt="" />
                </li>
                <li style={{display:"flex", alignItems:"center", border:"1px solid gray",fontSize:"13px", justifyContent:"center", padding:"4px", borderRadius:"20px" }}>
                    <img style={{width:"25px", marginRight:"10px"}} src={Nigeria} alt="" />
                    <p>Nigeria</p>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/final-dxnguide-logo.png"
import "../styles/layoutStyle.css"
import { useState } from "react";
//<Link to="/">Home</Link>


const Layout = () => {
  const [val, setVal]  = useState()

  return (
    <>
      <div style = {{minWidth: 800, marginTop: 18}}>
        <div style = {{direction: "rtl", height: 60, padding: 8, paddingRight: 34}}>
            <img src={logo} style = {{width: 166}}></img>
        </div>

        <div style = {{height: 60, marginTop: -60}}>
            <Link to = {"/where-to-buy"}>
            <div className= "tab" style = {{paddingLeft: 34, color: "#4B6F44"}}>شراء المنتجات</div>
            </Link>
            <Link to = {"/"}>
            <div className= "tab">الرئيسية</div>
            </Link>
        </div>

        <div style = {{height: 60, padding: 12, marginTop: -60}}>
            <div  id = "search-container" >
                <input id = "search-input" placeholder="بحث..." onChange={(event) => setVal(event.target.value)} value = {val}></input>
                <Link to={`/search/${val}`}>
                    <span id = "search-icon"  class="glyphicon glyphicon-search"></span>
                </Link>
            </div>
        </div>


      </div>

      <Outlet />
    </>
  )
};

export default Layout;
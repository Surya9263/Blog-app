import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

  const [isUser,setIsUser]=useState(true);

  return (
    <div className="nav">
        <div className="navLeft">
          <i className="navLeftIcon fa-brands fa-square-facebook"></i>
          <i className="navLeftIcon fa-brands fa-square-twitter"></i>
          <i className="navLeftIcon fa-brands fa-square-pinterest"></i>
          <i className="navLeftIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="navCenter">
          <ul className="navList">
            <li className="navListItem"><Link className="link" to="/">Home</Link></li>
            <li className="navListItem"><Link className="link" to="/">About</Link></li>
            <li className="navListItem"><Link className="link" to="/">Contact</Link></li>
            <li className="navListItem"><Link className="link" to="/write">Write</Link></li>
            <li className="navListItem"><Link className="link" to="/login">Logout</Link></li>
          </ul>
        </div>
        <div className="navRight">
          {isUser?(
            <img className="navImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          ):<ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/resister">Resister</Link>
              </li>
            </ul>}
          <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
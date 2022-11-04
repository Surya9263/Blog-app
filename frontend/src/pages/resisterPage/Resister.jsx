import { Link } from "react-router-dom"
import "./Resister.css"

const Resister = () => {
    return (
        <div className="resister">
          <span className="resisterTitle">Resister</span>
            <form className="resisterForm">
                <label>Username</label>
                <input className="resisterInput" type="text" placeholder="Enter your username..."/>
                <label>Email</label>
                <input className="resisterInput" type="email" placeholder="Enter your email..."/>
                <label>Password</label>
                <input className="resisterInput" type="password" placeholder="Enter your password..."/>
                <button className="resisterButton">Resister</button>
            </form>
                <button className="resisterLoginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
      )
}

export default Resister
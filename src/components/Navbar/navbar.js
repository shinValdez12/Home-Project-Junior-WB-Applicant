import logo from "../../assets/logo.png"
import "./navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Marci Metzger Logo" className="logo-img"/>
            </div>
            <div className="menu">
                ☰
            </div>
        </nav>
    );
}

export default Navbar;
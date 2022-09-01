import { NavLink, Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <Link className="header__link"to="/"><h1 className="header__title">BestFlix</h1></Link>
            <nav className="header__nav">
                <NavLink className="nav__link" to="/">Home</NavLink>
                <NavLink className="nav__link" to="/register">Play</NavLink>
            </nav>
        </header>
    )
}

export default Header
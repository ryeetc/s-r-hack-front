import { NavLink } from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">BestFlix</h1>
            <nav className="header__nav">
                <NavLink className="nav__link" to="/">Home</NavLink>
                <NavLink className="nav__link" to="/game">Play</NavLink>
            </nav>
        </header>
    )
}

export default Header
import { Link } from "react-router-dom";
import "./home.scss"

const Home = () => {

    return (
        <main className="main">
            <h1 className="main__title">Welcome To BestFlix</h1>
            <p className="main__desc">Guess the movie with the higher review score</p>
            <Link to="/game" className="main__link">Click Here To Play</Link>
        </main>
    )
}
export default Home;
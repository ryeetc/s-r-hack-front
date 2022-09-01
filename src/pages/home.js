import { Link } from "react-router-dom";
import Flipcard from "../components/flipcard/Flipcard";
import "./home.scss"

const Home = () => {

    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__title">Welcome To BestFlix</h1>
                <p className="main__desc">Guess the movie with the higher review score</p>
                <Link to="/game" className="main__link">Click Here To Play</Link>
            </div>
            <div className="flip__container">
                <div className="flip__holder">
                    <Flipcard />
                    <Flipcard />
                </div>
                <div className="flip__holder">
                    <Flipcard />
                    <Flipcard />
                </div>
                <div className="flip__holder">
                    <Flipcard />
                    <Flipcard />
                </div>
            </div>
        </main>
    )
}
export default Home;
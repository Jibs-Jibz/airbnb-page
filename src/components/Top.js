// import airImg from "../img/airbnb-img.svg"
import airImg1 from "../img/airbnb-img.png"

export default function Top() {
    return (
        <div className="top">
            <img src={airImg1} className = "img" />
            <div className="top-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a kind hosts-all without home.</p>
            </div>
        </div>
    )
}
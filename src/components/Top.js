// import airImg from "../img/airbnb-img.svg"
import airImg1 from "../img/airbnb-img.png"
// import groot from "../../public/img/groot.jpg"

export default function Top() {
    return (
        <div className="top">
            <img src={airImg1} className = "img" alt='topPhoto' />
            <div className="top-text">
                <h1 className="top-header">Online Experiences</h1>
                <p className="top-text-1">Join unique interactive activities led by one-of-a kind hosts-all without home.</p>
            </div>
        </div>
    )
}
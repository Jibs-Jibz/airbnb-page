// import mainImg1 from "../img/main-img-1.png"
// import star from "../img/star.svg"

export default function Main(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "AVAILABLE"
    }


    return (
        <div className="main1">
            {badgeText && <div className="flag">{badgeText}</div>}
            <img src={props.item.coverImg} alt="" className="main-img1" />
            <div className="main-img-text1">
                <div className="img-review">
                    <p> <img src={props.item.starImg} className="star-img" alt="star" />
                        {props.item.stats.rating} <span>({props.item.stats.reviewCount}) &#8226;
                            {props.item.country}</span>
                    </p>
                </div>
                <p>{props.item.title}</p>
                <p> <strong>From ${props.item.price}</strong> / person</p>
            </div>
        </div>

    )
}


// {require(`../../public/img/${props.img}`)}

// <div className="main">
// <div className="main1">
//     <img src={props.img} className="main-img1" />
//     <div className="main-img-text1">
//         <div className="img-review">
//             <p> <img src={star} className="star-img" /> 5.0 <span>(6) &#8226; USA</span></p>
//         </div>
//         <p>Life lessons with Katie Zaferes</p>
//         <p><strong>From $136</strong> / person</p>
//     </div>
//     <div className="flag">SOLD OUT</div>
// </div>
// </div>
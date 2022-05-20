export default function Main(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "AVAILABLE"
    }


    return (
        <div className="main1">
            {badgeText && <div className="flag">{badgeText}</div>}
            <img src={require(`../../public/img/${props.coverImg}`)} alt="img" className="main-img1" />
            <div className="main-img-tex t1">
                <div className="img-review">
                    <p> 
                        <img src={require(`../../public/img/${props.starImg}`)} className="star-img" alt="star" />
                        {props.stats.rating}
                        <span>({props.stats.reviewCount}) &#8226;
                            {props.country}
                        </span>
                    </p>
                </div>
                <p>{props.title}</p>
                <p> <strong>From ${props.price}</strong> / person</p>
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
import Nav from "./components/Nav"
import Top from "./components/Top"
import Main from "./components/Main"
import data from "./components/data"
// import star from "./img/star.svg"
// import image1 from "./img/main-img-1.png";


export default function App() {
    const cards = data.map(item => {
        return (
            <Main
                key={item.id}
                item={item}
            // img={item.coverImg}
            // img1={star}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // country={item.country}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            />

        )
    })


    return (
        <div>
            <Nav />
            {/* <img src={require("./img/main-img-1.png")} alt="" /> */}
            <Top />
            <section className="cards">
                {cards}
            </section>
        </div>

    )
}

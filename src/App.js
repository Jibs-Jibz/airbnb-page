import Nav from "./components/Nav"
import Top from "./components/Top"
import Main from "./components/Main"
import {data} from "./data"
// import star from "./img/star.svg"
// import image1 from "./img/main-img-1.png";


export default function App() {
    const cards = data.map(item => (
        <Main
            key={item.id}
            {...item}
        />
    ));


    return (
        <div>
            <Nav />
            {/* <img src={require("./img/main-img-1.png")} alt="" /> */}
            <Top />
            <section className="cards">
                {cards}
                {cards}
            </section>
        </div>

    )
}

import airbnb from "./airbnb-svg.svg"

export default function App() {
    return (
        <nav className="nav">
            <div className="nav-item">
                <img src={airbnb} className="nav-logo" />
            </div>
        </nav>
    )
}
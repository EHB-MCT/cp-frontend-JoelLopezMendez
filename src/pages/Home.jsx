import SprookjeCard from "../components/SprookjeCard";
import "../components/home/home.css"

function HomePage() {
    return (
        <>
            <h1 className="center homeTitle">In the Spotlight</h1>
            <div className="sprookjes center">
                <SprookjeCard />
                <SprookjeCard />
                <SprookjeCard />
                <SprookjeCard />
            </div>
            <button className="allProjectsBtn btn">All projects</button>
            {/**Hacer un button global y con props para cambiar el texto */}
        </>
    )
}

export default HomePage;

/**    TODO:
    1)Introductory text
    2)Three one-page scrolling websites (random)*/
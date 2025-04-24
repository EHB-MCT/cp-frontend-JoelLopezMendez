import MakingOfVideo from "../components/MakingOfVideo";
import "../share/making.css"

function Making() {
    return (
        <>
            <h1 id="cover">Makinf of - Raponsje</h1>
            <div id="imageCover"> </div>

            <div id="contentWrapper">
                <MakingOfVideo />

                <div className="description column">
                    <h1>Description</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident fugit nesciunt perferendis, corporis officiis 
                        magni distinctio dolorem, qui ad modi voluptate et 
                        quisquam dolores aut magnam consectetur harum excepturi 
                        reprehenderit?
                    </p> 
                    <button className="btn">Visit website</button>
                </div>
            </div>
        </>
    )
}

export default Making;

{/** TODO:
    1)A page where you explain the techniques you used in the creation of your project */}
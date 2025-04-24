
import sprookje from "../assets/image/sprookjeCover.png"
function SpookjeCard() {
    return (
        <>
        <div id="spookjeCard">
            <img src={sprookje} />

            <div className="sprookjeInfo">
            <div>
                <h1>HANS EN GRIETJE</h1>
                <h4>Arno Baeck</h4>
            </div>
            <button className="info btn">&#x2139;</button>
            </div>

        </div>
        </>
    )
}

export default SpookjeCard;
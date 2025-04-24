import MakingOfDes from "../components/Making/MakingOfDes";
import MakingOfVideo from "../components/Making/MakingOfVideo";
import "../components/Making/making.css"

function Making() {
    return (
        <>
            <h1 id="cover">Makinf of - Raponsje</h1>
            <div id="imageCover"> </div>

            <div id="contentWrapper">
                <MakingOfVideo />
                <MakingOfDes />
            </div>
        </>
    )
}

export default Making;
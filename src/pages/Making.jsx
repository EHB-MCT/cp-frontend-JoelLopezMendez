import MakingOfDes from "../components/making/MakingOfDes";
import MakingOfVideo from "../components/making/MakingOfVideo";
import "../components/making/making.css"

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
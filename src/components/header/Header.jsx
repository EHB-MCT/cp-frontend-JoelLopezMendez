import "../header/header.css"

function Header() {
    return (
        <>
        <div className="header">
            <div className="nav center">
                <img src="../../public/logo-red.svg" alt="" />
            </div>
            <div className="nav title">
                <h3>Home</h3>
                <h3>Projects</h3>
                <h3>Making-of</h3>
            </div>

            <div className="searchBar">
                <input
                    type="text" 
                    placeholder="Search for a topic" />
                <div className="searchBtn"><button className="btn">Search</button>
                </div>
            </div>
            <hr className="center lineDivider" />
        </div>

        </>
    )
}

export default Header;
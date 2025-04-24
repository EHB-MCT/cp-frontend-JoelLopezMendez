import "../footer/footer.css"

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="column3">
                <img src="../../public/logo-grey.svg" alt="" />
            </div>
            
            <div className="column3">
                <h1>ABAOUT US</h1>
                <p>Welcome to a world where fairy tales scroll with 
                    depth. Through parallax magic, we bring front-end 
                    stories to life — one layer at a time. ✨
                </p>
            </div>

            <div className="column3">
                <div className="menu">
                    <h2>Menu</h2>
                    <a href="">HOME</a>
                    <a href="">PROJECTS</a>
                    <a href="">MAKING-OF</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;
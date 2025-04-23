import { Outlet, Link } from "react-router";

function Layout() {
    return (
        <>
            <nav className="header">
                <ul>
                    <li>
                        <Link to="/">Home</Link> {/**Link se asegura de conectar las paginas con sus link */}
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Making-of">Making-of</Link>
                    </li>
                    <li>
                        <Link to="/Parallax" target="_blank" rel="noopener noreferrer">About/Parallax</Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> {/**sin esto no se renderizan las paginas */}
        </>
    )
}

export default Layout;
import Layout from "../nav/Layout";
import Layout2 from "../nav/Layout2";
import HomePage from "../pages/Home";
import Projects from "../pages/Project";
import Making from "../pages/Making";
import Parallax from "../pages/Parallax";
import { BrowserRouter, Routes, Route } from "react-router";

function Header() {
    return (
        <>
            <div className="nav">

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="Projects" element={<Projects />} />
                            <Route path="Making-of" element={<Making />} />
                        </Route>
                        <Route path="Parallax" element={<Layout2 />}>
                            <Route index element={<Parallax />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Header;
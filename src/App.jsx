import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Layout from "./nav/Layout";
import Layout2 from "./nav/Layout2";

import HomePage from "./pages/Home";
import Projects from "./pages/Project";
import Making from "./pages/Making";
import Parallax from "./pages/Parallax";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
     {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Making-of" element={<Making />} />
          </Route>
          <Route path="*" element={<Error />} /> */}{/*als de user naar een pagina zoekt dat niet bestaat*/}
            {/*<Route path="Parallax" element={<Layout2 />}>
              <Route index element={<Parallax />} />
          </Route>
        </Routes>
      </BrowserRouter>*/}
      
      <Header />
      <HomePage />
      <Making />
      <Footer />
    </>
  );
}

export default App
import HomePage from "./pages/Home";
import Projects from "./pages/Project";
import Making from "./pages/Making";
import Layout from "./nav/Layout";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Making-of" element={<Making />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

{/** TODO:
    1)Navigation: home, projects, making-of  */}
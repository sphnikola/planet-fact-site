import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mercury from "./pages/Mercury";
//import NavBar from "./components/Navbar";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="venus" element={<Venus />} />
          <Route path="earth" element={<Earth />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="saturn" element={<Saturn />} />
          <Route path="uranus" element={<Uranus />} />
          <Route path="neptune" element={<Neptune />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

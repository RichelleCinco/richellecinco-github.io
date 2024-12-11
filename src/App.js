import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Photography from "./pages/Photography";
import Resume from "./pages/Resume";
import Typography from "./pages/Typography";
import Ux from "./pages/Ux";
import Art from "./pages/Art";
import Works from "./pages/Works";
import About from "./pages/About";
import WebDev from "./pages/WebDev";
import Packaging from "./pages/Packaging";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="photography" element={<Photography />} />
          <Route path="resume" element={<Resume />} />
          <Route path="typography" element={<Typography />} />
          <Route path="ux" element={<Ux />} />
          <Route path="art" element={<Art />} />
          <Route path="works" element={<Works />} />
          <Route path="about" element={<About />} />
          <Route path="webdev" element={<WebDev />} />
          <Route path="packaging" element={<Packaging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
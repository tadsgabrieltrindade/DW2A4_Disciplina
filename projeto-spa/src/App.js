import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/about" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

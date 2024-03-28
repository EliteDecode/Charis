import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import RinteriorDesign from "./Pages/RInteriorDesign";
import Consultation from "./Pages/Consultation";
import Projects from "./Pages/Projects";
import SingleProject from "./Pages/SingleProject";
import StartProject from "./Pages/StartProject";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="interior" element={<RinteriorDesign />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
          <Route path="start-projects" element={<StartProject />} />

          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

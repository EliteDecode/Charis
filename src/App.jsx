import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./helpers/AppLayout";
import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Success from "./Pages/Success";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Services from "./Pages/Services";
import RinteriorDesign from "./Pages/RInteriorDesign";
import Consultation from "./Pages/Consultation";
import Projects from "./Pages/Projects";
import SingleProject from "./Pages/SingleProject";
import StartProject from "./Pages/StartProject";
import Team from "./Pages/Team";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Billing from "./Pages/Billing";
import PaymentMethods from "./Pages/PaymentMethods";
import AccountDeatils from "./Pages/AccountDeatils";
import Notifications from "./Pages/Notifications";
import Orders from "./Pages/Orders";
import Payment from "./Pages/Payment";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="success" element={<Success />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="interior" element={<RinteriorDesign />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
          <Route path="start-projects" element={<StartProject />} />
          <Route path="team" element={<Team />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="billing" element={<Billing />} />
          <Route path="payments" element={<PaymentMethods />} />
          <Route path="shop/:productId" element={<SingleProduct />} />
          <Route path="contact" element={<Contact />} />
          {/* Define another outlet for the account page */}
          <Route element={<Account />}>
            <Route path="account" element={<AccountDeatils />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="orders/*" element={<Orders />} />
            <Route path="payment" element={<Payment />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

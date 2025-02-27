import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePages from "./pages/homePages/HomePages";
import AboutUsPage from "./pages/aboutPages/AboutUsPage"; // ✅ Ensure correct import
import ContactUs from "./pages/contactUsPages/ContactUs";
import Footer from "./components/Footer/Footer";
import KathaSection from "./components/kathaSection/Katha";
import KathaDetails from "./components/kathaSection/kathaDetails/KathaDetails";
import LoginSignupForm from "./components/LoginSignupForm/LoginSignupForm";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/katha" element={<KathaSection />} />
        <Route path="/katha-details/:id" element={<KathaDetails />} />
        <Route path="/ling" element={<LoginSignupForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

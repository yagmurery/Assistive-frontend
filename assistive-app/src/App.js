import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FestivalLandingPage from "./pages/FestivalLandingpage";
import PurchasePage from "./pages/PurchasingPage";
import "carbon-components/css/carbon-components.min.css"; // Carbon CSS
import "./App.css"; // Your custom styles
import ContactPage from "./pages/ContactPage";
import TransportPage from "./pages/TransportPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FestivalLandingPage />} />{" "}
          {/* Default route */}
          <Route path="/home" element={<FestivalLandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ticket" element={<PurchasePage />} />
          <Route path="/transport" element={<TransportPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

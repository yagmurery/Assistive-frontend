import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FestivalLandingPage from "./pages/FestivalLandingpage";
import "carbon-components/css/carbon-components.min.css"; // Carbon CSS
import "./App.css"; // Your custom styles
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<FestivalLandingPage />} />
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

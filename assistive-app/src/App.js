import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import FestivalLandingPage from "./pages/FestivalLandingpage";
import PurchasePage from "./pages/PurchasingPage";
import "carbon-components/css/carbon-components.min.css"; // Carbon CSS
import "./App.css"; // Your custom styles
import ContactPage from "./pages/ContactPage";
import FestivalInfo from "./pages/FestivalInfo";
import festivals from './festivalData.json';

const FestivalPage = () => {
  const { id } = useParams();
  const festival = festivals.find(festival => festival.id === id);

  if (!festival) {
    return <h2>Festival not found</h2>;
  }

  return <FestivalInfo festival={festival} />;
};

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
          <Route path="/:id" element={<FestivalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

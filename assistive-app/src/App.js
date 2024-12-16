import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FestivalLandingPage from "./pages/FestivalLandingpage";
import "carbon-components/css/carbon-components.min.css"; // Carbon CSS
import "./App.css"; // Your custom styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FestivalLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

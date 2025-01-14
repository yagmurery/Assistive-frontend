import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import FestivalLandingPage from "./pages/FestivalLandingpage";
import PurchasePage from "./pages/PurchasingPage";
import "carbon-components/css/carbon-components.min.css";
import "./App.css"; // Your custom styles
import ContactPage from "./pages/ContactPage";
import FestivalInfo from "./components/FestivalInfo";
import festivals from './festivalData.json';
import TransportPage from "./pages/TransportPage";
import TransportResultsPage from "./pages/TransportResultsPage";
import NavigationBar from './components/NavigationBar'
import AboutUs from "./pages/AboutUs";


const FestivalPage = () => {
  const { id } = useParams();
  const festival = festivals.find(festival => festival.id === id);

  if (!festival) {
    return <h2> !!!Element not found!!!</h2>;
  }

  return <FestivalInfo festival={festival} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<FestivalLandingPage />} />{" "}
          <Route path="/home" element={<FestivalLandingPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/purchasetickets" element={<PurchasePage />} />
          <Route path="/:id" element={<FestivalPage />} />
          <Route path="/traveloptions" element={<TransportPage/>} />
          <Route path="/traveloptionsresults" element ={<TransportResultsPage/>}/>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

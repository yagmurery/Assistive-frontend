import React from "react";
import { Button } from "carbon-components-react";
import "../css/FestivalInfo.css";
// import festivalData from '../festivalData.json';
import PropTypes from 'prop-types';



const FestivalInfo = ({ festival }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav aria-label="Main navigation" className="navigation-bar">
        <ul className="navigation-list">
          <li>
            <Button kind="secondary" as="a" href="/home" aria-label="Home page">
              Home
            </Button>
          </li>
          <li>
            <Button
              kind="secondary"
              as="a"
              href="/about"
              aria-label="About page"
            >
              About
            </Button>
          </li>
          <li>
            <Button
              kind="secondary"
              as="a"
              href="/contact"
              aria-label="Contact page"
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header id="content">
        <h1>{festival.title}</h1>
        <h2>{festival.subtitle}</h2>
        <h3>{festival.dates} - {festival.place}</h3>
      </header>
      <img src={require ("../assets/" + festival.image)} alt={`${festival.title}`} />

      <main id="content">
        <section>
          <h2>Lineup, Side Events, and Accessibility Info</h2>
          <ul>
            {festival.lineup.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {festival.sideEvents.map((event, index) => (
              <li key={`sideEvent-${index}`}>{event}</li>
            ))}
            {festival.accessibilityInfo.map((info, index) => (
              <li key={`accessibilityInfo-${index}`}>{info}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Tickets Options</h2>
            <table>
              <caption>Ticket Prices</caption>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {festival.tickets.map((ticket, index) => (
                  <tr key={`${ticket.type}-${index}`}>
                    <td>{ticket.type}</td>
                    <td>{ticket.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          <a href={festival.purchaseLink} aria-label="Purchase Tickets">Purchase Tickets</a>
        </section>
        
        <section>
          <h2>Transportation Info</h2>
          <p>{festival.transportationInfo}</p>
          <a href={festival.transportationLink} aria-label="Get Transportation Info">Get Transportation Info</a>
        </section>      
      </main>

    </div>
  );
};

FestivalInfo.propTypes = {
  festival: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    image: PropTypes.string,
    lineup: PropTypes.arrayOf(PropTypes.string).isRequired,
    sideEvents: PropTypes.arrayOf(PropTypes.string).isRequired,
    accessibilityInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
    tickets: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })).isRequired,
    purchaseLink: PropTypes.string.isRequired,
    transportationInfo: PropTypes.string.isRequired,
    transportationLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default FestivalInfo;
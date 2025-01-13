import React from "react";
import { 
  Button,
  ListItem,
  OrderedList,
  UnorderedList,
 } from "carbon-components-react";
import "../css/FestivalInfo.css";
import PropTypes from 'prop-types';



const FestivalInfo = ({ festival }) => {
  return (
    <div>
      <header id="content">
        <h1>{festival.title}</h1>
        <h2>{festival.subtitle}</h2>
        <h3>{festival.dates} - {festival.place}</h3>
      </header>
      <img src={require ("../assets/" + festival.image)} alt={`${festival.title}`} />

      <main id="content">
        <section aria-labelledby="event-information">
          <h2 id="event-information">Event information</h2>
          <h3>Lineup</h3>
          <OrderedList>
            {festival.lineup.map((item, index) => (
              <ListItem key={`lineup-${index}`}>{item}</ListItem>
            ))}
          </OrderedList>
          ... and many more to come!
          <h3>Side Events</h3>
          <OrderedList>
            {festival.sideEvents.map((event, index) => (
              <ListItem key={`sideEvent-${index}`}>{event}</ListItem>
            ))}
          </OrderedList>
          <h3>Accessibility Info</h3>
          <OrderedList>
            {festival.accessibilityInfo.map((info, index) => (
              <ListItem key={`accessibilityInfo-${index}`}>{info}</ListItem>
            ))}
          </OrderedList>
        </section>

        <section aria-labelledby="tickets-heading">
          <h2 id="tickets-heading">Tickets Options</h2>
          <UnorderedList>
          
          </UnorderedList>{festival.tickets.map((ticket, index) => (
            <ListItem key={`ticket-${index}`}>{ticket}</ListItem> ))}
          <a href={festival.purchaseLink} aria-label="Purchase Tickets">Purchase Tickets</a>
        </section>
        
        <section aria-labelledby="transportation-heading">
          <h2 id="transportation-heading">Transportation Info</h2>
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
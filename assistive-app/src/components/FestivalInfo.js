import React from "react";
import { 
  ListItem,
  OrderedList,
  UnorderedList,
  Link,
 } from "carbon-components-react";
import "../css/FestivalInfo.css";
import PropTypes from 'prop-types';




const FestivalInfo = ({ festival }) => {
  return (
    <div>
      <main id="content">
      <header id="content">
        <h1>{festival.title}</h1>
        <h2>{festival.subtitle}</h2>
        <h3>{festival.dates} - {festival.place}</h3>
        <img id="img" src={require ("../assets/" + festival.image)} alt={`${festival.title}`} />
      </header>
        <section aria-labelledby="event-information">
          <h2 id="event-information">Event information</h2>
          <h3>Lineup</h3>
          <UnorderedList>
            {festival.lineup.map((item, index) => (
              <ListItem className="festival-info-li" key={`lineup-${index}`}>&#x2022; {item}</ListItem>
            ))}
          </UnorderedList>
          ... and many more to be announced!
          <h3>Side Events</h3>
          <OrderedList>
            {festival.sideEvents.map((event, index) => (
              <ListItem className="festival-info-li" key={`sideEvent-${index}`}>{event}</ListItem>
            ))}
          </OrderedList>
          <h3>Accessibility Info</h3>
          <OrderedList>
            {festival.accessibilityInfo.map((info, index) => (
              <ListItem className="festival-info-li" key={`accessibilityInfo-${index}`}>{info}</ListItem>
            ))}
          </OrderedList>
        </section>

        <section aria-labelledby="tickets-heading">
          <h2 id="tickets-heading">Tickets Options</h2>
          <UnorderedList>
          {festival.tickets.map((ticket, index) => (
            <ListItem className="festival-info-li" key={`ticket-${index}`}>&#x2022; {ticket}</ListItem> ))}
          </UnorderedList>
          <Link 
          href={festival.purchaseLink} 
          aria-label="Purchase Tickets"
          class="link"
          >
            Purchase Tickets
          </Link>
        </section>
        
        <section aria-labelledby="transportation-heading">
          <h2 id="transportation-heading">Transportation Info</h2>
          <div>
            {festival.transportationInfo}
          </div>
          <Link 
          href={festival.transportationLink}
          aria-label="Get Transportation Info"
          className="link"
          >
            Get Transportation Info
          </Link>
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
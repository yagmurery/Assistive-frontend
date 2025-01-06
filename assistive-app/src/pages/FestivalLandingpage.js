import React from "react";
import {
  Accordion,
  AccordionItem,
  Tile,
  Button,
  Grid,
  Column,
} from "carbon-components-react";
import { Link } from "react-router-dom";
import "../css/FestivalLandingPage.css";

const festivals = [
  {
    id: 1,
    name: "Sziget",
    description: "A grand celebration of music from various genres.",
    image: require("../assets/festival1.jpg"), // Use `require` for dynamic imports
    link: "/festivals/sziget",
  },
  {
    id: 2,
    name: "Tomorrowland",
    description: "An exhibition showcasing music and diverse art forms.",
    image: require("../assets/festival2.jpg"), // Use `require` for dynamic imports
    link: "/festivals/tomorrowland",
  },
  {
    id: 3,
    name: "Mysteryland",
    description: "A mystic experience.",
    image: require("../assets/festival3.jpg"), // Use `require` for dynamic imports
    link: "/festivals/mysteryland",
  },
];

const FestivalLandingPage = () => {
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
              margin="100px"
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

      {/* Page Content */}
      <main className="main-content">
        <h1 style={{ margin: "20px" }}>Music Festivals 2025</h1>
        <div aria-label="Festival list">
          <Grid>
            {festivals.map((festival) => (
              <Column key={festival.id} sm={4} md={8} lg={12}>
                <Tile className="festival-tile">
                  <Grid>
                    {/* Festival Image */}
                    <Column sm={4} md={6} lg={6}>
                      <img
                        src={festival.image}
                        alt={`Image of ${festival.name}`}
                        className="festival-image"
                      />
                    </Column>

                    {/* Festival Details */}
                    <Column sm={4} md={6} lg={6}>
                      <h2 className="festival-name">{festival.name}</h2>
                      <p className="festival-description">
                        {festival.description}
                      </p>
                    </Column>
                  </Grid>

                  {/* Action Button */}
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      kind="primary"
                      as={Link}
                      to={festival.link}
                      aria-label={`More about ${festival.name}`}
                      className="learn-more-btn"
                    >
                      Learn More
                    </Button>
                  </div>
                </Tile>
              </Column>
            ))}
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default FestivalLandingPage;

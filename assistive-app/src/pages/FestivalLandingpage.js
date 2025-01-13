import React from "react";
import {
  Tile,
  Button,
  Grid,
  Column,
  Row,
} from "carbon-components-react";
import { Link } from "react-router-dom";
import "../css/FestivalLandingPage.css";

const festivals = [
  {
    id: 1,
    name: "Sziget",
    description: "A grand celebration of music from various genres.",
    image: require("../assets/festival1.jpg"), // Use `require` for dynamic imports
    link: "/sziget",
  },
  {
    id: 2,
    name: "Tomorrowland",
    description: "An exhibition showcasing music and diverse art forms.",
    image: require("../assets/festival2.jpg"), // Use `require` for dynamic imports
    link: "/tomorrowland",
  },
  {
    id: 3,
    name: "Mysteryland",
    description: "A mystic experience.",
    image: require("../assets/festival3.jpg"), // Use `require` for dynamic imports
    link: "/mysteryland",
  },
];

const FestivalLandingPage = () => {
  return (
    <div>
      <main className="main-content">
        <h1 style={{ margin: "20px" }}>Music Festivals 2025</h1>
        <div aria-label="Festival list">
          <Grid>
            {festivals.map((festival) => (
              <Column key={festival.id} sm={2} md={4} lg={6}>
                <div className="flex-container">
                  <Tile className="festival-tile">
                    <Grid>
                      {/* Festival Image */}
                      <Row>
                        <Column sm={4} md={6} lg={6}>
                          <img
                            src={festival.image}
                            alt={`${festival.name}`}
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
                      </Row>
                    </Grid>

                    {/* Action Button */}
                    <div style={{ marginTop: "20px" }}>
                      <Link
                        kind="primary"
                        as={Link}
                        to={festival.link}
                        aria-label={`More about ${festival.name}`}
                        className="link"
                      >
                        Learn More
                      </Link>
                    </div>
                  </Tile>
                </div>
              </Column>
            ))}
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default FestivalLandingPage;

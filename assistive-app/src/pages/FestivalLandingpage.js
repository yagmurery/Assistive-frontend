import React from "react";
import { Tile, Button, Grid, Column, Row } from "carbon-components-react";
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
    <main>
      <h1>Music Festivals 2025</h1>
      <div aria-label="Festival list" className="festival-list">
        <Grid>
          {festivals.map((festival) => (
            <Column key={festival.id}>
              <div className="flex-container">
                <Tile className="festival-tile">
                  <Grid>
                    <Row>
                      <Column>
                        <img
                          src={festival.image}
                          alt={`${festival.name}`}
                          className="festival-image"
                        />
                      </Column>

                      <Column>
                        <h2 className="festival-name">{festival.name}</h2>
                        <div className="festival-description">
                          {festival.description}
                        </div>
                      </Column>
                    </Row>
                  </Grid>

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
  );
};

export default FestivalLandingPage;

import React from "react";
import { Tile, Grid, Column, Row } from "carbon-components-react";
import { Link } from "react-router-dom";
import "../css/FestivalLandingPage.css";

const festivals = [
  {
    id: 1,
    name: "Sziget",
    description: "A grand celebration of music from various genres.",
    image: require("../assets/festival1.jpg"),
    alt: "A lively, big audience in front of the stage at the Sziget festival, surrounded by a colorful sunset.",
    link: "/sziget",
  },
  {
    id: 2,
    name: "Tomorrowland",
    description: "An exhibition showcasing music and diverse art forms.",
    image: require("../assets/festival2.jpg"),
    alt: "A large crowd of people dancing in front of a stage at the Tomorrowland festival, enjoying fireworks bursting over a castle.",
    link: "/tomorrowland",
  },
  {
    id: 3,
    name: "Mysteryland",
    description: "A mystic experience.",
    image: require("../assets/festival3.jpg"),
    alt: "A detail of the hands of a crowd assissting to the main stage's concert at the Mysteryland festival.",
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
                          alt={festival.alt}
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
                      to={festival.link}
                      aria-label={`More about ${festival.name}`}
                      className="link"
                    >
                      Learn More About the Festival
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

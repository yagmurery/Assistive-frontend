import React from "react";
import { Accordion, AccordionItem, Button, Grid, Column } from "carbon-components-react";
import { Link } from "react-router-dom";
import "../css/FestivalLandingPage.css"
import festival1Image from "../assets/festival1.jpg"; 
import festival2Image from "../assets/festival2.jpg"; 
import festival3Image from "../assets/festival3.jpg"; 
import festival4Image from "../assets/festival4.jpg"; 
import festival5Image from "../assets/festival5.jpeg"; 

const festivals = [
  {
    id: 1,
    name: "Sziget",
    description: "A grand celebration of music from various genres.",
    image: require("../assets/festival1.jpg"),  // Use `require` for dynamic imports
    link: "/festivals/sziget",
  },
  {
    id: 2,
    name: "Tomorrowland",
    description: "An exhibition showcasing music and diverse art forms.",
    image: require("../assets/festival2.jpg"),  // Use `require` for dynamic imports
    link: "/festivals/tomorrowland",
  },
  {
    id: 3,
    name: "Mysteryland",
    description: "A mystic experience.",
    image: require("../assets/festival3.jpg"),  // Use `require` for dynamic imports
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
              <Button kind="secondary" as="a" href="/about" aria-label="About page" margin="100px">
                About
              </Button>
            </li>
            <li>
              <Button kind="secondary" as="a" href="/contact" aria-label="Contact page">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
  
        {/* Page Content */}
        <main className="main-content">
          <h1  style={{ margin: "20px" }} >Music Festivals 2025</h1>
          <Accordion align="start" aria-label="Festival list">
            {festivals.map((festival) => (
              <AccordionItem
                key={festival.id}
                title={
                  <Grid>
                    <Column sm={4} md={6} lg={6}>
                      <img
                        src={festival.image}
                        alt={`Image of ${festival.name}`}
                        className="festival-image"
                      />
                    </Column>
                    <Column sm={4} md={6} lg={6}>
                      <span className="festival-name">{festival.name}</span>
                    </Column>
                    <Column>
                    <p>{festival.description}</p>
                    <div  style={{ margin: "20px" }}>
                <Button
                  kind="primary"
                  as={Link}
                  to={festival.link}
                  aria-label={`More about ${festival.name}`}
                  style={{ marginTop: "20px" }} 
                >
                  Learn More
                </Button>
                </div>
                    </Column>
                  </Grid>
                }
              >
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </div>
    );
  };
  
  export default FestivalLandingPage;
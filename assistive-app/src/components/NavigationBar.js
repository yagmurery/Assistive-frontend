import React from 'react';
import { Button } from 'carbon-components-react';

const NavigationBar = () => {
  return (
    <nav aria-label="Main navigation" className="navigation-bar">
      <ul className="navigation-list">
        <li>
          <Button kind="secondary" as="a" href="/home" aria-label="Home page">
            Home
          </Button>
        </li>
        <li>
          <Button kind="secondary" as="a" href="/about" aria-label="About page">
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
  );
};

export default NavigationBar;
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbarContainer ${scrolled ? 'navbarHidden' : ''}`}>
      <ul className="optionsContainer">
        <li className='option'>
          <Link to="meSection" smooth={true} duration={500}>Me</Link>
        </li>
        <li className='option'>
          <Link to="experienceSection" smooth={true} duration={500}>Experience</Link>
        </li>
        <li className='option'>
          <Link to="projectsSection" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='option'>
          <Link to="contactSection" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

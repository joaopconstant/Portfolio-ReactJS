import React, { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import './styles.css';

function DesktopHeader() {
    return(
        <nav>
            <div className='logo'>CONS7ANT</div>
            <div>
                <ul className='links'>
                    <li><a href='#about'>Sobre</a></li>
                    <li><a href='#techstack'>Experiência</a></li>
                    <li><a href='#projects'>Projetos</a></li>
                    <li><a href='#contact'>Contato</a></li>
                </ul>
            </div>
        </nav>
    );
}

function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav id="hamburger-nav">
        <div className="logo">CONS7ANT</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experiência</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

function Header() {
    const isMobile = useWindowSize();

    return isMobile ? <MobileHeader/> : <DesktopHeader/>;
}


export default Header;
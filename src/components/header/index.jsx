import React from 'react'
import useWindowSize from '../../utils/useWindowSize';
import './styles.css'

function DesktopHeader() {
    return(
        <header>
            <div className='logo'>João Constant</div>
            <div>
                <ul className='links'>
                    <li><a href='#sobre'>Sobre</a></li>
                    <li><a href='#experiencia'>Experiência</a></li>
                    <li><a href='#projetos'>Projetos</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>
            </div>
        </header>
    );
}

function MobileHeader() {
    const toggleMenu = () => {
        const menuLinks = document.querySelector('.menu-links');
        menuLinks.classList.toggle('open');
    }

    return (
        <p>Hello World</p>
    )
}

function Header() {
    const isMobile = useWindowSize();

    return isMobile ? <MobileHeader/> : <DesktopHeader/>;
}


export default Header;
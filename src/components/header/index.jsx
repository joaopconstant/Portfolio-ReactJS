import React from 'react'
import './styles.css'

Header = () => {
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

export default Header;
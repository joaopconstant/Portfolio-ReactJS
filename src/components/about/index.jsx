import React from 'react';
import './styles.css';
import { SectionSubtitle, Title } from '../../globalComponents';

function About() {
    return(
        <section id="about">
            <SectionSubtitle>Conheça um pouco</SectionSubtitle>
            <Title>Sobre Mim</Title>
            <div className='section__pic-container'>
                <img className='about-pic' src='src\assets\about-pic.png'></img>
            </div>
            <div className='text-container'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni dolorem exercitationem adipisci. Fugiat ea incidunt porro harum maiores, asperiores vitae culpa, expedita odio autem ipsa, consequatur voluptates mollitia eius.</p>
            </div>
        </section>
    )
}

export default About;

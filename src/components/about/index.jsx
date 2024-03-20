import React from 'react';
import './styles.css';
import { SectionSubtitle, Title } from '../../globalComponents';

function About() {
    return(
        <section id="about">
            <SectionSubtitle>Conheça um pouco</SectionSubtitle>
            <Title>Sobre Mim</Title>
            <div className='about-container'>
                <div className='section__pic-container'>
                    <img className='about-pic' src='src\assets\about-pic.png'></img>
                </div>
                <div className='text-container'>
                    <p className='text-container-title'>Desenvolvedor Full Stack Júnior</p>
                    <p>Moro no Rio de janeiro, tenho 21 anos e sou paixonado por tecnologia desde a infância. Tenho um forte interesse em desenvolvimento de softwares e estou constantemente buscando aprender e aprimorar minhas habilidades. Sempre fui movido pela resolução de problemas e pela busca de soluções inovadoras. Ao invés de reclamar das adversidades, eu as encaro como desafios e busco maneiras criativas de superá-los.</p>
                </div>
            </div>
        </section>
    )
}

export default About;

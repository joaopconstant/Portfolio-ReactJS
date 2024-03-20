import React from 'react'
import './styles.css'
import { PrimaryButton, Secondarybutton } from '../../globalComponents';

function Profile() {
    return(
        <section id='profile'>
            <div className='section__pic-container'>
                <img src="src/assets/profile-pic.jpg" alt="Joao Constant profile picture"/>
            </div>
            <div className='section__text'>
                <p className='section__text__p1'>Olá, eu sou</p>
                <h1 className='title'>João Pedro Constant</h1>
                <p className='section__text__p2'>Full Stack Developer</p>
                <div className='btn-container'>
                    <PrimaryButton onClick={() => window.open("src/assets/joao-constant-resume.pdf")}>Currículo</PrimaryButton>
                    <Secondarybutton onClick={() => window.location.href = "./#contact"}>Contato</Secondarybutton>
                </div>
                <div className='socials-container'>
                    <img src="src\assets\linkedin.png" alt="Meu perfil no LinkedIn" className='icon' onClick={() => location.href = "https://www.linkedin.com/in/joaopconstant/"}/>
                    <img src="src\assets\github.png" alt="Meu perfil no gitHub" className='icon' onClick={() => location.href = "https://github.com/joaopconstant"}/>
                </div>
            </div>
        </section>
    )
}

export default Profile;

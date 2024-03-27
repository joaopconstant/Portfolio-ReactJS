import React from "react";
import './styles.css'
import { SectionSubtitle, Title } from "../../globalComponents";
import { Icon } from "@iconify-icon/react";

function Techstack() {
    return (
        <section id="techstack">
            <SectionSubtitle>Explore minha</SectionSubtitle>
            <Title>Tech Stack</Title>
            <div className="tech-stack">
                <div className="tech">
                    <Icon icon={"devicon:java"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">Java</p>
                    <p className="tech-level">Experiente</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:javascript"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">JavaScript</p>
                    <p className="tech-level">Experiente</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:html5"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">HTML</p>
                    <p className="tech-level">Experiente</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:css3"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">CSS</p>
                    <p className="tech-level">Experiente</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:spring"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">SpringBoot</p>
                    <p className="tech-level">Intermediário</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:react"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">React</p>
                    <p className="tech-level">Intermediário</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:angular"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">Angular</p>
                    <p className="tech-level">Intermediário</p>
                </div>
                <div className="tech">
                    <Icon icon={"devicon:nodejs"} width={"3rem"} height={"auto"}></Icon>
                    <p className="tech-title">NodeJS</p>
                    <p className="tech-level">Básico</p>
                </div>
            </div>
        </section>
    )
}

export default Techstack

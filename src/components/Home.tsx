import React, {Fragment, useState} from "react";

import jodio from "../jodio.jpg";
import {useTranslation} from "react-i18next";

function Home() {

    const {t} = useTranslation()

    let links: { link: string, name: string }[] = [
        {"link": "https://github.com/aibehk", "name": "Github"},
        {"link": "https://www.pinterest.de/soysalayberk05/", "name": "Pinterest"},
        {"link": "https://www.instagram.com/", "name": "Instagram"},
        {"link": "https://www.hoyolab.com/accountCenter/postList?id=223957018", "name": "Hoyolab"}
    ]

    let projects: { link: string, name: string, description: string }[] = [
        {
            "link": "https://github.com/BixConcept/tutoring-frontend",
            "name": "GymHaan Nachhilfeportal",
            "description": "Vor geraumer Zeit habe ich mich verschiedenen Schulkameraden gemeinsam ein Nachhilfeportal für unsere geliebte Schule gebastelt."
        }
        , {
            "link": "https://github.com/aibehk/website",
            "name": "Website",
            "description": "Meine wunderschöne Webpräsenz."
        }
    ]

    let Rich = () => {
        const [tColor, setTColor] = useState("#27ae60")
        let colors: string[] = ["#1abc9c", "#e67e22", "#f1c40f", "#c0392b", "#7f8c8d", "#2c3e50"]
        setInterval(() => {
            setTColor(colors[Math.floor(Math.random() * colors.length)])
        }, 200)
        return (
            <p style={{color: tColor}}>{t("rich")}</p>
        )
    }

    return (
        <Fragment>
            <div id={"about-me"}>
                <h3>Über mich</h3>
                <img src={jodio} alt={"Ein wunderschönes Bild meines Antlitzes "} width={"10%"}/>
                Ich bin ein 18 Jähriger auf der Suche nach den Mechanismen des Alltags.
                Diese möchte ich mir aneignen, um meinem Ziel, <Rich/> zu werden, näherzukommen.
                {t("a")}
            </div>
            <div id={"social-media"}>
                <h3>Social Media</h3>
                <ul>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div id={"projekte"}>
                <h3>Projekte</h3>
                Ich habe schon in der Krabbelgruppe mich für die Programmierung begeistern können. Daher konnte ich
                schon reichlich Erfahrung sammeln.
                <ul>
                    {projects.map((project, i) => {
                        return (
                            <li key={i}>
                                <a href={project.link}>{project.name}</a> -- {project.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>

    )
}

export default Home;
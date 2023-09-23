import React, {Fragment} from "react";

import jodio from "../jodio.jpg";

function Home() {

    let links: { link: string, name: string }[] = [
        {"link": "https://github.com/aibehk", "name": "Github"},
        {"link": "https://www.pinterest.de/soysalayberk05/", "name": "Pinterest" },
        {"link": "https://www.instagram.com/", "name": "Instagram"},
        {"link": "https://www.hoyolab.com/accountCenter/postList?id=223957018", "name": "Hoyolab"}
    ]

    let projects: {link: string, name: string, description: string}[] = [
        {"link": "https://github.com/BixConcept/tutoring-frontend", "name": "GymHaan Nachhilfeportal", "description": "Vor geraumer Zeit habe ich mich verschiedenen Schulkameraden gemeinsam ein Nachhilfeportal für unsere geliebte Schule gebastelt."}
        ,{"link": "", "name": "", "description": ""}
    ]

    return (
        <Fragment>
            <div id={"about-me"}>
                <h3>Über mich</h3>
                <img src={jodio} alt={"Ein wunderschönes Bild meines Antlitzes "}/>
                Ich bin ein 18 Jähriger auf der Suche nach den Mechanismen des Alltags.
                Diese möchte ich mir aneignen, um meinem Ziel, <strong>REICH</strong> zu werden, näherzukommen.
            </div>
            <div id={"social-media"}>
                <h3>Social Media</h3>
                <ul>
                {links.map((link, i) => {
                    return (
                        <li>
                        <a key={i} href={link.link}>{link.name}</a>
                        </li>
                    )
                })}
                </ul>
            </div>
            <div id={"projekte"}>
                <h3>Projekte</h3>
                Ich habe schon in der Krabbelgruppe mich für die Programmierung begeistern können. Daher konnte ich schon reichlich Erfahrung sammeln.
                <ul>
                    {projects.map((project, i) => {
                        return (
                            <li>
                                <a key={i} href={project.link}>{project.name}</a> -- {project.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>

    )
}

export default Home;
import React from "react";

import item1 from "../../assets/item1.png"
import { Container } from "react-bootstrap";


function About() {
    return <div id="slide">
        <Container>
            <div className="line primary-line">
                <img src={item1} alt="item1" />
                <p className="heading">Everything started from a friendship...</p>
            </div>
            <p className="paragraph" style={{marginTop: "2em"}}>
                After Meeting at a party, Ryan a pre-dent student shared his Idea with Mojtaba Javid. They started to meet more regularly and developed the idea toward something unique. Founded by UW-Madison’s Ricke Lab, they started to grow the team, and Welcomed Alicia to the ursearch family. They spent 2 month advancing their skills and finalizing a prototype, and now...
            </p>
        </Container>
    </div>
}

export default About;
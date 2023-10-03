"use client";

import { Button, Col, Container, Nav, Row, NavLink } from "@/client-wrappers/bootstrap";
import "./jobs.scss";
import { SearchBar, ReccomendedCard, SavedJobs, SavedFilters } from "./components";

// Static data for now
const reccomendedCardData = [
    { company: "Ricke Lab", location: "Urology Lab", sigma: true, affiliation: "University of Wisconsin - Madison", typeOfPosition: "Research Opportunity", description: "This research program encompasses basic and translational sciences through experiments and work that is ought to advance the field.", bookmarked: true },
    { company: "ResNet Labs", location: "Machine Learning Lab", sigma: false, affiliation: "University of Wisconsin - Madison", typeOfPosition: "Research Opportunity", description: "AI is taking over the modern world, and we are a part of it. Resnet labs have been a part of leading research in AI and Machine learning for over 3 decades.", bookmarked: true },
    { company: "TechSec", location: "Software Security Lab", sigma: true, affiliation: "University of Wisconsin - Madison", typeOfPosition: "Internship", description: "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.", bookmarked: false },
    { company: "BioLife Lab", location: "Biochemistry Lab", sigma: false, affiliation: "University of Wisconsin - Madison", typeOfPosition: "Research Assistance", description: "Biochemistry is not all finals with a class average of F, or memorizing 20 pages of formulas. Get experienced through our micro-molecular genome study, and research cancer.", bookmarked: true },
];

export default function Jobs() {
    return (
        <Container>
            <SearchBar />
            <h2>Reccomended...</h2>
            <Row>
                {reccomendedCardData.map((card, index) => {
                    return <ReccomendedCard key={index} company={card.company} location={card.location} sigma={card.sigma} affiliation={card.affiliation} typeOfPosition={card.typeOfPosition} description={card.description} bookmarked={card.bookmarked} />;
                })}
            </Row>
            <Row className="top-margin">
                <SavedJobs />
                <SavedFilters />
            </Row>
        </Container>
    );
}

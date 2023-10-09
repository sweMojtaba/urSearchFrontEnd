"use client";

import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { SearchBarWithAdvancedFilters } from "@/components/functionalities/filters";

import { BigLi } from "@/components/cards-and-items/listItems";
import WorkIcon from "../applicant-profile/work.svg";
import { Button, Container, Col, Row } from "@/client-wrappers/bootstrap";

import { useState } from "react";
import Link from "next/link";

import Image from "react-bootstrap/Image";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import styles from "./styles.module.scss";

const reccomendedCardData = [
  {
    company: "Ricke Lab",
    location: "Urology Lab",
    sigma: true,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Research Opportunity",
    description:
      "This research program encompasses basic and translational sciences through experiments and work that is ought to advance the field.",
    bookmarked: true,
  },
  {
    company: "ResNet Labs",
    location: "Machine Learning Lab",
    sigma: false,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Research Opportunity",
    description:
      "AI is taking over the modern world, and we are a part of it. Resnet labs have been a part of leading research in AI and Machine learning for over 3 decades.",
    bookmarked: true,
  },
  {
    company: "TechSec",
    location: "Software Security Lab",
    sigma: true,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Internship",
    description:
      "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.",
    bookmarked: false,
  },
  {
    company: "BioLife Lab",
    location: "Biochemistry Lab",
    sigma: false,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Research Assistance",
    description:
      "Biochemistry is not all finals with a class average of F, or memorizing 20 pages of formulas. Get experienced through our micro-molecular genome study, and research cancer.",
    bookmarked: true,
  },
];

export default function Opportunities() {
    return (
        <Container className="medium-content">
            {/* <Container>
                <Row>
                    <AdvancedFiltersPopUp advancedFilterIsVisible={advancedFilterIsVisible} />
                </Row>
            <SearchBar advancedFilterStatus={advancedFilterStatus} />
            </Container> */}

            <SearchBarWithAdvancedFilters />

            <Row>
                <Col sm={10}>
                    <h3>Results</h3>
                    <BigLi
                        title="Research Assistant"
                        subtitle="Posted on 2021-01-01"
                        note="5 Applicants"
                        url="/job?id=1"
                        ImgSrc={WorkIcon}
                    />
                </Col>
                <Col>
                    <h3>Top Matches</h3>
                </Col>
            </Row>
            <Link
                href="/post-opportunity"
                className={styles.pageEndButton + " button-link"}
            >
                <Button>Post New Opportunity</Button>
            </Link>
            <h3>"Propose Idea" listings are ...</h3>
        </Container>
    );
}

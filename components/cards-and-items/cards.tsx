"use client" // needed for onClick interactions to work

import { Button, Col, Row, Container } from "@/client-wrappers/bootstrap";
import Edit from "./edit.svg";

import "./info-card.scss"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InfoCardProps {
    title: string;
    children: React.ReactNode;
    editFunc?: () => void;
}

export function InfoCard({ title, children, editFunc }: InfoCardProps) {
    return <Container className="info-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
            {editFunc &&
                <Image src={Edit} alt="edit" onClick={editFunc} />
            }
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
    </Container>
}

export interface ActionableCardProps {
    title: string;
    children?: React.ReactNode;
    buttonProps?: ActionableCardButtonProps;
}

export interface ActionableCardButtonProps {
    buttonText: string;
    href?: string;
    buttonAction?: () => void;
    disabled?: boolean;
    active?: boolean;
}

export function ActionableCard({ title, children, buttonProps }: ActionableCardProps): JSX.Element {
    return <Container className="info-card actionable-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
        {buttonProps &&
            <Button
                href={buttonProps.href}
                onClick={buttonProps.buttonAction}
                disabled={buttonProps.disabled ?? false}
                active={buttonProps.active ?? false}>
                {buttonProps.buttonText}
            </Button>}
    </Container>
}

export type PassableInfoCardProps = Omit<InfoCardProps, "children">;
export type PassableActionableCardProps = Omit<ActionableCardProps, "children">;

export interface InfoCardWithImgProps {
    CardComponent: React.FC<InfoCardProps>;
    cardProps: PassableInfoCardProps;
    children: React.ReactNode;
    ImgSrc: StaticImport;
}

export interface ActionableCardWithImgProps {
    CardComponent: React.FC<ActionableCardProps>;
    cardProps: PassableActionableCardProps;
    children: React.ReactNode;
    ImgSrc: StaticImport;
}

export type CardWithImgProps = InfoCardWithImgProps | ActionableCardWithImgProps;

export function CardWithImg({ CardComponent, cardProps, children, ImgSrc }: CardWithImgProps): JSX.Element {
    return <div className="info-card-with-img">
        <Image src={ImgSrc} alt="image for card" className="img-on-card" />
        <CardComponent
            {...cardProps}>
            {children}
        </CardComponent>
    </div>
}

interface JobCardProps {
    company: string;
    location: string;
    sigma: boolean;
    affiliation: string;
    typeOfPosition: string;
    description: string;
    bookmarked: boolean;
}

export function JobCard({ company, location, sigma, affiliation, typeOfPosition, description, bookmarked }: JobCardProps) {
    return (
        <Col>
            <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={96} height={96} className="uw-logo" />
            <div className="card">
                <div>
                    <div className="right-aligned">
                        <div className="card-row">
                            <h3>{company}</h3>
                            {sigma && <Image src={"/sigma.png"} alt="Sigma" width={24} height={24} className="sigma-img" />}
                        </div>
                        <h5>{location}</h5>
                    </div>
                    <h4 className="affiliation">{affiliation}</h4>
                    <h4 className="position">{typeOfPosition}</h4>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="card-row">
                    <Button>See More</Button>
                    <Image src={bookmarked ? "/bookmark-filled.png" : "/bookmark-empty.png"} alt="Bookmark Status" width={36} height={36} className="bookmark-icon" />
                </div>
            </div>
        </Col>
    );
}

export function JobResultCard() {
    let viewPercentage = true;
    return (
        <Row className="job-results-card">
            <Col className="card-row">
                <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={60} height={60} className="job-results-photo" />
                <Col>
                    <h3>Lab Name</h3>
                    <h4><i>Research Assistant</i></h4>
                </Col>
            </Col>
            <Col lg={5} className="job-results-end">
                {viewPercentage ? <h3>70%</h3> : <></>}
                <div className="job-results-see-more">
                    <Button>See More</Button>
                </div>
                <Image src={true ? "/bookmark-filled.png" : "/bookmark-empty.png"} alt="Bookmark Status" width={36} height={36} className="bookmark-icon" />
            </Col>
        </Row>
    );
}

"use client" // needed for onClick interactions to work

import { useState, useEffect } from "react";
import { Button, Col, Row, Container } from "@/client-wrappers/bootstrap";
import { Form } from 'react-bootstrap'
import Edit from "./edit.svg";

import "./info-card.scss"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InfoCardProps {
    title: string;
    children: React.ReactNode;
    editFunc?: () => void;
}

// THIS IS EXTREMELY TEMPORARY
// LOTS OF TODO's NEEDED INCLUDING HYDRATION
export function InfoCard({ title, children, editFunc }: InfoCardProps) {
    const [popupVisible, setPopupVisible] = useState(false); 

    async function sendReport(title: string, description: string) {
        console.log("TODO: implement POST requests for " + title);
        const res = await fetch("https://example.org")
        return res
    }

    // Retrieves the contents of the Title and Description forms.
    function extractForm(event: React.FormEvent<HTMLFormElement>): { title: string, description: string } {
        const title = (event.currentTarget.elements.namedItem("title") as HTMLInputElement).value;
        const description = (event.currentTarget.elements.namedItem("description") as HTMLInputElement).value;
        return { title, description }
    }

    // Fires after user presses submit button.
    function submitReport(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { title, description } = extractForm(event);
        const res = sendReport(title, description).then((res) => {
            if (res.status === 200) { // TODO add additional error messages; use something other than alert
                alert("Edit made!");
                setPopupVisible(false);
            }
        })
    }

    const useEscape = () => {
        useEffect(() => {
            const handleEsc = (event: KeyboardEvent) => {
                if (event.key === "Escape" || event.key === "Esc") {
                    setPopupVisible(false);
                }
            };
            window.addEventListener("keydown", handleEsc);

            return () => {
                window.removeEventListener("keydown", handleEsc);
            };
        }, []);
    };
    useEscape()

    function EditPopUp({visible} : {visible : boolean}) {
        return (
            <Col xs={24} className={`popup-${visible ? "visible" : "hidden"}`}>
                <div className="overlay"></div>
                <Form className="bug-report-form" style={{"zIndex": 102}} onSubmit={submitReport}>      
                    <h2>Edit! (Currently placeholder!)</h2>
                    <Form.Group>
                        <Form.Control as="input" type="text" placeholder="Title" className="report-form-title" name="title"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows={5}  placeholder="Description" className="report-form-description" name="description"/>
                    </Form.Group>
                    <div style={{"display": "flex"}}>
                        <div style={{"width": "50%"}}></div>
                        <div style={{"display": "flex", "width": "50%", }}>
                            <Button className="form-btn" onClick={()=>{setPopupVisible(false)}}>Cancel</Button>
                            <Button className="form-btn" variant="primary" type="submit">Submit</Button>
                        </div>
                    </div>
                </Form>
            </Col>
        )
    }

    return <Container className="info-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
            {editFunc &&
                <Image src={Edit} alt="edit" onClick={() => setPopupVisible(true)} />
            }
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
        <EditPopUp visible={popupVisible}/>
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
        <div className="job-card">
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
        </div>
    );
}

export function JobResultCard() {
    let viewPercentage = true;

    return (
        <div className="results-card">
            <div className="card-row">
                <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={50} height={50} className="results-photo" />
                <Col className="results-title-container">
                    <h3>Lab Name</h3>
                    <h4><i>Research Assistant</i></h4>
                </Col>
            </div>
            <div className="results-end">
                {viewPercentage ? <h3 className="results-percentage">70%</h3> : <></>}
                <div>
                    <Button className="results-button">See More</Button>
                </div>
                <Image src={true ? "/bookmark-filled.png" : "/bookmark-empty.png"} alt="Bookmark Status" width={36} height={36} className="results-bookmark" />
            </div>
        </div>
    );
}

export function OpportunityResultCard() {
    let allowEdit = true;
    let isSigma = true;

    return (
        <div className="results-card-opportunity">
            <div className="card-row">
                <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={50} height={50} className="results-photo-opportunity" />
                <Col className="results-title-container">
                    <div className="results-title">
                        <h3><i>Lab Name</i></h3>
                        {isSigma && <Image src={"/sigma.png"} alt="Sigma" width={24} height={24} className="results-sigma" />}
                    </div>
                    <h4>Research Assistant</h4>
                </Col>
            </div>
            <div className="results-end-opportunity">
                {allowEdit ? 
                    <div>
                        <Button className="results-button-opportunity">Edit</Button>
                    </div>
                    :
                    <>
                    </>
                }
                <div>
                    <Button className="results-button-opportunity">View Applicants</Button>
                </div>
            </div>
        </div>
    );
}
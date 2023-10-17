"use client";

import { Form } from "react-bootstrap";
import { Container, Button } from '@/client-wrappers/bootstrap';
import Image from "next/image";

import "./styles.scss"

export default function Idea() {
    return (
        <Container className="medium-container">
            <div id="description-container">
                <Image src="/sigma.png" alt="" width={80} height={80}/>
                <h2>
                    Ricke Lab is interested in research or innovation ideas in their field. Upload your proposal to extend a collaboration opportunity to them, and bring your ideas to life!
                </h2>
            </div>
            <div id="submission-container">
                <div>
                    <div id="title-container">
                        <p>Title</p>
                    </div>
                    <Button>
                        Add Documents
                    </Button>
                    <Button>
                        (Optional) Add a Proposal Video Explaining Your Idea
                    </Button>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check.Input type="checkbox" className="paragraph" id="termsCheck" name="termsCheck" />
                        <Form.Check.Label id="ownworklabel">I attest that this idea and the documents are of my own work.</Form.Check.Label>
                    </Form.Group>
                    <Button>
                        Submit
                    </Button>
                </div>
            </div>
        </Container>
    )
}
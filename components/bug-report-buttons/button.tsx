import { useState, useEffect } from "react";
import { Col, Row, Button, Container } from "@/client-wrappers/bootstrap"
import { Form } from 'react-bootstrap'
import './styles.scss';

export function BugReportButton() {
    const [bugReportIsVisible, setBugReportIsVisible] = useState(false); 

    const bugReportStatus = () => {
        setBugReportIsVisible(true)
    }

    const useEscape = () => {
        useEffect(() => {
            const handleEsc = (event: KeyboardEvent) => {
                if (event.key === "Escape" || event.key === "Esc") {
                    setBugReportIsVisible(false);
                }
            };
            window.addEventListener("keydown", handleEsc);

            return () => {
                window.removeEventListener("keydown", handleEsc);
            };
        }, []);
    };

    useEscape()

    function BugReportPopUp({bugReportPopUpIsVisible} : {bugReportPopUpIsVisible : boolean}) {
        return (
            <Col xs={24} className={`popup-${bugReportPopUpIsVisible ? "visible" : "hidden"}`}>
                <div className="overlay"></div>
                <Form className="bug-report-form" style={{"zIndex": 102}}>      
                    <h2>Report A Problem!</h2>
                    <Form.Group>
                        <Form.Control as="input" type="text" placeholder="Title" className="report-form-title"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows={5}  placeholder="Description" className="report-form-description"/>
                    </Form.Group>
                    <div style={{"display": "flex"}}>
                        <div style={{"width": "50%"}}></div>
                        <div style={{"display": "flex", "width": "50%", }}>
                            <Button className="form-btn" onClick={()=>{setBugReportIsVisible(false)}}>Cancel</Button>
                            <Button className="form-btn" variant="primary" type="submit">Submit</Button>
                        </div>
                    </div>
                </Form>
            </Col>
        )
    }

    return (
    <div>
        <Button onClick={bugReportStatus}>
            ?
        </Button>
        <BugReportPopUp bugReportPopUpIsVisible={bugReportIsVisible} />
    </div>
    );
}
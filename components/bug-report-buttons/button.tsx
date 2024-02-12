import { useState, useEffect } from "react";
import { Col, Row, Button } from "@/client-wrappers/bootstrap"
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
                <Form>
                    <h2>Report A Problem!</h2>
                    <Form.Group>
                        <Form.Control as="input" type="text" placeholder="Title" className="report-form-title"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea"  placeholder="Description" className="report-form-description"/>
                    </Form.Group>
                    <Button onClick={()=>{setBugReportIsVisible(false)}}>Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Col>
        )
    }

    return (
    <div>
        <Button onClick={bugReportStatus}>

        </Button>
        <BugReportPopUp bugReportPopUpIsVisible={bugReportIsVisible} />
    </div>
    );
}
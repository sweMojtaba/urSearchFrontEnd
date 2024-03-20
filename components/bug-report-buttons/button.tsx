import { useState, useEffect, ChangeEvent } from "react";
import { Col, Row, Button, Container } from "@/client-wrappers/bootstrap"
import { Form } from 'react-bootstrap'
import './styles.scss';

export function BugReportButton() {
    const [bugReportIsVisible, setBugReportIsVisible] = useState(false); 

    const bugReportStatus = () => {
        setBugReportIsVisible(true)
    }

    async function sendReport(title: string, description: string) {
        const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/reportbug";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "currentPage": "TESTING", // TODO implement using https://nextjs.org/docs/app/api-reference/functions/use-pathname
                "title": title,
                "description": description,
            }),
        });
        return res;
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
                alert("Bug report sent!");
                setBugReportIsVisible(false);
            }
        })
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
                <Form className="bug-report-form" style={{"zIndex": 102}} onSubmit={submitReport}>      
                    <h2>Report A Problem!</h2>
                    <Form.Group>
                        <Form.Control as="input" type="text" placeholder="Title" className="report-form-title" name="title"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows={5}  placeholder="Description" className="report-form-description" name="description"/>
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
        <Button className="button" onClick={bugReportStatus}>?</Button>
        <BugReportPopUp bugReportPopUpIsVisible={bugReportIsVisible} />
    </div>
    );
}
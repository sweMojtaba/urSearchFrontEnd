import { useState, useEffect } from "react";
import { Col, Button } from "@/client-wrappers/bootstrap"
import { Form } from 'react-bootstrap'
import './styles.scss';

export function BugReportButton() {
    const [bugReportIsVisible, setBugReportIsVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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

    const submitBugReport = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title === "" || description === "") {
            alert("Must include both a title and a description.");
            return;
        }

        const bugReport = {
            currentPage: window.location.pathname.slice(1), // Removes leading "/"
            title,
            description
        };

        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        const url = baseUrl + "api/reportbug";

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                credentials: "include",
                body: JSON.stringify(bugReport)
            });

            if (res.ok) {
                setTitle("");
                setDescription("");
                setBugReportIsVisible(false);
            } else {
                console.error(await res.text());
                alert("An error occurred while submitting the bug report.");
            }
        }  catch (error) {
            console.error("Error submitting bug report: ", error);
            alert("An error occurred while submitting the bug report.");
        }

    }

    return (
    <div>
        <Button className="button" onClick={() => setBugReportIsVisible(true)}>?</Button>
        <Col xs={24} className={`popup-${bugReportIsVisible ? "visible" : "hidden"}`}>
                <div className="overlay"></div>
                <Form onSubmit={submitBugReport} className="bug-report-form" style={{"zIndex": 102}}>      
                    <h2>Report A Problem!</h2>
                    <Form.Group>
                        <Form.Control as="input" type="text" placeholder="Title" className="report-form-title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows={5}  placeholder="Description" className="report-form-description" value={description} onChange={(e) => setDescription(e.target.value)}/>
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
    </div>
    );
}
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { AiFillFilePdf } from "react-icons/ai"
import { useNavigate } from "react-router-dom";


function WebsiteInput() {
    const [website, setWebsite] = useState("");
    const [importing, setImporting] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [importButtonContent, setImportButtonContent] = useState(() => {
        return <>Import</>
    })
    const navigate = useNavigate();

    useEffect(() => {
        if (importing === true) {
            setDisabled(false);
        }
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);
        if (website.match(regex)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    },[importing, website])

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    }

    const handleImport = () => {
        // To-do: upload to back-end
        setImporting(true);
        setImportButtonContent(() => {
            return <>
                Importing
                <Spinner
                    animation="border"
                    variant="light"
                    className="ms-2"
                    id="fileUploadSpinner"
                />
            </>
        })
        setTimeout(() => {
            setImportButtonContent(() => {
                return <>Waiting for redirect...</>
            })
            alert("Successfully imported your file!")
            setTimeout(() => navigate("/under-construction"), 1000)
        }, 3000)
    };


    return <Form>
        <Form.Group className="mb-3 line">
            <Form.Label>
                <AiFillFilePdf className="icon-inline" />
            </Form.Label>
            <Form.Control
                type="file"
                placeholder="Input your website url..."
                onChange={handleWebsiteChange}
                value={website}
            />
        </Form.Group>
        <div className="line">
            <Button
                disabled={disabled}
                onClick={handleImport}
            >
                {importButtonContent}
            </Button>
        </div>
    </Form>
}

export default WebsiteInput;
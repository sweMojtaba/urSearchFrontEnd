import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { AiFillFilePdf } from "react-icons/ai"
import { useNavigate } from "react-router-dom";


function ResumeInput() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadButtonContent, setUploadButtonContent] = useState(() => {
        return <>Upload</>
    })
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        // To-do: upload to back-end
        setUploading(true);
        setUploadButtonContent(() => {
            return <>
                Uploading
                <Spinner
                    animation="border"
                    variant="light"
                    className="ms-2"
                    id="fileUploadSpinner"
                />
            </>
        })
        setTimeout(() => {
            setUploadButtonContent(() => {
                return <>Waiting for redirect...</>
            })
            alert("Successfully uploaded your file!")
            setTimeout(() => navigate("/individual/profile"), 1000)
        }, 3000)
    };


    return <Form>
        <Form.Group className="mb-3 line">
            <Form.Label>
                <AiFillFilePdf className="icon-inline" />
            </Form.Label>
            <Form.Control
                type="file"
                placeholder="Choose your resume (.pdf)..."
                onChange={handleFileChange}
            />
        </Form.Group>
        <div className="line">
            <Button
                disabled={file === null || uploading === true}
                onClick={handleUpload}
            >
                {uploadButtonContent}
            </Button>
        </div>
    </Form>
}

export default ResumeInput;
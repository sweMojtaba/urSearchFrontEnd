"use client"

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { AiFillFilePdf } from "react-icons/ai"


function ResumeInput() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadButtonContent, setUploadButtonContent] = useState(() => {
        return <>Upload</>
    })
    const router = useRouter();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);
        if (file !== undefined && file !== null) {
            setFile(file);
        }
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
            setTimeout(() => router.push("/individual/profile"), 1000)
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
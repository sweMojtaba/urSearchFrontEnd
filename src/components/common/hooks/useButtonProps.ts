import { useCallback, useEffect, useState } from "react";
import useHandleChooseFile from "./useHandleChooseFile";
import fakeResponse from "../utils/fakeResponse";

export interface ProfileSectionButtonProps {
    buttonText: string;
    buttonAction: () => void;
    disabled: boolean;
}

export function useAddButtonProps(
    addUrl: string,
    addText: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>
):
    ProfileSectionButtonProps {
    const [adding, setAdding] = useState(false);
    const [buttonText, setButtonText] = useState("add");

    useEffect(() => {
        if (adding) {
            setButtonText("Adding...");
        } else {
            setButtonText("add");
            setText("");
        }
    }, [adding])

    const handleAdd = useCallback(() => {
        setAdding(true);
        // TO-DO: add fetch
        // fetch(addUrl, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         text: addText
        //     })
        // })
        fakeResponse().then((response) => {
            if (response.status === 200) {
                alert("Added successfully. With a functional backend, you should be able to see the added item in the list. Now we are just faking it.");
                setAdding(false);
                setReload(true);
            } else {
                alert("add failed");
                setAdding(false);
            }
        }).catch((error) => {
            alert("add failed");
            setAdding(false);
        })
    }, [])

    return {
        buttonText,
        buttonAction: handleAdd,
        disabled: adding
    }
}


export function useUploadButtonProps(uploadUrl: string): ProfileSectionButtonProps  {

    const [file, setFile] = useState<File | undefined>(undefined);
    const [uploading, setUploading] = useState(false);
    const [buttonText, setButtonText] = useState("add");
    const handleChooseFile = useHandleChooseFile(setFile);

    useEffect(() => {
        if (file !== undefined) {
            setUploading(true);
            try {
                fakeResponse().then((response) => {
                    if (response.status === 200) {
                        alert("file uploaded successfully");
                        setFile(undefined);
                        setUploading(false);
                    } else {
                        alert("file upload failed");
                        setUploading(false);
                    }
                });
            } catch (error) {
                alert("file upload failed");
                setUploading(false);
            }
        }
    }, [file])

    useEffect(() => {
        if (uploading) {
            setButtonText("Uploading " + file?.name);
        } else {
            setButtonText("add")
        }
        // console.log("uploading: " + uploading + ", file: " + file?.name + ", buttonText: " + buttonText);
    }, [uploading, file])

    return {
        buttonText,
        buttonAction: handleChooseFile,
        disabled: uploading
    }
}

export default useUploadButtonProps;

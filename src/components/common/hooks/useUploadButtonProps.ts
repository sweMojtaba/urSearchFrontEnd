import { useEffect, useState } from "react";
import useHandleChooseFile from "./useHandleChooseFile.ts";
import fakeResponse from "../utils/fakeResponse.ts";

export interface ProfileSectionButtonProps {
    buttonText: string;
    buttonAction: () => void;
    disabled: boolean;
}

function useUploadButtonProps(uploadUrl: string): ProfileSectionButtonProps  {

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

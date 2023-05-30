import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../structural/UserContext";
import { useNavigate } from "react-router-dom";

function Upload() {
    const [userState, setUserState] = useContext(UserContext);
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (userState === 1) {
            setTitle("Upload your resume...");
        } else if (userState === 2) {
            setTitle("Input your website...");
        } else {
            
        }
    }, [userState])


    return <></>
}

export default Upload;
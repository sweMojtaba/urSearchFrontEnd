import React, { useContext, useMemo } from "react";
import { fetchGPAhidden, fetchPersonalInfo } from "./fakeFetchProfileSections.ts";
import UserContext from "../../structural/UserContext.jsx";
import InfoCardWithImg from "../../common/InfoCardWithImg.jsx";

import profileImg from "../../../assets/profileSolid.svg";

export default function PersonalInfo() {
    const [user, setUser] = useContext(UserContext)
    const {
        name,
        degree,
        major,
        school,
        classYear,
        GPA,
        phone,
        email
    } = useMemo(fetchPersonalInfo, [user]);
    const { GPAhidden } = useMemo(fetchGPAhidden, [user]);

    return <InfoCardWithImg
        title={name}
        img={profileImg}
        editFunc={() => {console.log("TO-DO: edit personal info")}}
    >

        <p>{degree} {major}</p>
        <p>{school}</p>
        <p>class of {classYear}</p>
        <p className="stand-out">GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span></p>
        <p>phone: {phone}</p>
        <p>email: {email}</p>

    </InfoCardWithImg>
}
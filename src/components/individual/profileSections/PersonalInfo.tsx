import React, { useContext, useMemo } from "react";
import { fetchGPAhidden, fetchPersonalInfo } from "./fakeFetchProfileSections.ts";
import UserContext from "../../structural/UserContext";
import CardWithImg, { PassableInfoCardProps } from "../../cards/CardWithImg.tsx";

import { ReactComponent as ProfileImg } from "../../../assets/profileSolid.svg";
import InfoCard from "../../cards/InfoCard.tsx";

export default function PersonalInfo() {
    const { user, setUser } = useContext(UserContext);
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
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => { console.log("TO-DO: edit personal info") }
        }
    }, [name])

    return <CardWithImg
        CardComponent={InfoCard}
        cardProps={cardProps}
        Img={ProfileImg}
    >

        <p>{degree} {major}</p>
        <p>{school}</p>
        <p>class of {classYear}</p>
        <p className="stand-out">GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span></p>
        <p>phone: {phone}</p>
        <p>email: {email}</p>

    </CardWithImg>
}
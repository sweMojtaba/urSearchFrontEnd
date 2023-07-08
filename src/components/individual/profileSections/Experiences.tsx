import React, { useMemo } from "react";
import { fetchExperiences } from "./fakeFetchProfileSections";

export default function Experiences(): JSX.Element {
    const experiences = useMemo(fetchExperiences, []);
    return <div>Experiences</div>
}
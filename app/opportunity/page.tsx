"use client"

import { redirect, useSearchParams } from "next/navigation"
import { Applicant, Post, fetchApplicants, fetchPost } from "./fetch";
import { useMemo } from "react";
import { Accordion, Container } from "react-bootstrap";
import { capitalize } from "@/utils/text";
import { InfoCard } from "@/components/cards-and-items/cards";
import { BigLi } from "@/components/cards-and-items/listItems";

export default function Page() {
    const params = useSearchParams();
    const idParam = params.get("id");
    const id = idParam ? parseInt(idParam) : redirect("/opportunities");
    const postInfo = useMemo(() => fetchPost(id), [id]);
    const applicants = useMemo(() => fetchApplicants(id), [id]);

    return <Container>
        <h1>{postInfo.title}</h1>
        <PostInfo data={postInfo} />
        <Applicants data={applicants} />
    </Container>
}

function PostInfo({ data }: { data: Post }) {
    const accordionHeaders = ["requirements", "responsibilities", "perks", "questions"];

    const accordionItems: { [key: string]: string[] } = {
        requirements: data.requirements,
        responsibilities: data.responsibilities,
        perks: data.perks,
        questions: data.questions
    };

    return <InfoCard
        title="Job Post Infomation"
        editFunc={() => { console.log("TO-DO: edit") }}
    >
        <p>{data.description}</p>
        <ul>
            <li>Pay Range: {data.payRange} ({data.canBeDoneForCredit ? "can" : "cannot"} be done for credit)</li>
            <li>Remote: {data.remote ? "yes" : "no"}</li>
        </ul>
        <Accordion flush>
            {
                Object.entries(accordionItems).map(([key, value], i) => {
                    return <Accordion.Item eventKey={i.toString()} key={key}>
                        <Accordion.Header>{capitalize(key)}</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {value.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                })
            }
        </Accordion>
    </InfoCard>
}

function Applicants({ data }: { data: Applicant[] }) {
    return <>
        {data.map((applicant, i) => <BigLi
            key={i}
            title={applicant.name}
            subtitle={"Applied on " + applicant.timeApplied}
            note=""
            ImgSrc={applicant.profilePicture}
        />)}
    </>
}
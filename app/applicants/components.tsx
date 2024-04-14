"use client";

import { Row, Button, Image, Container } from "react-bootstrap";
import "./aplicants.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SearchBar() {
    return (
        <>
            <Row>
                <form className="form-control">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" className="pr">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.1172 9.55859C16.1172 13.1808 13.1808 16.1172 9.55859 16.1172C5.93638 16.1172 3 13.1808 3 9.55859C3 5.93638 5.93638 3 9.55859 3C13.1808 3 16.1172 5.93638 16.1172 9.55859ZM12.5549 18.6381C11.6125 18.949 10.6052 19.1172 9.55859 19.1172C4.27953 19.1172 0 14.8377 0 9.55859C0 4.27953 4.27953 0 9.55859 0C14.8377 0 19.1172 4.27953 19.1172 9.55859C19.1172 12.7157 17.5866 15.5154 15.2269 17.2559L19.1173 23.5779L16.5624 25.1502L12.5549 18.6381Z"
                            fill="white"
                        />
                    </svg>
                    <input type="search" placeholder="Search Applicants..." className="form-search-input" />
                </form>
            </Row>
            <Row className="mb">
                <Button>Best Match</Button>
                <Button>Not Reviewed</Button>
                <Button>Accepted</Button>
                <Button>Rejected</Button>
                <Button>Interview</Button>
            </Row>
        </>
    );
}

interface applicantInterface {
    ID: string;
    CreatedAt: string;
    UpdatedAt: string;
    userId: string;
    jobSeekerId: string;
    labId: string;
    jobId: string;
    status: string;
    protectedVeteranType: string;
    disabilitiesType: string;
    resumeBlobName: string;
    coverLetterBlobName: string;
    videoBlobName: string;
    isVideoAttached: boolean;
    name: string;
    percent: string;
    image: string;
}

export function ApplicantList() {
    const url = process.env.NEXT_PUBLIC_API_URL + "api/lab/me/applications";
    const searchParams = useSearchParams();
    const jobId = searchParams.get("jobId");
    const [applicants, setApplicants] = useState<applicantInterface[]>([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            const res = await fetch(url, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if (res.status === 200 && data.code == 0) {
                const filteredApplicants = data.data.applications.filter((app: applicantInterface) => app.jobId == jobId);
                setApplicants(filteredApplicants);
            } else {
                console.log(data.msg);
            }
        };

        fetchApplicants();
    }, [url, jobId]);

    return (
        <Container className="applicant-container">
            <h2>Applicants</h2>
            {applicants.map((applicant) => {
                const date = new Date(applicant.CreatedAt);
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                // TODO, use actual % and user image
                return <ApplicantItem key={applicant.ID} ID={applicant.ID} name={applicant.name} date={formattedDate} percent={"80"} image={applicant.image} />;
            })}
        </Container>
    );
}

interface ApplicantItemInterface {
    ID: string;
    name: string;
    date: string;
    percent: string;
    image?: string;
}

function ApplicantItem({ ID, name, date, percent, image }: ApplicantItemInterface) {
    return (
        <>
            <div className="applicant-info">
                <div className="applicants-left">
                    <Image src={image || "/profileSolid.svg"} alt="Profile Picture" width={54} height={54} className="profile-picture" />
                    <div>
                        <h6>{name}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="applicants-right">
                    <p>{percent}%</p>
                    <Link href={`/review-profile?ID=${ID}`} className={"button-link"}>
                        <Button>Review Profile</Button>
                    </Link>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
            </svg>
        </>
    );
}

export function TopMatches() {
    return (
        <>
            <div>
                <h2>Top Matches:</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 350 10" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
                </svg>
            </div>
            {topMatchData.map((student) => (
                <TopMatchItem key={student.id} name={student.name} degree={student.degree} school={student.school} gradYear={student.gradYear} phone={student.phone} email={student.email} quickApplicant={student.quickApplicant} percent={student.percent} image={student.image} />
            ))}
        </>
    );
}

const topMatchData = [
    { name: "Mojtaba Javid", degree: "BS. Computer Sciences", school: "University of Wisconsin - Madison", gradYear: 2024, phone: "(608) 572-8750", email: "javid2@wisc.edu", quickApplicant: true, percent: 84, image: "uw-logo.png", id: 0 },
    { name: "Frank Taylor", degree: "BS. Biology", school: "University of Wisconsin - Madison", gradYear: 2025, phone: "(608) 572-8750", email: "ftaylor@wisc.edu", quickApplicant: true, percent: 77, id: 1 },
    { name: "Marie Curie", degree: "BS. Chemistry", school: "University of Wisconsin - Madison", gradYear: 2024, phone: "(608) 572-8750", email: "macrurie@wisc.edu", quickApplicant: false, percent: 71, id: 2 },
];

interface TopMatchItemInterface {
    name: string;
    degree: string;
    school: string;
    gradYear: number;
    phone: string;
    email: string;
    quickApplicant: boolean;
    percent: number;
    image?: string;
}

function TopMatchItem({ name, degree, school, gradYear, phone, email, quickApplicant, percent, image }: TopMatchItemInterface) {
    return (
        <div className="top-applicant-container">
            <Image alt="profile picture" src={image ? image : "/_next/static/media/profile.420b852d.svg"} width={96} height={96} className={image ? "img-border" : ""}></Image>
            <div className="right-aligned">
                <h4>{name}</h4>
                <h6>{degree}</h6>
            </div>
            <p className="mt">{school}</p>
            <p>{gradYear}</p>
            <p className="mt">{phone}</p>
            <p>{email}</p>
            {quickApplicant && <p className="quick-applicant">Quick Applicant</p>}
            <div className="footer">
                <Button>Review Profile</Button>
                <p>%{percent}</p>
            </div>
        </div>
    );
}

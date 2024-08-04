"use client"; // Indicates that this file is a Client Component in Next.js, allowing for the use of client-side features like useState and useEffect

import { Row, Button, Image, Container } from "react-bootstrap"; // Importing components from react-bootstrap for layout and styling
import "./aplicants.scss"; // Importing the SCSS file for styling
import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
import Link from "next/link"; // Importing Link component from Next.js for navigation
import { useSearchParams } from "next/navigation"; // Importing useSearchParams hook to access URL query parameters

// Function component to render the search bar
export function SearchBar() {
    return (
        <>
            <Row>
                {/* Form for search functionality */}
                <form className="form-control">
                    {/* SVG icon for the search button */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" className="pr">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.1172 9.55859C16.1172 13.1808 13.1808 16.1172 9.55859 16.1172C5.93638 16.1172 3 13.1808 3 9.55859C3 5.93638 5.93638 3 9.55859 3C13.1808 3 16.1172 5.93638 16.1172 9.55859ZM12.5549 18.6381C11.6125 18.949 10.6052 19.1172 9.55859 19.1172C4.27953 19.1172 0 14.8377 0 9.55859C0 4.27953 4.27953 0 9.55859 0C14.8377 0 19.1172 4.27953 19.1172 9.55859C19.1172 12.7157 17.5866 15.5154 15.2269 17.2559L19.1173 23.5779L16.5624 25.1502L12.5549 18.6381Z"
                            fill="white" // Sets the fill color of the path to white
                        />
                    </svg>
                    {/* Input field for searching applicants */}
                    <input type="search" placeholder="Search Applicants..." className="form-search-input" />
                </form>
            </Row>
            <Row className="mb">
                {/* Buttons for filtering applicants */}
                <Button>Best Match</Button>
                <Button>Not Reviewed</Button>
                <Button>Accepted</Button>
                <Button>Rejected</Button>
                <Button>Interview</Button>
            </Row>
        </>
    );
}

// Interface defining the structure of an applicant object
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

// Function component to render the list of applicants
export function ApplicantList() {
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Alternative base URL from environment variable
    const url = baseUrl + "api/lab/me/applications"; // Full API URL to fetch applications
    const searchParams = useSearchParams(); // Hook to get search parameters from the URL
    const jobId = searchParams.get("jobId"); // Extracts jobId from search parameters
    const [applicants, setApplicants] = useState<applicantInterface[]>([]); // State to store the list of applicants

    useEffect(() => {
        // Function to fetch applicants data from the API
        const fetchApplicants = async () => {
            const res = await fetch(url, {
                method: "GET",
                credentials: "include", // Includes credentials in the request
            });
            const data = await res.json(); // Parses the response as JSON
            if (res.status === 200 && data.code == 0) {
                // If the response is successful and no error code
                const filteredApplicants = data.data.applications.filter((app: applicantInterface) => app.jobId == jobId);
                setApplicants(filteredApplicants); // Updates state with filtered applicants
            } else {
                console.log(data.msg); // Logs error message if response is not successful
            }
        };

        fetchApplicants(); // Calls the fetch function on component mount or jobId change
    }, [url, jobId]);

    return (
        <Container className="applicant-container">
            <h2>Applicants</h2>
            {applicants.length > 0 ? (
                // If there are applicants, map through them and render each
                applicants.map((applicant) => {
                    const date = new Date(applicant.CreatedAt);
                    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                    // Renders each applicant item with formatted date
                    return <ApplicantItem key={applicant.ID} ID={applicant.ID} name={applicant.name} date={formattedDate} percent={"80"} image={applicant.image} />;
                })
            ) : (
                <p>No Applicants</p> // Displays a message if no applicants are found
            )}
        </Container>
    );
}

// Interface defining the structure of an applicant item
interface ApplicantItemInterface {
    ID: string;
    name: string;
    date: string;
    percent: string;
    image?: string;
}

// Function component to render a single applicant item
function ApplicantItem({ ID, name, date, percent, image }: ApplicantItemInterface) {
    return (
        <>
            <div className="applicant-info">
                {/* Container for applicant's information */}
                <div className="applicants-left">
                    {/* Applicant's profile picture */}
                    <Image src={image || "/profileSolid.svg"} alt="Profile Picture" width={54} height={54} className="profile-picture" />
                    <div>
                        <h6>{name}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="applicants-right">
                    {/* Display applicant's percentage */}
                    <p>{percent}%</p>
                    {/* Link to review the applicant's profile */}
                    <Link href={`/review-profile?ID=${ID}`} className={"button-link"}>
                        <Button>Review Profile</Button>
                    </Link>
                </div>
            </div>
            {/* SVG separator line */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
            </svg>
        </>
    );
}

// Function component to render the top matches section
export function TopMatches() {
    return (
        <>
            <div>
                <h2>Top Matches:</h2>
                {/* SVG separator line */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 350 10" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
                </svg>
            </div>
            {topMatchData.map((student) => (
                // Renders each top match item
                <TopMatchItem key={student.id} name={student.name} degree={student.degree} school={student.school} gradYear={student.gradYear} phone={student.phone} email={student.email} quickApplicant={student.quickApplicant} percent={student.percent} image={student.image} />
            ))}
        </>
    );
}

// Sample data for top matches
const topMatchData = [
    { name: "Mojtaba Javid", degree: "BS. Computer Sciences", school: "University of Wisconsin - Madison", gradYear: 2024, phone: "(608) 572-8750", email: "javid2@wisc.edu", quickApplicant: true, percent: 84, image: "uw-logo.png", id: 0 },
    { name: "Frank Taylor", degree: "BS. Biology", school: "University of Wisconsin - Madison", gradYear: 2025, phone: "(608) 572-8750", email: "ftaylor@wisc.edu", quickApplicant: true, percent: 77, id: 1 },
    { name: "Marie Curie", degree: "BS. Chemistry", school: "University of Wisconsin - Madison", gradYear: 2024, phone: "(608) 572-8750", email: "macrurie@wisc.edu", quickApplicant: false, percent: 71, id: 2 },
];

// Interface defining the structure of a top match item
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

// Function component to render a single top match item
function TopMatchItem({ name, degree, school, gradYear, phone, email, quickApplicant, percent, image }: TopMatchItemInterface) {
    return (
        <div className="top-applicant-container">
            {/* Applicant's profile picture */}
            <Image alt="profile picture" src={image || "/profileSolid.svg"} width={96} height={96} className={image ? "img-border" : ""}></Image>
            <div className="right-aligned">
                {/* Display applicant's name and degree */}
                <h4>{name}</h4>
                <h6>{degree}</h6>
            </div>
            <p className="mt">{school}</p>
            <p>{gradYear}</p>
            <p className="mt">{phone}</p>
            <p>{email}</p>
            {quickApplicant && <p className="quick-applicant">Quick Applicant</p>} {/* Display quick applicant status if applicable */}
            <div className="footer">
                <Button>Review Profile</Button>
                <p>%{percent}</p> {/* Display applicant's matching percentage */}
            </div>
        </div>
    );
}

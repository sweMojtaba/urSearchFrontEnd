import { Row, Button, Image, Container } from "react-bootstrap";
import "./aplicants.scss";

export function SearchBar() {
    return (
        <>
            <Row>
                <form className="form-control">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" className="pr">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
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

const applicantData = [
    { name: "Mojtaba Javid", date: "4/13/2023", percent: "84", image: "/_next/static/media/schoolIconPlaceholder.7d1493fd.png", id: 0 },
    { name: "Frank Taylor", date: "4/13/2023", percent: "77", id: 1 },
    { name: "Marie Curie", date: "4/11/2023", percent: "71", id: 2 },
    { name: "Niel Guy", date: "3/1/2023", percent: "63", id: 3 },
    { name: "Jane Dough", date: "4/11/2023", percent: "59", id: 4 },
];

export function ApplicantList() {
    return (
        <Container className="applicant-container">
            <h2>Applicants</h2>
            {applicantData.map((applicant) => {
                return <ApplicantItem key={applicant.id} name={applicant.name} date={applicant.date} percent={applicant.percent} image={applicant.image} />;
            })}
        </Container>
    );
}

interface ApplicantItemInterface {
    name: string;
    date: string;
    percent: string;
    image?: string;
}

function ApplicantItem({ name, date, percent, image }: ApplicantItemInterface) {
    return (
        <>
            <div className="applicant-info">
                <div className="applicants-left">
                    <Image src={image ? image : "/_next/static/media/profile.420b852d.svg"} alt="Profile Picture" width={54} height={54} className="profile-picture" />
                    <div>
                        <h6>{name}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="applicants-right">
                    <p>{percent}%</p>
                    <Button>Review Profile</Button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fill-opacity="0.1" />
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
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fill-opacity="0.1" />
                </svg>
            </div>
        </>
    );
}

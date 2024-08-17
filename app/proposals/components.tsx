import { Row, Button, Image, Container } from "react-bootstrap"; // Importing React Bootstrap components
import "./proposals.scss"; // Importing custom styles for the proposals

export function SearchBar() {
    return (
        <>
            <Row>
                <form className="form-control"> {/* Form for the search bar */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" className="pr">
                        {/* Search icon */}
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.1172 9.55859C16.1172 13.1808 13.1808 16.1172 9.55859 16.1172C5.93638 16.1172 3 13.1808 3 9.55859C3 5.93638 5.93638 3 9.55859 3C13.1808 3 16.1172 5.93638 16.1172 9.55859ZM12.5549 18.6381C11.6125 18.949 10.6052 19.1172 9.55859 19.1172C4.27953 19.1172 0 14.8377 0 9.55859C0 4.27953 4.27953 0 9.55859 0C14.8377 0 19.1172 4.27953 19.1172 9.55859C19.1172 12.7157 17.5866 15.5154 15.2269 17.2559L19.1173 23.5779L16.5624 25.1502L12.5549 18.6381Z"
                            fill="white"
                        />
                    </svg>
                    <input type="search" placeholder="Search Proposals..." className="form-search-input" /> {/* Search input field */}
                </form>
            </Row>
            <Row>
                {/* Buttons for filtering proposals */}
                <Button>Not Reviewed</Button>
                <Button>Accepted</Button>
                <Button>Rejected</Button>
                <Button>Interview</Button>
            </Row>
        </>
    );
}

const proposalData = [
    { name: "Mojtaba Javid", title: "Osteoblasts Cell Regeneration", date: "4/13/2023", image: "uw-logo.png", id: 0 },
    { name: "Heisenberg", title: "Study of Blue Crystals", date: "4/13/2023", id: 1 },
    { name: "Mojtaba Javid", title: "Brainwave Communication Study", date: "4/11/2023", image: "uw-logo.png", id: 2 },
]; // Mock data for proposals

export function ProposalList() {
    return (
        <Container className="proposal-container"> {/* Container for the list of proposals */}
            <h2>Proposals</h2> {/* Title for the list */}
            {proposalData.map((proposal) => {
                return <ProposalItem key={proposal.id} name={proposal.name} title={proposal.title} date={proposal.date} image={proposal.image} />;
            })}
        </Container>
    );
}

interface proposalItemInterface {
    name: string;
    title: string;
    date: string;
    image?: string; // Optional image property
}

function ProposalItem({ name, title, date, image }: proposalItemInterface) {
    return (
        <>
            <div className="proposal-info"> {/* Container for individual proposal details */}
                <div className="proposals-left">
                    <Image src={image ? image : "/_next/static/media/profile.420b852d.svg"} alt="Profile Picture" width={54} height={54} className="profile-picture" />
                    {/* Display the image or a default profile picture */}
                    <div>
                        <h6>{name}</h6> {/* Display the name */}
                        <p>
                            {title} {date} {/* Display the title and date */}
                        </p>
                    </div>
                </div>
                <div className="proposals-right">
                    <Button>View Proposal</Button> {/* Button to view the proposal */}
                    <Button>Review Profile</Button> {/* Button to review the profile */}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
                {/* SVG line for visual separation */}
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
            </svg>
        </>
    );
}

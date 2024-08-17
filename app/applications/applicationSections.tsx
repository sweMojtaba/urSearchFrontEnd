// Importing necessary components and modules for UI and functionality
import { Button } from "@/client-wrappers/bootstrap"; // Importing the Button component from a custom Bootstrap wrapper
import { JobCard, JobResultCard } from "@/components/cards-and-items/cards"; // Importing custom JobCard and JobResultCard components from a specific directory
import { SearchBarWithAdvancedFilters } from "@/components/functionalities/filters"; // Importing a custom SearchBar with advanced filter functionalities
import { Container, Col, Row } from "@/client-wrappers/bootstrap"; // Importing Bootstrap layout components (Container, Col, Row) from a custom wrapper
import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading

// Function component that renders a search bar with various filter buttons
export function SearchBar() {
    return (
        <div>
            <input 
                className="search-field" 
                placeholder="&#x1F50E;&#xFE0E; SEARCH APPLICATIONS..."
            /> 
            {/* Input field for searching, with a placeholder containing a search icon */}
            <div className="option-list">
                {/* Container for the filter buttons */}
                <Button>Sigma Only</Button> {/* Button for filtering Sigma-only applications */}
                <Button>Paid</Button> {/* Button for filtering paid applications */}
                <Button>Remote</Button> {/* Button for filtering remote applications */}
                <Button>Accepted</Button> {/* Button for filtering accepted applications */}
                <Button>Rejected</Button> {/* Button for filtering rejected applications */}
                <Button>Interview</Button> {/* Button for filtering interview-scheduled applications */}
            </div>
        </div>
    );
}

// TEMPORARY TYPE FOR NON-HYDRATION
type StatusJob = {
    company: string, 
    position: string, 
    date: string,
    status: string,
    sigma: boolean,
    saved?: boolean // Optional field indicating if the job is saved
};

// Sample data array for job statuses, using the StatusJob type
const statusData: StatusJob[] = [
    {
        company: "Ricke Lab", 
        position: "Research Assistant", 
        date: "4/13/2023", 
        status: "Under Review",
        sigma: true, // Indicates that the job is Sigma-affiliated
    }, 
    {
        company: "Happy Lab", 
        position: "Lab Technician", 
        date: "4/13/2023", 
        status: "Interview Extended",
        sigma: true
    }, 
    {
        company: "AI Club", 
        position: "Workshop Coordinator", 
        date: "1/23/2022", 
        status: "Accepted",
        sigma: false
    }, 
    {
        company: "Telesec Labs", 
        position: "Data Analyst", 
        date: "4/13/2023", 
        status: "Rejected",
        sigma: true
    }
];

// Function component that renders a board displaying the status of various job applications
export function StatusBoard() {
    // Mapping over the statusData array to create a list of job status elements
    const displayList = statusData.map((job, i) => 
        <div key={i} className="status-job">
            <div style={{ textAlign: "left" }}>
                {/* Displaying company and position information aligned to the left */}
                <div>{job.company.toUpperCase() + (job.sigma ? "()" : "")}</div>
                {/* Displaying the company name in uppercase; adding () if the job is Sigma-affiliated */}
                <div>{job.position.toUpperCase()}</div> {/* Displaying the position name in uppercase */}
            </div>
            <div style={{ textAlign: "right" }}>
                {/* Displaying date and status information aligned to the right */}
                <div>{job.date}</div> {/* Displaying the date of the job status */}
                <div>{job.status.toUpperCase()}</div> {/* Displaying the status in uppercase */}
            </div>
        </div>
    );

    return (
        <div className="status-board">
            <h2>Application Status</h2> {/* Header for the status board */}
            {displayList} {/* Rendering the list of job statuses */}
        </div>
    );
}

// TEMPORARY TYPE FOR NON-HYDRATION
type MoreOpportunitiesJob = {
    company: string, 
    location: string,
    position: string, 
    affiliation: string, 
    type: string, 
    description: string,
    saved: boolean, 
    sigma: boolean
};

// Sample data array for more opportunities, using the MoreOpportunitiesJob type
const moreOpportunitiesData: MoreOpportunitiesJob[] = [
    {
        company: "ResNet Labs", 
        location: "Machine Learning Lab", 
        affiliation: "University of Wisconsin - Madison", 
        position: "Research Assistant",
        type: "Research Opportunity", 
        description: "AI is taking over the modern world, and we are a part of it. ResNet Labs have been a part of leading research in AI and Machine Learning for over 3 decades",
        saved: true, 
        sigma: false
    }, 
    {
        company: "TechSec", 
        location: "Software Security Lab", 
        affiliation: "University of Wisconsin - Madison", 
        position: "Research Assistant",
        type: "Internship", 
        description: "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.",
        saved: false, 
        sigma: true
    }, 
    {
        company: "BioLife Lab", 
        location: "Biochemisty Lab", 
        affiliation: "University of Wisconsin - Madison", 
        position: "Research Assistant",
        type: "Research Assistance", 
        description: "Biochemistry is not all finals with a class average of F, or memorizing 20 pages of formulas. Get experienced through our micro-molecular genome study, and research cancer.",
        saved: true, 
        sigma: true
    }
];

// Function component that renders a list of similar job opportunities
export function SimilarOpportunities() {
    // Mapping over the moreOpportunitiesData array to create a list of job opportunities
    const displayList = moreOpportunitiesData.map((job, i) =>
        <div key={i} className="more-opportunity">
            <div style={{ fontFamily: "Cabin", fontStyle: "italic", fontSize: "30px" }}>{job.company}</div> {/* Displaying the company name with specific styling */}
            <div style={{ fontSize: "8px" }}>{job.position.toUpperCase()}</div> {/* Displaying the position name in uppercase with small font size */}
            <div style={{ fontSize: "9px" }}>{job.affiliation.toUpperCase()}</div> {/* Displaying the affiliation in uppercase with small font size */}
            <div style={{ fontSize: "11px" }}>{job.type.toUpperCase()}</div> {/* Displaying the job type in uppercase with medium font size */}
            <div style={{ fontSize: "14px" }}>DESCRIPTION</div> {/* Label for the job description */}
            <div style={{ fontSize: "11px" }}>{job.description.toUpperCase()}</div> {/* Displaying the job description in uppercase with medium font size */}
            <Button>See More</Button> {/* Button to see more details about the opportunity */}
        </div>
    );

    return (
        <div className="more-opportunity-board">
            <h2>Similar Opportunities</h2> {/* Header for the similar opportunities board */}
            {displayList} {/* Rendering the list of similar job opportunities */}
        </div>
    );
}

// Function component that renders a list of similar opportunities using JobCard components
export function SimilarOpportunity() {
    return (
        <div className="more-opportunity-board">
            <h2>Similar Opportunities</h2> {/* Header for the similar opportunities board */}
            <Col>
                {moreOpportunitiesData.map((card, index) => (
                    <JobCard 
                        key={index} 
                        company={card.company} 
                        location={card.location} 
                        sigma={card.sigma} 
                        affiliation={card.affiliation} 
                        typeOfPosition={card.position} 
                        description={card.description} 
                        bookmarked={card.saved} 
                    /> // Rendering a JobCard component for each opportunity
                ))}
            </Col>
        </div>
    );
}

// Function component that renders a list of job status cards using Bootstrap Row and Col components
export function JobStatusCards() {
    // Mapping over the statusData array to create a list of job status cards
    const displayList = statusData.map((card, i) => 
        <Row key={i} className="job-results-card">
            <Col className="card-row">
                <Image 
                    src={"/uw-logo.png"} 
                    alt="UW Madison Logo" 
                    width={60} 
                    height={60} 
                    className="job-results-photo" 
                /> {/* Rendering an image with the UW Madison logo */}
                <Col>
                    <h5>
                        <i>{card.company.toUpperCase()}</i> 
                        {card.sigma && (
                            <Image 
                                src={"/sigma.png"} 
                                alt="Sigma" 
                                width={24} 
                                height={24} 
                                className="sigma-img" 
                            /> // Conditionally rendering a Sigma icon if the job is Sigma-affiliated
                        )}
                    </h5>
                    <h4><i>{card.position}</i></h4> {/* Displaying the job position */}
                </Col>
            </Col>
            <Col lg={5} className="job-results-end">
                <Col>
                    <p>{card.date}</p> {/* Displaying the date of the job status */}
                    <h3><i>{card.status.toUpperCase()}</i></h3> {/* Displaying the job status in uppercase */}
                </Col>
            </Col>
        </Row>
    );
    
    return (
        <div className="status-board">
            <h2>Application Status</h2> {/* Header for the status board */}
            {displayList} {/* Rendering the list of job status cards */}
        </div>
    );
}

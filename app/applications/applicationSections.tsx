import { Button } from "@/client-wrappers/bootstrap"

export function SearchBar() {
    return <div>
        <input className="search-field" placeholder="&#x1F50E;&#xFE0E; SEARCH APPLICATIONS..."></input>
        <div className="option-list">
            <Button>Sigma Only</Button>
            <Button>Paid</Button>
            <Button>Pemote</Button>
            <Button>Accepted</Button>
            <Button>Rejected</Button>
            <Button>Interview</Button>
        </div>
    </div>
}

const statusData = [
    {
        company: "Ricke Lab", 
        position: "Research Assistant", 
        date: "4/13/2023", 
        status: "Under Review",
        sigma: true
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
        status: "Accepted",
        sigma: true
    }
];

export function StatusBoard() {

    const displayList = statusData.map((job) => 
    <div className="status-job">
        <div style={{textAlign: "left"}}>
            <div>{job.company.toUpperCase() + (job.sigma ? "()" : "")}</div>
            <div>{job.position.toUpperCase()}</div>
        </div>
        <div style={{textAlign: "right"}}>
            <div>{job.date}</div>
            <div>{job.status.toUpperCase()}</div>
        </div>
    </div>
    );

    return <div className="status-board">
        <h2>Application Status</h2>
        {displayList}
    </div>
}

const moreOpportunitiesData = [
    {
        company: "ResNet Labs", 
        position: "Machine Learning Lab", 
        affiliation: "University of Wisconsin - Madison", 
        type: "Research Opportunity", 
        description: "AI is taking over the modern world, and we are a part of it. ResNet Labs have been a part of leading research in AI and Machine Learning for over 3 decades",
        saved: true, 
        sigma: false
    }, 
    {
        company: "TechSec", 
        position: "Software Security Lab", 
        affiliation: "University of Wisconsin - Madison", 
        type: "Internship", 
        description: "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.",
        saved: false, 
        sigma: true
    }, 
    {
        company: "BioLife Lab", 
        position: "Biochemisty Lab", 
        affiliation: "University of Wisconsin - Madison", 
        type: "Research Assistance", 
        description: "Biochemistry is not all finals with a class average of F, or memorizing 20 pages of formulas. Get experienced through our micro-molecular genome study, and research cancer.",
        saved: true, 
        sigma: true
    }
]

export function SimilarOpportunities() {
    const displayList = moreOpportunitiesData.map((job) =>
    <div className="more-opportunity">
        <div style={{fontFamily: "Cabin", fontStyle: "italic", fontSize: "30px"}}>{job.company}</div>
        <div style={{fontSize: "8px"}}>{job.position.toUpperCase()}</div>
        <div style={{fontSize: "9px"}}>{job.affiliation.toUpperCase()}</div>
        <div style={{fontSize: "11px"}}>{job.type.toUpperCase()}</div>
        <div style={{fontSize: "14px"}}>DESCRIPTION</div>
        <div style={{fontSize: "11px"}}>{job.description.toUpperCase()}</div>
        <Button>See More</Button>
    </div>
    );

    return (<div className="more-opportunity-board">
        <h2>Similar Opportunities</h2>
        {displayList}
    </div>
    )
}
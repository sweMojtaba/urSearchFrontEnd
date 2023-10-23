import {SearchBar, StatusBoard, SimilarOpportunities, SimilarOpportunity, JobStatusCards} from './applicationSections'

export default function Applications() {
    return <div>
        <SearchBar />
        <div className="job-board" style={{marginTop: "20px"}}>
            <JobStatusCards />
            <SimilarOpportunity />
        </div>
    </div>
};
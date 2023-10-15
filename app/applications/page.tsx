import {SearchBar, StatusBoard, SimilarOpportunities} from './applicationSections'

export default function Applications() {
    return <div>
        <SearchBar />
        <div className="job-board">
            <StatusBoard />
            <SimilarOpportunities />
        </div>
    </div>
};
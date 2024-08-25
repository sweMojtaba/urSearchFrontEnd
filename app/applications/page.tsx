// Importing components from the 'applicationSections' file, which are used to build the application's UI
import { SearchBar, StatusBoard, SimilarOpportunities, SimilarOpportunity, JobStatusCards } from './applicationSections';

// Function component that defines the main layout for the Applications page
export default function Applications() {
    return (
        <div>
            <SearchBar />
            {/* Rendering the SearchBar component at the top of the page, likely for filtering or searching through job applications */}
            
            <div className="job-board" style={{ marginTop: "20px" }}>
                {/* Wrapper div with a class of 'job-board', and applying a margin-top style to add space above it */}
                
                <JobStatusCards />
                {/* Rendering the JobStatusCards component, which probably displays the status of various job applications in a card format */}
                
                <SimilarOpportunity />
                {/* Rendering the SimilarOpportunity component, which likely shows opportunities similar to the ones the user has applied for */}
            </div>
        </div>
    );
};

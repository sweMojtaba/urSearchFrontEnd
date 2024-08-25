"use client";

import { JobCard, JobResultCard } from "@/components/cards-and-items/cards";
import { SearchBarWithAdvancedFilters } from "@/components/functionalities/filters";
import { Container } from "@/client-wrappers/bootstrap";
import "./search-for-jobs.scss"; // Import the stylesheet for search-for-jobs

// Sample data for recommended job cards
const reccomendedCardData = [
  {
    company: "Ricke Lab",
    location: "Urology Lab",
    sigma: true,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Research Opportunity",
    description:
      "This research program encompasses basic and translational sciences through experiments and work that is ought to advance the field.",
    bookmarked: true,
  },
  {
    company: "ResNet Labs",
    location: "Machine Learning Lab",
    sigma: false,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Research Opportunity",
    description:
      "AI is taking over the modern world, and we are a part of it. Resnet labs have been a part of leading research in AI and Machine learning for over 3 decades.",
    bookmarked: true,
  },
  {
    company: "TechSec",
    location: "Software Security Lab",
    sigma: true,
    affiliation: "University of Wisconsin - Madison",
    typeOfPosition: "Internship",
    description:
      "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.",
    bookmarked: false,
  }
];

// Main component for displaying job opportunities
export default function Opportunities() {
    return (
        <Container className="medium-content">
            {/* Render the search bar with advanced filters */}
            <SearchBarWithAdvancedFilters />
            <div id="jobs-container">
                <div id="results-container">
                    <h2 id="title">Results:</h2>
                    {/* Render a list of job result cards */}
                    {Array.from({ length: 12 }, (_, index) => (
                        <JobResultCard key={index} />
                    ))}
                </div>
                <div id="top-matches-container">
                    <h2 id="top-matches">Top Matches:</h2>
                    <div>
                      {/* Render recommended job cards */}
                      {reccomendedCardData.map((card, index) => (
                          <JobCard 
                              key={index} 
                              company={card.company} 
                              location={card.location} 
                              sigma={card.sigma} 
                              affiliation={card.affiliation} 
                              typeOfPosition={card.typeOfPosition} 
                              description={card.description} 
                              bookmarked={card.bookmarked} 
                          />
                      ))}
                    </div>
                </div>
            </div>
            <div id="footer">
              <h1 id="exclamation">!</h1>
              {/* Display a message about “Propose Idea” listings */}
              <h2>
                “Propose Idea” listings are an opportunity for you to share your Research or Innovation with a recruiting team and if accepted, use their resources and collaborate with them to bring your idea to Life.
              </h2>
            </div>
        </Container>
    );
}

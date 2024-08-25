//TODO: needs hydration

import { Container, Button } from '@/client-wrappers/bootstrap';
import Image from "next/image";
import "./job.scss"; // Import the stylesheet for the Job page

// Main component for displaying job details
export default function Job() {
    return (
        <Container className="medium-container">
            {/* Banner image for the lab */}
            <Image src={"/RickeLab.png"} alt="Ricke Lab Image" width={1920} height={300} id="lab-image" />
            
            <div id="job-container">
                {/* Title and details section */}
                <div id="title-container-relative">
                    <div id="title-container-absolute">
                        <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={60} height={60} id="uw-logo" />
                        <h1 id="title">Ricke Lab</h1>
                        <div id="title-description">
                            <h3 id="title-description-text">Research Assistant</h3>
                            <div id="title-rating">
                                {/* Display star rating */}
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star.svg" />
                                <img src="/star-60.svg" />
                                <p>4.6</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Job description, qualifications, and other details */}
                <div id="description-container">
                    <div>
                        <div>
                            <h4>Description</h4>
                            <p>
                                Dr. Ricke&apos;s research program encompasses basic and translational sciences as it pertains to the pathogenesis of the lower urinary tract. The synergy of both sciences allows his lab to explore both molecular underlying mechanisms associated with disease progression, but also to pre-clinically treat the same pathways, which may lead to the therapies of tomorrow.
                            </p>
                        </div>
                        <div>
                            <h4>Qualifications</h4>
                            <ul>
                                <li>Animal Model Analysis Experience</li>
                                <li>Background in Biology Related Area</li>
                                <li>Currently Enrolled in and Pursuing a BS or Higher in any U.S. Institution</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Professional Training</li>
                                <li>Sign Up Bonus</li>
                                <li>High Fellowship Rate</li>
                                <li>Quick Apply Available</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Location</h4>
                            <p>
                                Department of Urology Third Floor 1685 Highland Avenue Madison, WI 53705
                            </p>
                        </div>
                        <div>
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Animal Model Data Analysis</li>
                                <li>Review Analysis</li>
                                <li>CR-C7 Chartting</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Pay Range</h4>
                            <ul>
                                <li>$12 - $21/hr</li>
                                <li>Can be done for credit</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Footer with action buttons */}
                <div id="footer">
                    <div id="footer-infobox">
                        {/* Action buttons */}
                        <Button className="job-button">View Profile</Button>
                        <Button className="job-button">Apply</Button>
                        {/* Bookmark icon based on condition */}
                        <Image src={true ? "/bookmark-filled-black.png" : "/bookmark-empty-black.png"} alt="Bookmark Status" width={36} height={36} className="bookmark-icon" />
                    </div>
                    <p>84% Match</p>
                </div>
            </div>
            
            {/* Navigation buttons for job listings */}
            <div id="job-buttons">
                <div>
                    <h2>&lt; Back to List</h2>
                </div>
                <div>
                    <h2>Next Job &gt;</h2>
                </div>
            </div>
        </Container>
    );
}

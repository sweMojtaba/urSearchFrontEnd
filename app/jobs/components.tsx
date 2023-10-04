"use client";

import { Button, Col, Row } from "@/client-wrappers/bootstrap";
import "./jobs.scss";
import Image from "next/image";

function SearchCriteria({ title, placeholder }: { title: string; placeholder: string }) {
    return (
        <div className="margin-top">
            <h3 className="form-title">{title}</h3>
            <input type="text" placeholder={placeholder} className="filter-search-options" />
            <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="4" viewBox="0 0 516 4" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.714372 0.000344038H515.142V3.99988H0.714372V0.000344038Z" fill="black" fill-opacity="0.8" />
            </svg>
        </div>
    );
}

function FilterSearch() {
    return (
        <>
            <Row>
                <form className="form-control black">
                    <input type="search" placeholder="Key Words..." className="form-search-input black" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" className="pr">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.1172 9.55859C16.1172 13.1808 13.1808 16.1172 9.55859 16.1172C5.93638 16.1172 3 13.1808 3 9.55859C3 5.93638 5.93638 3 9.55859 3C13.1808 3 16.1172 5.93638 16.1172 9.55859ZM12.5549 18.6381C11.6125 18.949 10.6052 19.1172 9.55859 19.1172C4.27953 19.1172 0 14.8377 0 9.55859C0 4.27953 4.27953 0 9.55859 0C14.8377 0 19.1172 4.27953 19.1172 9.55859C19.1172 12.7157 17.5866 15.5154 15.2269 17.2559L19.1173 23.5779L16.5624 25.1502L12.5549 18.6381Z"
                            fill="black"
                        />
                    </svg>
                </form>
            </Row>
            <Row>
                <Button className="sigma sigma-black">
                    Sigma Only
                    <Image src={"/sigma.png"} alt="Sigma" width={32} height={32} className="sigma-img" />
                </Button>
                <Button className="black">Paid</Button>
                <Button className="black">Remote</Button>
                <Button className="black">UW-Madison</Button>
                <Button className="black">Research</Button>
                <Button className="black">Internships</Button>
            </Row>
        </>
    );
}

export function AdvancedFiltersPopUp({ advancedFilterIsVisible }: { advancedFilterIsVisible: boolean }) {
    return (
        <Col xs={12} className={`popup-${advancedFilterIsVisible ? "visible" : "hidden"}`}>
            <div className="advanced-filters-container">
                <h2>Advanced Filters:</h2>
                <FilterSearch />
                <Row>
                    <Col lg={6}>
                        <SearchCriteria title="Field" placeholder="Technology" />
                        <h3 className="form-title others">Experience lvl:</h3>
                        <div className="checkbox-container">
                            <div className="checkbox-row">
                                <input id="hs" type="radio" name="education" />
                                <label htmlFor="hs">In High-school</label>
                            </div>
                            <div className="checkbox-row">
                                <input id="bachelors" type="radio" name="education" />
                                <label htmlFor="bachelors">Pursuing bachelors degree</label>
                            </div>
                            <div className="checkbox-row">
                                <input id="masters" type="radio" name="education" />
                                <label htmlFor="masters">Pursuing Masters degree</label>
                            </div>
                            <div className="checkbox-row">
                                <input id="beyond-masters" type="radio" name="education" />
                                <label htmlFor="beyond-masters">Beyond Masters</label>
                            </div>
                        </div>
                        <h3 className="form-title others">Sorting:</h3>
                        <div className="checkbox-container">
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>Only show highest reviewed (3+)</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>only show school affiliated</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>sort highest-lowest rating</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>sort based on Best match</label>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <SearchCriteria title="Major" placeholder="Pre-Dental" />
                        <SearchCriteria title="Location" placeholder="Madison-WI" />
                        <h3 className="form-title others">Others:</h3>
                        <div className="checkbox-container">
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>I need visa/work sponsorship</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>I have limited work hours</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>Flexible schedule</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>I Have an Idea for a research or innovation!</label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="footer">
                    <div className="footer-buttons">
                        <Button className="black">See Results</Button>
                        <Button className="black">
                            <Image src="/black-star.png" alt="Black Star" width={30} height={22} />
                            Save Filters
                        </Button>
                    </div>
                    <p className="black">XXX Opportunities</p>
                </div>
            </div>
        </Col>
    );
}

const filters = [
    { title: "Internships", date: "4/10/23", time: "10:10AM" },
    { title: "Research", date: "4/10/23", time: "10:50AM" },
    { title: "UW-Madison", date: "4/1/23", time: "01:10AM" },
    { title: "CS", date: "2/10/23", time: "04:50PM" },
];

interface FilterProps {
    title: string;
    date: string;
    time: string;
}

function Filter({ title, date, time }: FilterProps) {
    return (
        <div className="filter-info">
            <Image src="/star-icon.png" alt="Star" width={52} height={40} className="star-icon" />
            <div className="center">
                <h6>{title}</h6>
                <div className="filter-time">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
        </div>
    );
}

export function SavedFilters() {
    return (
        <Col xs={3}>
            <div className="saved-filters-container">
                <h2>Saved Filters</h2>
                <div className="saved-filters">
                    {filters.map((filter, index) => {
                        return <Filter key={index} title={filter.title} date={filter.date} time={filter.time} />;
                    })}
                </div>
            </div>
        </Col>
    );
}

// Static data for now
const jobs = [
    { company: "Ricke Lab", location: "Madison, WI", sigma: true, typeOfPosition: "Research Opportunity" },
    { company: "ResNet Labs", location: "Madison, WI", sigma: false, typeOfPosition: "Research Opportunity" },
    { company: "TechSec", location: "Madison, WI", sigma: true, typeOfPosition: "Internship" },
];

interface JobProps {
    company: string;
    location: string;
    sigma: boolean;
    typeOfPosition: string;
}

function Job({ company, location, sigma, typeOfPosition }: JobProps) {
    return (
        <>
            <div className="job-info">
                <div className="jobs-left">
                    <Image src={sigma ? "/bookmark-sigma.png" : "/bookmark-filled.png"} alt="Bookmark" width={54} height={54} className="bookmark-icon" />
                    <div>
                        <h6>
                            {company}
                            {sigma && <Image src={"/sigma.png"} alt="Sigma" width={20} height={20} className="sigma-img" />}
                        </h6>
                        <p>{typeOfPosition}</p>
                    </div>
                </div>
                <div className="jobs-right">
                    <p>{location}</p>
                    <Button className={sigma ? "sigma-button" : "small-button"}>Details</Button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fill-opacity="0.1" />
            </svg>
        </>
    );
}

export function SavedJobs() {
    return (
        <Col xs={9}>
            <div className="saved-jobs-container">
                <h2>Saved Jobs</h2>
                <div className="saved-jobs">
                    {jobs.map((job, index) => {
                        return <Job key={index} company={job.company} location={job.location} sigma={job.sigma} typeOfPosition={job.typeOfPosition} />;
                    })}
                </div>
            </div>
        </Col>
    );
}

interface CardProps {
    company: string;
    location: string;
    sigma: boolean;
    affiliation: string;
    typeOfPosition: string;
    description: string;
    bookmarked: boolean;
}

export function ReccomendedCard({ company, location, sigma, affiliation, typeOfPosition, description, bookmarked }: CardProps) {
    return (
        <Col xl={3} lg={4} md={6} sm={12}>
            <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={96} height={96} className="uw-logo" />
            <div className="card">
                <div>
                    <div className="right-aligned">
                        <div className="card-row">
                            <h3>{company}</h3>
                            {sigma && <Image src={"/sigma.png"} alt="Sigma" width={24} height={24} className="sigma-img" />}
                        </div>
                        <h5>{location}</h5>
                    </div>
                    <h4 className="affiliation">{affiliation}</h4>
                    <h4 className="position">{typeOfPosition}</h4>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="card-row">
                    <Button>See More</Button>
                    <Image src={bookmarked ? "/bookmark-filled.png" : "/bookmark-empty.png"} alt="Bookmark Status" width={36} height={36} className="bookmark-icon" />
                </div>
            </div>
        </Col>
    );
}

interface SearchBarProps {
    advancedFilterStatus: () => void;
}

export function SearchBar({ advancedFilterStatus }: SearchBarProps) {
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
                    <input type="search" placeholder="Search Jobs..." className="form-search-input" />
                    <svg onClick={advancedFilterStatus} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="pl">
                        <path
                            d="M20.6228 15C19.3999 15.002 18.211 15.4023 17.2358 16.1404C16.2606 16.8785 15.5522 17.9142 15.2177 19.0909H3.75459V22.1591H15.2177C15.5031 23.166 16.0636 24.0733 16.8362 24.7791C17.6088 25.4848 18.5629 25.9609 19.5913 26.1536C20.6196 26.3466 21.6812 26.2485 22.6569 25.8707C23.6325 25.4931 24.4836 24.8503 25.1141 24.0152C25.7445 23.1801 26.1296 22.1854 26.226 21.1433C26.3224 20.1009 26.1263 19.0526 25.6596 18.1159C25.1929 17.1791 24.4742 16.3912 23.5845 15.8408C22.6946 15.2903 21.6688 14.9992 20.6228 15ZM20.6228 23.1818C20.1173 23.1818 19.623 23.0319 19.2028 22.7509C18.7824 22.47 18.4549 22.0706 18.2615 21.6034C18.068 21.1363 18.0174 20.6222 18.116 20.1263C18.2147 19.6301 18.4581 19.1747 18.8154 18.8171C19.173 18.4595 19.6283 18.216 20.124 18.1173C20.6199 18.0187 21.1337 18.0693 21.6008 18.2628C22.0678 18.4563 22.467 18.7841 22.7477 19.2045C23.0286 19.6251 23.1784 20.1193 23.1784 20.625C23.1784 21.3032 22.9091 21.9534 22.4299 22.4329C21.9506 22.9125 21.3006 23.1818 20.6228 23.1818ZM14.7822 7.84092C14.4121 6.53472 13.5822 5.4065 12.4457 4.66446C11.3092 3.92243 9.94281 3.61666 8.5986 3.80358C7.25439 3.9905 6.02312 4.65749 5.13199 5.68148C4.24086 6.70546 3.75 8.01734 3.75 9.37503C3.75 10.7327 4.24086 12.0446 5.13199 13.0686C6.02312 14.0925 7.25439 14.7595 8.5986 14.9465C9.94281 15.1334 11.3092 14.8276 12.4457 14.0856C13.5822 13.3435 14.4121 12.2153 14.7822 10.9091H26.2453V7.84092H14.7822ZM9.37731 11.9318C8.87183 11.9318 8.37769 11.7819 7.95739 11.5009C7.53709 11.22 7.20951 10.8207 7.01608 10.3535C6.82264 9.88626 6.77203 9.37218 6.87064 8.8762C6.96924 8.38023 7.21268 7.92466 7.57011 7.56708C7.92754 7.2095 8.38292 6.96599 8.87869 6.86733C9.37448 6.76868 9.88834 6.81931 10.3553 7.01283C10.8224 7.20635 11.2215 7.53406 11.5024 7.95453C11.7832 8.375 11.9331 8.86932 11.9331 9.37503C11.9331 10.0531 11.6638 10.7035 11.1845 11.183C10.7052 11.6625 10.0551 11.9318 9.37731 11.9318Z"
                            fill="white"
                        />
                    </svg>
                </form>
            </Row>
            <Row>
                <Button className="sigma">
                    Sigma Only
                    <Image src={"/sigma.png"} alt="Sigma" width={32} height={32} className="sigma-img" />
                </Button>
                <Button>Paid</Button>
                <Button>Remote</Button>
                <Button>UW-Madison</Button>
                <Button>Research</Button>
                <Button>Internships</Button>
            </Row>
        </>
    );
}

"use client"; 
// This directive indicates that this file is intended to be used in a client-side environment. It may be used in frameworks that differentiate between client and server code, ensuring this file is processed on the client side.

import { useState } from "react"; 
// Importing the useState hook from React, which allows us to add state management to functional components.

import { Container, Row } from "@/client-wrappers/bootstrap"; 
// Importing Container and Row components from a custom bootstrap wrapper located in the specified path. These components likely help in structuring and styling the layout of the page.

import { SearchBar, ReccomendedCard, SavedJobs, SavedFilters, AdvancedFiltersPopUp } from "./components"; 
// Importing several components from a local file "components". These components are used to build different parts of the JobsPage, such as search functionality and filtering options.

import "./jobs.scss"; 
// Importing a stylesheet for this component. The styles defined in jobs.scss will be applied to elements in this component.

const reccomendedCardData = [ 
// Declaring a constant variable reccomendedCardData, which is an array of objects. This array holds static data for recommended job cards to be displayed on the page.
    { 
        company: "Ricke Lab", 
        location: "Urology Lab", 
        sigma: true, 
        affiliation: "University of Wisconsin - Madison", 
        typeOfPosition: "Research Opportunity", 
        description: "This research program encompasses basic and translational sciences through experiments and work that is ought to advance the field.", 
        bookmarked: true 
    }, 
    { 
        company: "ResNet Labs", 
        location: "Machine Learning Lab", 
        sigma: false, 
        affiliation: "University of Wisconsin - Madison", 
        typeOfPosition: "Research Opportunity", 
        description: "AI is taking over the modern world, and we are a part of it. Resnet labs have been a part of leading research in AI and Machine learning for over 3 decades.", 
        bookmarked: true 
    }, 
    { 
        company: "TechSec", 
        location: "Software Security Lab", 
        sigma: true, 
        affiliation: "University of Wisconsin - Madison", 
        typeOfPosition: "Internship", 
        description: "Commissioned by the federal government, our internship program provides top of the industry experience in software security, through private contracts with leading tech giants.", 
        bookmarked: false 
    }, 
    { 
        company: "BioLife Lab", 
        location: "Biochemistry Lab", 
        sigma: false, 
        affiliation: "University of Wisconsin - Madison", 
        typeOfPosition: "Research Assistance", 
        description: "Biochemistry is not all finals with a class average of F, or memorizing 20 pages of formulas. Get experienced through our micro-molecular genome study, and research cancer.", 
        bookmarked: true 
    }, 
];

export default function JobsPage() { 
// Defining and exporting a functional component named JobsPage. This is the main component for the page that displays job-related content.

    const [advancedFilterIsVisible, setadvancedFilterIsVisible] = useState(false); 
    // Declaring a state variable advancedFilterIsVisible with its setter function setadvancedFilterIsVisible. The state keeps track of whether the advanced filter popup is visible or not. Initialized to false.

    const advancedFilterStatus = () => { 
        setadvancedFilterIsVisible(true); 
        // Function to set the advancedFilterIsVisible state to true, indicating that the advanced filter popup should be displayed.
    };

    return (
        <Container> 
        // Render a Container component, which likely provides a responsive layout and styling for the content.

            <Row> 
            // Render a Row component, which is probably used to create a horizontal layout for its children.
            
                <AdvancedFiltersPopUp advancedFilterIsVisible={advancedFilterIsVisible} /> 
                // Render the AdvancedFiltersPopUp component and pass the current state of advancedFilterIsVisible as a prop to control its visibility.

            </Row>

            <SearchBar advancedFilterStatus={advancedFilterStatus} /> 
            // Render the SearchBar component and pass the advancedFilterStatus function as a prop. This allows the SearchBar to control the visibility of the advanced filter popup.

            <h2>Recommended...</h2> 
            // Render a heading for the section displaying recommended job opportunities.

            <Row> 
            // Render another Row component to hold the recommended job cards.

                {reccomendedCardData.map((card, index) => { 
                // Map over the reccomendedCardData array to generate a list of ReccomendedCard components for each item in the array.

                    return <ReccomendedCard key={index} company={card.company} location={card.location} sigma={card.sigma} affiliation={card.affiliation} typeOfPosition={card.typeOfPosition} description={card.description} bookmarked={card.bookmarked} />; 
                    // Render a ReccomendedCard component for each job, passing the relevant data as props. The index is used as a unique key for each card.
                })}
            </Row>

            <Row className="top-margin"> 
            // Render another Row component with a class name for additional styling (e.g., top margin).

                <SavedJobs /> 
                // Render the SavedJobs component, which likely displays a list of jobs that the user has saved.

                <SavedFilters /> 
                // Render the SavedFilters component, which likely displays a list of filters that the user has saved.

            </Row>

        </Container>
    ); 
}

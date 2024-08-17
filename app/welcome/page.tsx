"use client";

// Import necessary React hooks for state and effect management
import { useCallback, useContext, useEffect, useState } from "react";

// Import assets and utilities for slide buttons, images, and redirects
import SlideButton from "../../assets/item1.svg"; // Image used for the slide buttons
import { UserContext } from "../context"; // Context to access and manage user state
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState"; // Custom hook for user state-based redirects
import Link from "next/link"; // Next.js component for client-side navigation
import Slide1 from "./assets/slide1.png"; // Image for slide 1
import Slide2 from "./assets/slide2.png"; // Image for slide 2
import Slide3 from "./assets/slide3.png"; // Image for slide 3
import Slide4 from "./assets/slide4.png"; // Image for slide 4
import Go from "./assets/go.svg"; // Image for the 'go' button
import { Button, Container } from "react-bootstrap"; // Bootstrap components for layout and styling

import Image from "next/image"; // Next.js component for optimized images

// SlideButtons--------------------------------------------------------------

// Array of slide indices
const nums = [0, 1, 2, 3];

// Type definition for SlideButtons component props
type SlideButtonsProps = {
    activeIndex: number; // Index of the currently active slide
    goToSlides: Array<() => void>; // Array of functions to navigate to different slides
};

// SlideButtons component
function SlideButtons(props: SlideButtonsProps): JSX.Element[] {
    // State to manage active tags for slide buttons
    const [activeTags, setActiveTags] = useState(["", "", "", ""]);

    // Effect to update active tags when the activeIndex prop changes
    useEffect(() => {
        setActiveTags(() => {
            const newActiveTags = ["", "", "", ""];
            newActiveTags[props.activeIndex] = "active"; // Mark the active index as "active"
            return newActiveTags;
        });
    }, [props.activeIndex]);

    // Handler function for clicking a slide button
    const handleClick = (num: number) => {
        props.goToSlides[num - 1](); // Call the corresponding function to navigate to the slide
        console.log(`Just went to slide ${num + 1}`); // Log the slide change
    };

    // Render slide buttons with active styling based on the current index
    return nums.map((num) => {
        return (
            <a key={num} href={`#slide${num + 1}`}>
                <Image onClick={() => handleClick(num)} src={SlideButton} alt={"Go to slide " + (num + 1)} className={activeTags[num]} />
            </a>
        );
    });
}

// Slides--------------------------------------------------------------

// Slide data for lab users
const slidesInfoLab = [
    {
        img: Slide1, // Image for the slide
        slogan: "Find Researchers", // Slogan for the slide
        text: "Work with top labs and professors in your university!", // Description text for the slide
    },
    {
        img: Slide2,
        slogan: "Grow your team...",
        text: "Easiest way to find and recruit from the best",
    },
    {
        img: Slide3,
        slogan: "New opportunities await...",
        text: "Find those hidden jobs in your university;)",
    },
    {
        img: Slide4,
        slogan: "Work with the best...",
        text: "Easiest way to share lab or research positions",
    },
];

// Slide data for applicant users
const slidesInfoApplicant = [
    {
        img: Slide1,
        slogan: "Find Research positions...",
        text: "Work with top labs and professors in your university!",
    },
    {
        img: Slide2,
        slogan: "Grow your team...",
        text: "Easiest way to find and recruit from the best",
    },
    {
        img: Slide3,
        slogan: "New opportunities await...",
        text: "Find those hidden jobs in your university;)",
    },
    {
        img: Slide4,
        slogan: "Work with the best...",
        text: "Easiest way to share lab or research positions",
    },
];

// Slides component
function Slides(): JSX.Element {
    // State to manage the index of the currently active slide
    const [activeIndex, setActiveIndex] = useState(0);
    // Access user context to determine user state
    const { user, setUser } = useContext(UserContext);
    // Determine which set of slides to use based on user state
    const slidesInfo = user.state === 2 ? slidesInfoLab : slidesInfoApplicant;

    // Redirect function for individual users based on user state
    const redirectIndividual = useRedirectWithUserState(
        user.state,
        (userState) => userState === 1,
        RedirectNotes.LOGGED_IN,
        "/applicant-profile" // Redirect URL for individual users
    );
    // Redirect function for lab users based on user state
    const redirectLab = useRedirectWithUserState(
        user.state,
        (userState) => userState === 2,
        RedirectNotes.LOGGED_IN,
        "/lab/profile" // Redirect URL for lab users
    );

    // Effect to automatically cycle through slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const newIndex = (prev + 1) % 4; // Cycle to the next slide index, wrap around using modulus
                console.log(`New Index: ${newIndex}`); // Log the new index
                return newIndex;
            });
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Effect to redirect based on user state when the component mounts or user state changes
    useEffect(() => {
        if (user.state === 1) {
            redirectIndividual(); // Redirect individual users
        } else if (user.state === 2) {
            redirectLab(); // Redirect lab users
        }
    }, [redirectIndividual, redirectLab, user]);

    // Functions to navigate to specific slides
    const goToSlide1 = useCallback(() => {
        setActiveIndex(0); // Set active index to 0 for slide 1
    }, []);
    const goToSlide2 = useCallback(() => {
        setActiveIndex(1); // Set active index to 1 for slide 2
    }, []);
    const goToSlide3 = useCallback(() => {
        setActiveIndex(2); // Set active index to 2 for slide 3
    }, []);
    const goToSlide4 = useCallback(() => {
        setActiveIndex(3); // Set active index to 3 for slide 4
    }, []);

    // Render the Slides component
    return (
        <div id="slide">
            <Container>
                <h2 className="heading">{slidesInfo[activeIndex].slogan}</h2>
                <p className="text" style={{ opacity: "0.5" }}>
                    {slidesInfo[activeIndex].text}
                </p>
                <div className="flex-box">
                    <Link href="/signup" className="button-link">
                        <Button variant="light" id="go">
                            <p>Start Searching</p>
                            <Image src={Go} alt="go to sign up" />
                        </Button>
                    </Link>
                    <div className="space-holder" />
                </div>
                <div id="slideButtons">
                    <SlideButtons activeIndex={activeIndex} goToSlides={[goToSlide1, goToSlide2, goToSlide3, goToSlide4]} />
                </div>
            </Container>
            <Image src={slidesInfo[activeIndex].img} alt="slide" className="fit-image" />
        </div>
    );
}

export default Slides; // Export the Slides component for use in other parts of the application

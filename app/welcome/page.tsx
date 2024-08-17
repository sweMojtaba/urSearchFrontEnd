"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import SlideButton from "../../assets/item1.svg";
import { UserContext } from "../context";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import Link from "next/link";
import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";
import Slide3 from "./assets/slide3.png";
import Slide4 from "./assets/slide4.png";
import Go from "./assets/go.svg";
import { Button, Container } from "react-bootstrap";
import Image from "next/image";

// SlideButtons--------------------------------------------------------------

// Props type for SlideButtons component
type SlideButtonsProps = {
    activeIndex: number;
    goToSlides: Array<() => void>; // Array of functions to navigate to different slides
};

// Component for rendering slide buttons with active state handling
function SlideButtons(props: SlideButtonsProps): JSX.Element[] {
    const [activeTags, setActiveTags] = useState(["", "", "", ""]);

    // Update active tags when activeIndex changes
    useEffect(() => {
        setActiveTags(() => {
            const newActiveTags = ["", "", "", ""];
            newActiveTags[props.activeIndex] = "active";
            return newActiveTags;
        });
    }, [props.activeIndex]);

    // Handle click to navigate to the corresponding slide
    const handleClick = (num: number) => {
        props.goToSlides[num - 1]();
        console.log(`Just went to slide ${num + 1}`);
    };

    // Render buttons for each slide
    return nums.map((num) => {
        return (
            <a key={num} href={`#slide${num + 1}`}>
                <Image onClick={() => handleClick(num)} src={SlideButton} alt={"Go to slide " + (num + 1)} className={activeTags[num]} />
            </a>
        );
    });
}

// Slides--------------------------------------------------------------

const slidesInfoLab = [
    {
        img: Slide1,
        slogan: "Find Researchers",
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

// Main Slides component
function Slides(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);
    const { user } = useContext(UserContext); // Access user context
    const slidesInfo = user.state === 2 ? slidesInfoLab : slidesInfoApplicant;

    // Redirect hooks based on user state
    const redirectIndividual = useRedirectWithUserState(
        user.state,
        (userState) => userState === 1,
        RedirectNotes.LOGGED_IN,
        "/applicant-profile" // Placeholder for redirect URL
    );
    const redirectLab = useRedirectWithUserState(
        user.state,
        (userState) => userState === 2,
        RedirectNotes.LOGGED_IN,
        "/lab/profile" // Placeholder for redirect URL
    );

    // Automatic slide transition every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const newIndex = (prev + 1) % 4;
                console.log(`New Index: ${newIndex}`);
                return newIndex;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Redirect based on user state
    useEffect(() => {
        if (user.state === 1) {
            redirectIndividual();
        } else if (user.state === 2) {
            redirectLab();
        }
    }, [redirectIndividual, redirectLab, user]);

    // Navigation functions for slides
    const goToSlide1 = useCallback(() => {
        setActiveIndex(0);
    }, []);
    const goToSlide2 = useCallback(() => {
        setActiveIndex(1);
    }, []);
    const goToSlide3 = useCallback(() => {
        setActiveIndex(2);
    }, []);
    const goToSlide4 = useCallback(() => {
        setActiveIndex(3);
    }, []);

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

export default Slides;

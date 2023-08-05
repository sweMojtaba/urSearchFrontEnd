"use client"

import { useCallback, useContext, useEffect, useState } from "react";
import SlideButton from "../../assets-common/item1.svg";
import { UserContext } from "../context";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import Link from "next/link";
import Slide1 from "./assets/slide1.png"
import Slide2 from "./assets/slide2.png"
import Slide3 from "./assets/slide3.png"
import Slide4 from "./assets/slide4.png"
import Go from "./assets/go.svg"
import { Button, Container } from "react-bootstrap";

import Image from "next/image";

// SlideButtons--------------------------------------------------------------

const nums = [0, 1, 2, 3];

type SlideButtonsProps = {
    activeIndex: number,
    goToSlides: Array<() => void>
}

function SlideButtons(props: SlideButtonsProps): JSX.Element[] {

    const [activeTags, setActiveTags] = useState(["", "", "", ""]);

    useEffect(() => {
        setActiveTags(() => {
            const newActiveTags = ["", "", "", ""];
            newActiveTags[props.activeIndex] = "active";
            return newActiveTags;
        })
    }, [props.activeIndex])

    // valid inputs: 1, 2, 3, 4
    const handleClick = (num: number) => {
        props.goToSlides[num - 1]();
        console.log(`Just went to slide ${num + 1}`);
    }

    return nums.map((num) => {
        return <a
            key={num}
            href={`#slide${num + 1}`}
        >
            <Image
                onClick={() => handleClick(num)}
                src={SlideButton}
                alt={"Go to slide " + (num + 1)}
                className={activeTags[num]}
            />
        </a>
    })
}

// Slides--------------------------------------------------------------

const slidesInfo = [
    {
        img: Slide1,
        slogan: "Find research positions...",
        text: "Work with top labs and professors in your university!"
    },
    {
        img: Slide2,
        slogan: "Grow your team...",
        text: "Easiest way to find and recruit from the best"
    },
    {
        img: Slide3,
        slogan: "New opportunities await...",
        text: "Find hidden jobs in your university;)"
    },
    {
        img: Slide4,
        slogan: "Work with the best...",
        text: "Easiest way to share lab or research positions"
    }
]

function Slides(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);
    const { user, setUser } = useContext(UserContext);

    const redirectIndividual = useRedirectWithUserState(
        user.state,
        userState => userState === 1,
        RedirectNotes.LOGGED_IN,
        "/individual/profile" // To-do
    )
    const redirectLab = useRedirectWithUserState(
        user.state,
        userState => userState === 2,
        RedirectNotes.LOGGED_IN,
        "/lab/profile" // To-do
    )


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

    useEffect(() => {
        if (user.state === 1) {
            redirectIndividual();
        } else if (user.state === 2) {
            redirectLab();
        }
    }, [redirectIndividual, redirectLab, user])

    // navigate

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

    return <div id="slide">
        <Container>
            <h2 className="slogan">{slidesInfo[activeIndex].slogan}</h2>
            <p className="text">{slidesInfo[activeIndex].text}</p>
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
                <SlideButtons
                    activeIndex={activeIndex}
                    goToSlides={[goToSlide1, goToSlide2, goToSlide3, goToSlide4]}
                />
            </div>
        </Container>
        <Image src={slidesInfo[activeIndex].img} alt="slide" className="fit-image"/>
    </div>
}

export default Slides;
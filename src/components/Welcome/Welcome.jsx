import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Slide from "./Slide";
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"

function Welcome() {
    const [slidesInfo, setSlidesInfo] = useState([
        {
            img: slide1,
            slogan: "Find research positions...",
            text: "Work with top labs and professors in your university!"
        },
        {
            img: slide2,
            slogan: "Grow your team...",
            text: "Easiest way to find and recruit from the best"
        },
        {
            img: slide3,
            slogan: "New opportunities await...",
            text: "Find hidden jobs in your university;)"
        },
        {
            img: slide4,
            slogan: "Work with the best...",
            text: "Easiest way to share lab or research positions"
        }
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const newIndex = (prev+1) % 4;
                console.log(`New Index: ${newIndex}`);
                return newIndex;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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

    return <>
    <Header/>
    <div className="main">
        <Container fluid className="fit">
            <Slide 
                img={slidesInfo[activeIndex].img}
                slogan={slidesInfo[activeIndex].slogan}
                text={slidesInfo[activeIndex].text}
                activeIndex={activeIndex}
                goToSlide1={goToSlide1}
                goToSlide2={goToSlide2}
                goToSlide3={goToSlide3}
                goToSlide4={goToSlide4}
            />
        </Container>
    </div>
    </>
}

export default Welcome;
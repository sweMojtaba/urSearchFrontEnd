import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Slide from "./Slide";
import slide1 from "../../assets/slide1.png"

function Welcome() {
    // To-do: add other slides
    return <>
    <Header/>
    <div className="main">
        <Container fluid className="fit">
            <Slide 
                img={slide1}
                slogan="Find research positions"
                text="Work with top labs and professors in your university!"
                activeIndex={0}
            />
        </Container>
    </div>
    </>
}

export default Welcome;
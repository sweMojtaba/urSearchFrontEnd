import React from "react";
import { Container } from "react-bootstrap";
import {ReactComponent as Edit} from "../../assets/edit.svg";

import "./info-card.scss"

export interface InfoCardProps {
    title: string;
    children: React.ReactNode;
    editFunc?: () => void;
}

export default function InfoCard({ title, children, editFunc }: InfoCardProps) {
    // useEffect(() => {
    //     console.log(buttonProps);
    // }, [buttonProps]);
    return <Container className="info-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
            <Edit onClick={editFunc}/>
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
    </Container>
}
import React, { useMemo } from "react";
import { Button, Container } from "react-bootstrap";

export interface ActionableCardProps {
    title: string;
    children: React.ReactNode;
    buttonProps?: ActionableCardButtonProps;
}

export interface ActionableCardButtonProps {
    buttonText: string;
    buttonAction: () => void;
    disabled: boolean;
    active: boolean;
}

export default function ActionableCard({ title, children, buttonProps }: ActionableCardProps): JSX.Element {
    return <Container className="info-card actionable-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
        {buttonProps &&
            <Button
                onClick={buttonProps.buttonAction}
                disabled={buttonProps.disabled}
                active={buttonProps.active}>
                {buttonProps.buttonText}
            </Button>}
    </Container>
}
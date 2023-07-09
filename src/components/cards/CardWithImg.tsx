import React from "react";
import { InfoCardProps } from "./InfoCard";
import { ActionableCardProps } from "./ActionableCard";

import "./info-card.scss"

export type PassableInfoCardProps = Omit<InfoCardProps, "children">;
export type PassableActionableCardProps = Omit<ActionableCardProps, "children">;

export interface InfoCardWithImgProps {
    CardComponent: React.FC<InfoCardProps>;
    cardProps: PassableInfoCardProps;
    children: React.ReactNode;
    Img: React.FunctionComponent<any>;
}

export interface ActionableCardWithImgProps {
    CardComponent: React.FC<ActionableCardProps>;
    cardProps: PassableActionableCardProps;
    children: React.ReactNode;
    Img: React.FunctionComponent<any>;
}

export type CardWithImgProps = InfoCardWithImgProps | ActionableCardWithImgProps;

export default function CardWithImg({ CardComponent, cardProps, children, Img }: CardWithImgProps): JSX.Element {
    return <div className="info-card-with-img">
        <Img className="img-on-card" />
        <CardComponent
            {...cardProps}
            children={children}
        />
    </div>
}
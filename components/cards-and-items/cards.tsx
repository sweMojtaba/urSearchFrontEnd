"use client" // needed for onClick interactions to work

import { ClientButton, ClientContainer } from "@/client-wrappers/bootstrap";
import Edit from "./edit.svg";

import "./info-card.scss"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InfoCardProps {
    title: string;
    children: React.ReactNode;
    editFunc?: () => void;
}

export function InfoCard({ title, children, editFunc }: InfoCardProps) {
    return <ClientContainer className="info-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
            <Image src={Edit} alt="edit" onClick={editFunc} />
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
    </ClientContainer>
}

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

export function ActionableCard({ title, children, buttonProps }: ActionableCardProps): JSX.Element {
    return <ClientContainer className="info-card actionable-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
        {buttonProps &&
            <ClientButton
                onClick={buttonProps.buttonAction}
                disabled={buttonProps.disabled}
                active={buttonProps.active}>
                {buttonProps.buttonText}
            </ClientButton>}
    </ClientContainer>
}

export type PassableInfoCardProps = Omit<InfoCardProps, "children">;
export type PassableActionableCardProps = Omit<ActionableCardProps, "children">;

export interface InfoCardWithImgProps {
    CardComponent: React.FC<InfoCardProps>;
    cardProps: PassableInfoCardProps;
    children: React.ReactNode;
    ImgSrc: StaticImport;
}

export interface ActionableCardWithImgProps {
    CardComponent: React.FC<ActionableCardProps>;
    cardProps: PassableActionableCardProps;
    children: React.ReactNode;
    ImgSrc: StaticImport;
}

export type CardWithImgProps = InfoCardWithImgProps | ActionableCardWithImgProps;

export function CardWithImg({ CardComponent, cardProps, children, ImgSrc }: CardWithImgProps): JSX.Element {
    return <div className="info-card-with-img">
        <Image src={ImgSrc} alt="image for card" className="img-on-card" />
        <CardComponent
            {...cardProps}>
            {children}
        </CardComponent>
    </div>
}


"use client"
import { useState } from 'react';
import { ActionableCard } from '../cards-and-items/cards';

export type ButtonTextEnum = {
    ACTIVATED: string;
    ACTIVATING: string;
    NOT_ACTIVATED: string;
}

export interface ButtonStatus {
    buttonText: ButtonTextEnum[keyof ButtonTextEnum];
    buttonDisabled: boolean;
    buttonActive: boolean;
};

export type ButtonStatusEnum = {
    NOT_ACTIVATED: ButtonStatus;
    ACTIVATING: ButtonStatus;
    ACTIVATED: ButtonStatus;
};

export function createButtonStatus(buttonTextEnum: ButtonTextEnum): ButtonStatusEnum {
    return {
        NOT_ACTIVATED: {
            buttonText: buttonTextEnum.NOT_ACTIVATED,
            buttonDisabled: false,
            buttonActive: false,
        },
        ACTIVATING: {
            buttonText: buttonTextEnum.ACTIVATING,
            buttonDisabled: true,
            buttonActive: false,
        },
        ACTIVATED: {
            buttonText: buttonTextEnum.ACTIVATED,
            buttonDisabled: false,
            buttonActive: true,
        },
    };
}

type QuickApplyProps = {
    initialStatus: ButtonStatus;
    buttonStatus: ButtonStatusEnum;
    fetchFunction: () => Promise<{ status: number }>;
    title: string;
    note: string;
};

export function QuickApplyTemplate({
    initialStatus,
    buttonStatus,
    fetchFunction,
    title,
    note,
}: QuickApplyProps) {
    const [buttonState, setButtonState] = useState(initialStatus);

    const handleClick = () => {
        setButtonState(buttonStatus.ACTIVATING);
        fetchFunction().then((res) => {
            if (res.status === 200) {
                if (buttonState.buttonActive) {
                    setButtonState(buttonStatus.NOT_ACTIVATED);
                } else {
                    setButtonState(buttonStatus.ACTIVATED);
                }
            }
        });
    };

    return (
        <ActionableCard
            title={title}
            buttonProps={{
                buttonText: buttonState.buttonText,
                buttonAction: handleClick,
                disabled: buttonState.buttonDisabled,
                active: buttonState.buttonActive,
            }}
        >
            <p className="note" style={{fontSize:"12px"}}>{note}</p>
        </ActionableCard>
    );
}

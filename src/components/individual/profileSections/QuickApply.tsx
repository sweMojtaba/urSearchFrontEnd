import React from "react";
import ActionableCard from "../../cards/ActionableCard";
import fakeResponse from "../../common/utils/fakeResponse";

enum ButtonText {
    ACTIVATED = "Activated",
    ACTIVATING = "Activating...",
    NOT_ACTIVATED = "Quick Apply!"
}

const ButtonStatus = {
    NOT_ACTIVATED: {
        buttonText: ButtonText.NOT_ACTIVATED,
        buttonDisabled: false,
        buttonActive: false
    },
    ACTIVATING: {
        buttonText: ButtonText.ACTIVATING,
        buttonDisabled: true,
        buttonActive: false
    },
    ACTIVATED: {
        buttonText: ButtonText.ACTIVATED,
        buttonDisabled: false,
        buttonActive: true
    }
};

export default function QuickApply(): JSX.Element {
    const [buttonStatus, setButtonStatus] = React.useState(ButtonStatus.NOT_ACTIVATED);

    const handleClick = () => {
        setButtonStatus(ButtonStatus.ACTIVATING);
        fakeResponse().then((res) => {
            if (res.status === 200) {
                if (buttonStatus.buttonActive) {
                    setButtonStatus(ButtonStatus.NOT_ACTIVATED);
                } else {
                    setButtonStatus(ButtonStatus.ACTIVATED);
                }
            }
        })
    }

    return <ActionableCard
        title="Quick Apply!"
        buttonProps={{
            buttonText: buttonStatus.buttonText,
            buttonAction: handleClick,
            disabled: buttonStatus.buttonDisabled,
            active: buttonStatus.buttonActive
        }}
    >
        <p className="note">
            Your resume, profile information and video will be used for applications that have the Quick Apply function! Save yourself some time!
        </p>
    </ActionableCard>

}
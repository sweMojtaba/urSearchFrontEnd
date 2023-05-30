import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoMdConstruct } from "react-icons/io";

const tooltip = (
    <Tooltip id="tooltip">
        <IoMdConstruct/>Single Sign-On function is still under development...
    </Tooltip>
);

function SSOButton() {
    const handleSSO = () => {
        alert("Single Sign-On function is still under development. Please use email and password instead.")
        // To-do: enable SSO
    }

    return <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button
            variant="primary"
            className="btn-inline-1"
            onClick={handleSSO}
        >
            SSO
        </Button>
    </OverlayTrigger>
}

export default SSOButton;
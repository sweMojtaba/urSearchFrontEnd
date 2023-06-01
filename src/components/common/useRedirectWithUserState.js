import { useNavigate } from "react-router-dom";

function useRedirectWithUserState(userState, ifRedirect, note, target) {
    const navigate = useNavigate();
    const redirectWithUserState = () => {
        if (ifRedirect(userState)) {
            console.log(`Redirecting, ${note}, ${target}`);
            navigate("/redirect", { state: {
                note: note,
                target: target
            }, replace: false})
        }
    }
    return redirectWithUserState;
}

export default useRedirectWithUserState;
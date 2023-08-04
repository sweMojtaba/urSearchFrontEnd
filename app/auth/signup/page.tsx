import Auth from "../authTemplate";
import { AuthType } from "../authUtils";

export default function Signup() {
    return <Auth functionality={AuthType.SIGNUP} />
}
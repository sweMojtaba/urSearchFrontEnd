import Auth from "../authTemplate";
import { AuthType } from "../authUtils";

export default function Login() {
    return <Auth functionality={AuthType.LOGIN} />
}
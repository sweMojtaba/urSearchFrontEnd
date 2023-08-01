import Auth from "../authTemplate";
import { AuthType } from "../authUtils";

export default function Login() {
    return <Auth role={AuthType.LOGIN} />
}
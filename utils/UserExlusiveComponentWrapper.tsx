import { UserState } from "@/app/context";
import useUserExclusiveComponent from "./useUserExclusiveComponents";

export function ApplicantExclusiveComponentWrapper(Component: React.ComponentType<any>): React.ComponentType<any> {
    useUserExclusiveComponent(UserState.APPLICANT);
    return Component;
}

export function LabExclusiveComponentWrapper(Component: React.ComponentType<any>): React.ComponentType<any> {
    useUserExclusiveComponent(UserState.LAB);
    return Component;
}
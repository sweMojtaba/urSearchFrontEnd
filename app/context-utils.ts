export enum UserState {
    NOT_LOGGED_IN = 0,
    APPLICANT = 1,
    LAB = 2
}

export enum RoleType {
    APPLICANT = "applicant",
    LAB = "lab"
}

export function getOtherRole (role: RoleType) {
    if (role === RoleType.APPLICANT) {
        return RoleType.LAB;
    } else if (role === RoleType.LAB) {
        return RoleType.APPLICANT;
    } else {
        throw new Error("Invalid role");
    }
}

export interface User {
    name: string;
    state: UserState;
}

export interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}
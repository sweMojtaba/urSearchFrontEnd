import React, { createContext } from "react";

export enum UserState {
    NOT_LOGGED_IN = 0,
    APPLICANT = 1,
    LAB = 2
}

export interface User {
    name: string;
    state: UserState;
}

export interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext({} as UserContextType);

export default UserContext;
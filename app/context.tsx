'use client';

import getUserStored from "@/utils/getUserStored";
import { createContext, useState } from "react";

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

export const UserContext = createContext({} as UserContextType);

export default function InitializedUserContextProvider({ children}: { children: React.ReactNode }) {
    // current solution: initialize user context using localStorage
    // in the future: maybe cookies / api (TO-DO)
    const [user, setUser] = useState(getUserStored);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}
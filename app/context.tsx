"use client";

// TO-DO: use React-Query to get and synchronize user state from server and manage the state.

import { createContext, useState, useEffect } from "react";
import { User, UserContextType } from "./context-utils";

const DEFAULT_STATE = 0;
const DEFAULT_NAME = "";

export const UserContext = createContext({} as UserContextType);

export default function InitializedUserContextProvider({ children }: { children: React.ReactNode }) {
    // current solution: initialize user context using localStorage
    // in the future: maybe cookies / api (TO-DO)
    const [user, setUser] = useState<User>({ name: DEFAULT_NAME, state: DEFAULT_STATE });

    useEffect(() => {
        const userStateStored: string | null = localStorage.getItem("userState");
        const state: number = isNaN(parseInt(userStateStored!)) ? DEFAULT_STATE : parseInt(userStateStored!);
        const userNameStored: string | null = localStorage.getItem("userName");
        const name: string = userNameStored || DEFAULT_NAME;
        setUser((prevUser) => {
            if (prevUser.name === name && prevUser.state === state) {
                return prevUser;
            }
            return { name: name, state: state };
        });
    }, []);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

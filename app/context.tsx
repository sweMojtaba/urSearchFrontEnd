"use client";

// TO-DO: use React-Query to get and synchronize user state from server and manage the state.

import { createContext, useState, useEffect } from "react";
import { User, UserContextType } from "./context-utils";

const DEFAULT_STATE = 0;
const DEFAULT_NAME = "";

function useUserStored(): User {
    const [state, setState] = useState<number>(DEFAULT_STATE);
    const [name, setName] = useState<string>(DEFAULT_NAME);

    useEffect(() => {
        const userStateStored: string | null = localStorage.getItem("userState");
        const state: number = isNaN(parseInt(userStateStored!)) ? DEFAULT_STATE : parseInt(userStateStored!);
        const userName: string | null = localStorage.getItem("userName");
        const name: string = userName || DEFAULT_NAME;

        setState(state);
        setName(name);
    }, []);

    return { name, state };
}

export const UserContext = createContext({} as UserContextType);

export default function InitializedUserContextProvider({ children }: { children: React.ReactNode }) {
    // current solution: initialize user context using localStorage
    // in the future: maybe cookies / api (TO-DO)
    const userStoredData = useUserStored();
    const [user, setUser] = useState<User>({ name: DEFAULT_NAME, state: DEFAULT_STATE });

    useEffect(() => {
        setUser((prevUser) => {
            if (prevUser.name === userStoredData.name && prevUser.state === userStoredData.state) {
                return prevUser;
            }
            return userStoredData;
        });
    }, [userStoredData]);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

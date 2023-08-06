'use client';

// TO-DO: use React-Query to get and synchronize user state from server and manage the state.

import { createContext, useState } from "react";
import { User, UserContextType } from "./context-utils";

const DEFAULT_STATE = 0;
const DEFAULT_NAME = '';

function useUserStored(): { state: number, name: string } {
    const [state, setState] = useState<number>(() => {
        const userStateStored: string | null = localStorage.getItem("userState");
        // TO-DO: wrap this in a react hook
        let state: number = isNaN(parseInt(userStateStored!)) ? DEFAULT_STATE : parseInt(userStateStored!);
        return state;
    });

    const [name, setName] = useState<string>(() => {
        let name: string | null = localStorage.getItem("userName");
        name = name ?? DEFAULT_NAME;
        return name;
    });

    return { state, name };
}

export const UserContext = createContext({} as UserContextType);

export default function InitializedUserContextProvider({ children}: { children: React.ReactNode }) {
    // current solution: initialize user context using localStorage
    // in the future: maybe cookies / api (TO-DO)
    const userStored = useUserStored();
    const [user, setUser] = useState<User>(userStored);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}
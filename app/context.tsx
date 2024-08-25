//TODO: needs hydration / correction

"use client";

// TODO: use React-Query to get and synchronize user state from server and manage the state.

import { createContext, useState, useEffect } from "react";
import { User, UserContextType } from "./context-utils";

// Default values for user state and name
const DEFAULT_STATE = 0; // Default user state, corresponding to 'NOT_LOGGED_IN' in UserState enum
const DEFAULT_NAME = ""; // Default name for the user, an empty string

// Create a context with default values of UserContextType
export const UserContext = createContext({} as UserContextType);

// Component that provides the user context to its children
export default function InitializedUserContextProvider({ children }: { children: React.ReactNode }) {
    // Current solution: initialize user context using localStorage
    // TODO: Use cookies or API for user state tracking

    // State to hold user information with default values
    const [user, setUser] = useState<User>({ name: DEFAULT_NAME, state: DEFAULT_STATE });

    // Effect to load user data from localStorage on component mount
    useEffect(() => {
        // Retrieve stored user state from localStorage
        const userStateStored: string | null = localStorage.getItem("userState");
        // Parse the stored state, default to DEFAULT_STATE if parsing fails
        const state: number = isNaN(parseInt(userStateStored!)) ? DEFAULT_STATE : parseInt(userStateStored!);
        // Retrieve stored user name from localStorage
        const userNameStored: string | null = localStorage.getItem("userName");
        // Set name to stored value or default to DEFAULT_NAME if not found
        const name: string = userNameStored || DEFAULT_NAME;
        // Update user state if the stored values are different from the current state
        setUser((prevUser) => {
            if (prevUser.name === name && prevUser.state === state) {
                // Return the previous state if there are no changes
                return prevUser;
            }
            // Otherwise, create a new user state with the retrieved values
            return { name: name, state: state };
        });
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    // Provide the user state and updater function to children components
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

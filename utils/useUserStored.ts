'use client'

import { useEffect, useState } from "react";

const DEFAULT_STATE = 0;
const DEFAULT_NAME = '';

export default function useUserStored(): { state: number, name: string } {
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
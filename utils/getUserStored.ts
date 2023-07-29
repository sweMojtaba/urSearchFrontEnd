'use client'

const DEFAULT_STATE = 0;
const DEFAULT_NAME = '';

export default function getUserStored(): { state: number, name: string } {
    const userStateStored: string | null = localStorage.getItem("userState");
    let state: number = isNaN(parseInt(userStateStored!)) ? DEFAULT_STATE : parseInt(userStateStored!);
    
    let name: string | null = localStorage.getItem("userName");
    name = name ?? DEFAULT_NAME;

    return {
        state,
        name
    }
}
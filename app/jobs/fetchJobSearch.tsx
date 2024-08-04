"use client"; // must specify this to use client-side fetch (handleSubmit not used as a server action)

import { RoleType } from "@/app/context-utils";
import { UserContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export async function jobSearch(query: string) {
    // TODO Replace this with a public link
    // const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/login";
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    const url = baseUrl + "api/jobs/search";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:3000/"
        },
        credentials: "include", 
        body: JSON.stringify({
            "query": query
        }),
    });
    return res;
}

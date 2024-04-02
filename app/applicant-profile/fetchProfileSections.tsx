import { useState } from "react";

const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
const url = baseUrl + "/api/jobseeker/20";
let name = null; 

async function fetchData() {
    // TODO Replace this with a public link
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    }).then((res) => res.json())
    .then((res) => res.data.person)
    .then((res) => {
        for (const key in res) localStorage.setItem(key, res[key]);
    })
    .catch((error) => console.log(error));

    return res; 
}

export function fetchPersonalInfo() {
    let data = {
        "name": "Moj",
        "degree": "B.S.",
        "major": "Computer Sciences",
        "school": "University of Wisconsin - Madison",
        "classYear": 2024,
        "GPA": 3.89,
        "phone": 6085728750,
        "email": "javid2@wisc.edu"
    }
    fetchData(); 
    for (const key in data) data[key] = localStorage.getItem(key)
    console.log(localStorage)
    return data; 
}

export function fetchGPAhidden() {
    let data = {
        GPAhidden: localStorage.getItem("GPAhidden")
    }
    return data
}

export function fetchDocuments() {
    return [
        {
            "name": "resume",
            "url": "file1/address/hosted/in/the/backend.com"
        },
        {
            "name": "self-introduction",
            "url": "file1/address/hosted/in/the/backend.com"
        }
    ]
}

export function fetchAffiliations() {
    return [
        {
            "name": "UW-Madison",
            "url": "url/to/that/affiliation/on/ursearch/website.com"
        },
        {
            "name": "DOIT Help Desk",
            "url": "url/to/that/affiliation/on/ursearch/website.com"
        },
        {
            "name": "UrSearch",
            "url": "url/to/that/affiliation/on/ursearch/website.com"
        },
        {
            "name": "Ricke Lab",
            "url": "url/to/that/affiliation/on/ursearch/website.com"
        }
    ]
}

export function fetchExperiences() {
    return [
        {
            "name": "Ursearch Startup",
            "role": "Co-Founder",
            "start": "2023-01",
            "end": "Present"
        },
        {
            "name": "DOIT Help Desk",
            "role": "Advanced Agent",
            "start": "2022-01",
            "end": "Present"
        }
    ]
}

export function fetchProjects() {
    return [
        {
            "name": "Ursearch Algorithms",
            "description": "Developed and tested multiple algorithms for the website, e.g. matching, searching.",
            "start": "2023-01",
            "end": "Present"
        }
    ]
}

export function fetchPublications() {
    return [
        {
            "journal": "Journal of Computer Science and Engineering",
            "title": "The Theory of Input Manipulation",
            "link": "",
            "DOI": "764t3746.keurvbls.wo",
            "start": "2021-01",
            "end": "2021-09"
        }
    ]
}

export function fetchVideo() {
    return {
        "url": "url/to/video/hosted/on/backend.webm"
    }
}

export function fetchSkills() {
    var rawSkills = localStorage.getItem("skills")?.split(","); 
    var skills = rawSkills.filter((value, index, array) => array.indexOf(value) === index).filter((value, index, array) => value.length > 0)
    return skills; 
}

export function fetchAccomplishments() {
    return [
        "Dean's List 2021–2023",
        "Forbes 30 under 30"
    ]
}

export function fetchQuickApplyActivated() {
    return {
        "quickApply": localStorage.getItem("isQuickApplyActivated")
    }
}
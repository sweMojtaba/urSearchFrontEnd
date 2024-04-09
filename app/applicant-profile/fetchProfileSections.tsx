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
        for (const key in res) localStorage.setItem(key, JSON.stringify(res[key]));
        
    })
    .catch((error) => console.log(error));

    return res; 
}

export function fetchPersonalInfo() {
    fetchData(); 
    let data = {
        "name": JSON.parse(localStorage.getItem("name") as string),
        "degree": JSON.parse(localStorage.getItem("degree") as string),
        "major": JSON.parse(localStorage.getItem("major") as string),
        "school": JSON.parse(localStorage.getItem("school") as string),
        "classYear": JSON.parse(localStorage.getItem("classYear") as string),
        "GPA": JSON.parse(localStorage.getItem("GPA") as string),
        "phone": JSON.parse(localStorage.getItem("phone") as string),
        "email": JSON.parse(localStorage.getItem("email") as string)
    }
    // for (const key in data) data[key] = localStorage.getItem(key)
    console.log(localStorage)
    return data; 
}

export function fetchGPAhidden() {
    fetchData(); 
    let data = {
        GPAhidden: JSON.parse(localStorage.getItem("GPAhidden") as string)
    }
    return data
}

export function fetchDocuments() {
    fetchData();
    const docsRaw = JSON.parse(localStorage.getItem("files") as string);
    var docs = []
    for (var j = 0; j < docsRaw.length; ++j) {
        var doc = docsRaw[j]; 
        docs.push({
            "name": doc.name, 
            "url": doc.url
        })
    }
    // return [
    //     {
    //         "name": "resume",
    //         "url": "file1/address/hosted/in/the/backend.com"
    //     },
    //     {
    //         "name": "self-introduction",
    //         "url": "file1/address/hosted/in/the/backend.com"
    //     }
    // ]
    return docs; 
}

export function fetchAffiliations() {
    fetchData(); 
    const affiliationsRaw = JSON.parse(localStorage.getItem("affiliations") as string);
    var affiliations = []
    for (var j = 0; j < affiliationsRaw.length; ++j) {
        var affiliation = affiliationsRaw[j]; 
        affiliations.push({
            "name": affiliation.name, 
            "url": affiliation.url
        })
    }
    // return [
    //     {
    //         "name": "UW-Madison",
    //         "url": "url/to/that/affiliation/on/ursearch/website.com"
    //     },
    //     {
    //         "name": "DOIT Help Desk",
    //         "url": "url/to/that/affiliation/on/ursearch/website.com"
    //     },
    //     {
    //         "name": "UrSearch",
    //         "url": "url/to/that/affiliation/on/ursearch/website.com"
    //     },
    //     {
    //         "name": "Ricke Lab",
    //         "url": "url/to/that/affiliation/on/ursearch/website.com"
    //     }
    // ]
    return affiliations
}

export function fetchExperiences() {
    fetchData(); 
    const expsRaw = JSON.parse(localStorage.getItem("experiences") as string);
    var exps = []
    for (var j = 0; j < expsRaw.length; ++j) {
        var exp = expsRaw[j]; 
        exps.push({
            "name": exp.name, 
            "role": exp.role, 
            "start": exp.start, 
            "end": exp.end
        })
    }
    return exps; 
}

export function fetchProjects() {
    fetchData(); 
    const projectsRaw = JSON.parse(localStorage.getItem("projects") as string);
    var projects = []
    for (var j = 0; j < projectsRaw.length; ++j) {
        var project = projectsRaw[j]; 
        projects.push({
            "name": project.name, 
            "description": project.description, 
            "start": project.start, 
            "end": project.end
        })
    }
    return projects;
}

export function fetchPublications() {
    fetchData(); 
    const publicsRaw = JSON.parse(localStorage.getItem("publications") as string);
    var publics = []
    for (var j = 0; j < publicsRaw.length; ++j) {
        var publication = publicsRaw[j]; 
        publics.push({
            "name": publication.name, 
            "description": publication.description, 
            "start": publication.start, 
            "end": publication.end
        })
    }
    return publics; 
}

export function fetchVideo() {
    fetchData(); 
    return {
        "url": "url/to/video/hosted/on/backend.webm"
    }
}

export function fetchSkills() {
    fetchData(); 
    var rawSkills = JSON.parse(localStorage.getItem("skills") as string); 
    var skills = []
    if (rawSkills != null) 
        skills = rawSkills.filter((value:string, index:number, array:string[]) => array.indexOf(value) === index).filter((value : string, index : Number) => value.length > 0)
    return skills; 
}

export function fetchAccomplishments() {
    fetchData(); 
    const accomplishesRaw = JSON.parse(localStorage.getItem("accomplishments") as string);
    var accomplishes = [];
    if (accomplishesRaw != null) {
        for (var j = 0; j < accomplishesRaw.length; ++j) {
            var accomplish = accomplishesRaw[j]; 
            accomplishes.push(accomplish);
        }
    }
    // return [
    //     "Dean's List 2021–2023",
    //     "Forbes 30 under 30"
    // ]
    return accomplishes; 
}

export function fetchQuickApplyActivated() {
    fetchData(); 
    return {
        "quickApply": JSON.parse(localStorage.getItem("isQuickApplyActivated") as string)
    }
}
export function fetchPersonalInfo() {
    return {
        name: "Mojtaba Javid",
        degree: "B.S.",
        major: "Computer Sciences",
        school: "University of Wisconsin - Madison",
        classYear: 2024,
        GPA: 3.89,
        phone: 6085728750,
        email: "javid2@wisc.edu",
    };
}

export function fetchGPAhidden() {
    return {
        GPAhidden: true,
    };
}

export function fetchDocuments() {
    return [
        {
            name: "Proposal",
            url: "file1/address/hosted/in/the/backend.com",
        },
        {
            name: "Initial Test Results",
            url: "file1/address/hosted/in/the/backend.com",
        },
    ];
}

export function fetchAffiliations() {
    return [
        {
            name: "UW-Madison",
            url: "url/to/that/affiliation/on/ursearch/website.com",
        },
        {
            name: "DOIT Help Desk",
            url: "url/to/that/affiliation/on/ursearch/website.com",
        },
        {
            name: "UrSearch",
            url: "url/to/that/affiliation/on/ursearch/website.com",
        },
        {
            name: "Ricke Lab",
            url: "url/to/that/affiliation/on/ursearch/website.com",
        },
    ];
}

export function fetchVideo() {
    return {
        url: "url/to/video/hosted/on/backend.webm",
    };
}

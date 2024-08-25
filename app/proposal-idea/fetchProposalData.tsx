// Function to fetch personal information.
export function fetchPersonalInfo() {
    return {
        name: "Mojtaba Javid", // Name of the individual.
        degree: "B.S.", // Degree obtained.
        major: "Computer Sciences", // Major field of study.
        school: "University of Wisconsin - Madison", // Educational institution.
        classYear: 2024, // Graduation year.
        GPA: 3.89, // Grade Point Average.
        phone: 6085728750, // Phone number.
        email: "javid2@wisc.edu", // Email address.
    };
}

// Function to fetch information about whether GPA is hidden.
export function fetchGPAhidden() {
    return {
        GPAhidden: true, // Indicates that GPA is hidden (true) or shown (false).
    };
}

// Function to fetch a list of documents.
export function fetchDocuments() {
    return [
        {
            name: "Proposal", // Document name.
            url: "file1/address/hosted/in/the/backend.com", // URL to the document.
        },
        {
            name: "Initial Test Results", // Document name.
            url: "file1/address/hosted/in/the/backend.com", // URL to the document.
        },
    ];
}

// Function to fetch a list of affiliations.
export function fetchAffiliations() {
    return [
        {
            name: "UW-Madison", // Affiliation name.
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL to the affiliation page.
        },
        {
            name: "DOIT Help Desk", // Affiliation name.
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL to the affiliation page.
        },
        {
            name: "UrSearch", // Affiliation name.
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL to the affiliation page.
        },
        {
            name: "Ricke Lab", // Affiliation name.
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL to the affiliation page.
        },
    ];
}

// Function to fetch video information.
export function fetchVideo() {
    return {
        url: "url/to/video/hosted/on/backend.webm", // URL to the video file.
    };
}

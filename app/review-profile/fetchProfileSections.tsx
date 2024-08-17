// Function to fetch personal information
export function fetchPersonalInfo() {
    return {
        name: "Mojtaba Javid", // Full name of the person
        degree: "B.S.", // Degree obtained
        major: "Computer Sciences", // Major field of study
        school: "University of Wisconsin - Madison", // School attended
        classYear: 2024, // Year of graduation
        GPA: 3.89, // Grade Point Average
        phone: 6085728750, // Contact phone number
        email: "javid2@wisc.edu", // Contact email address
    };
}

// Function to fetch whether GPA is hidden
export function fetchGPAhidden() {
    return {
        GPAhidden: true, // Indicates if GPA is hidden (true or false)
    };
}

// Function to fetch documents with their URLs
export function fetchDocuments() {
    return [
        {
            name: "resume", // Name of the document
            url: "file1/address/hosted/in/the/backend.com", // URL to access the document
        },
        {
            name: "self-introduction", // Name of the document
            url: "file1/address/hosted/in/the/backend.com", // URL to access the document
        },
    ];
}

// Function to fetch affiliations with their URLs
export function fetchAffiliations() {
    return [
        {
            name: "UW-Madison", // Name of the affiliation
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL for more details about the affiliation
        },
        {
            name: "DOIT Help Desk", // Name of the affiliation
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL for more details about the affiliation
        },
        {
            name: "UrSearch", // Name of the affiliation
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL for more details about the affiliation
        },
        {
            name: "Ricke Lab", // Name of the affiliation
            url: "url/to/that/affiliation/on/ursearch/website.com", // URL for more details about the affiliation
        },
    ];
}

// Function to fetch work experiences
export function fetchExperiences() {
    return [
        {
            name: "Ursearch Startup", // Name of the organization
            role: "Co-Founder", // Role held in the organization
            start: "2023-01", // Start date of the experience
            end: "Present", // End date of the experience (or "Present" if ongoing)
        },
        {
            name: "DOIT Help Desk", // Name of the organization
            role: "Advanced Agent", // Role held in the organization
            start: "2022-01", // Start date of the experience
            end: "Present", // End date of the experience (or "Present" if ongoing)
        },
    ];
}

// Function to fetch projects with their details
export function fetchProjects() {
    return [
        {
            name: "Ursearch Algorithms", // Name of the project
            description: "Developed and tested multiple algorithms for the website, e.g. matching, searching.", // Brief description of the project
            start: "2023-01", // Start date of the project
            end: "Present", // End date of the project (or "Present" if ongoing)
        },
    ];
}

// Function to fetch publications with their details
export function fetchPublications() {
    return [
        {
            journal: "Journal of Computer Science and Engineering", // Journal where the publication appeared
            title: "The Theory of Input Manipulation", // Title of the publication
            link: "", // URL to access the publication (if available)
            DOI: "764t3746.keurvbls.wo", // Digital Object Identifier for the publication
            start: "2021-01", // Start date of the publication
            end: "2021-09", // End date of the publication
        },
    ];
}

// Function to fetch video URL
export function fetchVideo() {
    return {
        url: "url/to/video/hosted/on/backend.webm", // URL to access the video
    };
}

// Function to fetch skills
export function fetchSkills() {
    return ["Python", "Java", "Figma", "Javascript"]; // List of skills
}

// Function to fetch accomplishments
export function fetchAccomplishments() {
    return ["Dean's List 2021–2023", "Forbes 30 under 30"]; // List of accomplishments
}

// Function to fetch quick apply status
export function fetchQuickApplyActivated() {
    return {
        quickApply: true, // Indicates if quick apply is activated (true or false)
    };
}

// Function to fetch application information
export function fetchApplicationInfo() {
    return ["Not a protected veteran", "No disabilities", "Custom question responses:"]; // List of application-related information
}

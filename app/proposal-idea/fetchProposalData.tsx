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
            name: "resume",
            url: "file1/address/hosted/in/the/backend.com",
        },
        {
            name: "self-introduction",
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

export function fetchExperiences() {
    return [
        {
            name: "Ursearch Startup",
            role: "Co-Founder",
            start: "2023-01",
            end: "Present",
        },
        {
            name: "DOIT Help Desk",
            role: "Advanced Agent",
            start: "2022-01",
            end: "Present",
        },
    ];
}

export function fetchProjects() {
    return [
        {
            name: "Ursearch Algorithms",
            description: "Developed and tested multiple algorithms for the website, e.g. matching, searching.",
            start: "2023-01",
            end: "Present",
        },
    ];
}

export function fetchPublications() {
    return [
        {
            journal: "Journal of Computer Science and Engineering",
            title: "The Theory of Input Manipulation",
            link: "",
            DOI: "764t3746.keurvbls.wo",
            start: "2021-01",
            end: "2021-09",
        },
    ];
}

export function fetchVideo() {
    return {
        url: "url/to/video/hosted/on/backend.webm",
    };
}

export function fetchSkills() {
    return ["Python", "Java", "Figma", "Javascript"];
}

export function fetchAccomplishments() {
    return ["Dean's List 2021–2023", "Forbes 30 under 30"];
}

export function fetchQuickApplyActivated() {
    return {
        quickApply: true,
    };
}

export function fetchApplicationInfo() {
    return ["Not a protected veteran", "No disabilities", "Custom question responses:"];
}

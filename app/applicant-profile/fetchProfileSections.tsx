// TODO: Should be hydrated with actual API call FOR THE WHOLE PAGE

// Function to fetch personal information of a user
export function fetchPersonalInfo() {
    return {
        "name": "Scholar Scholara",
        "degree": "B.S.",
        "major": "Computer Sciences",
        "school": "University of Wisconsin - Madison",
        "classYear": 2024,
        "GPA": 10.0,
        "phone": 0123456789,
        "email": "ursearch.edu@gmail.com"
    };
}

// Function to check if GPA should be hidden
export function fetchGPAhidden() {
    return {
        GPAhidden: true
    }
}

// Function to fetch documents related to the user
export function fetchDocuments() {
    return [
        // Placeholder addresses, replace with actual API URLs
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

// Function to fetch affiliations related to the user
export function fetchAffiliations() {
    return [
        // Placeholder addresses, replace with actual API URLs
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

// Function to fetch experiences related to the user
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

// Function to fetch projects related to the user
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

// Function to fetch publications related to the user
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

// Function to fetch a video URL related to the user
export function fetchVideo() {
    return {
        "url": "url/to/video/hosted/on/backend.webm"
    }
}

// Function to fetch skills related to the user
export function fetchSkills() {
    return [
        "Python",
        "Java",
        "Figma",
        "Javascript"
    ]
}

// Function to fetch accomplishments related to the user
export function fetchAccomplishments() {
    return [
        "Dean's List 2021–2023",
        "Forbes 30 under 30"
    ]
}

// Function to check if quick apply feature is activated
export function fetchQuickApplyActivated() {
    return {
        "quickApply": true
    }
}

export type Post = {
    title: string,
    description: string,
    payRange: string,
    canBeDoneForCredit: boolean,
    remote: boolean,
    requirements: string[],
    responsibilities: string[],
    perks: string[],
    questions: string[],
    graduationYears: string[],
    majors: string[],
    GPA: {
        min: number,
        max: number,
    },
    hiddenRequirements: string[],
}

export function fetchPost(id: number) {
    const post = {
        title: "Undergraduate Research Assistant - Biology Lab",
        description: "Join our cutting-edge biology lab as an Undergraduate Research Assistant. Work alongside experienced scientists on groundbreaking research projects. Gain hands-on experience with laboratory techniques and contribute to scientific discoveries.",
        payRange: "$18/hr",
        canBeDoneForCredit: true,
        remote: false,
        requirements: [
            "Enrollment in an undergraduate biology or related program.",
            "Completion of introductory biology courses.",
            "Ability to work independently and follow laboratory safety protocols.",
        ],
        responsibilities: [
            "Assist with laboratory experiments and data collection.",
            "Maintain and clean laboratory equipment.",
            "Participate in lab meetings and contribute to research discussions.",
        ],
        perks: [
            "Opportunity to co-author research publications.",
            "Access to professional development and networking events.",
            "Flexible work hours to accommodate academic schedule.",
        ],
        questions: [
            "What interests you about working in a biology lab?",
            "Describe any previous laboratory experience you have.",
            "How do you approach problem-solving in a research context?",
        ],
        graduationYears: [
            "2023",
            "2024",
            "2025",
        ],
        majors: [
            "Biology",
            "Biochemistry",
            "Molecular Biology",
        ],
        GPA: {
            min: 3.2,
            max: 4.0
        },
        hiddenRequirements: [
            "Strong attention to detail and organizational skills.",
            "Willingness to learn new laboratory techniques.",
            "Effective communication and teamwork abilities.",
        ],
    };
    return post;
}

export type Applicant = {
    name: string,
    id: string,
    profilePicture: string,
    timeApplied: string,
}

export function fetchApplicants(id: number) {
    const applicants = [
        {
            name: "John Doe",
            id: "123456789",
            profilePicture: "https://www.w3schools.com/howto/img_avatar.png",
            timeApplied: "2021-09-01T12:00:00.000Z",
        },
        {
            name: "Jane Doe",
            id: "987654321",
            profilePicture: "https://www.w3schools.com/howto/img_avatar.png",
            timeApplied: "2021-09-01T12:00:00.000Z",
        },
    ]
    return applicants;
}
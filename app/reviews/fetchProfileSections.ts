// Define the structure for lab information
export type LabInfo = {
    university: string; // Name of the university
    department: string; // Name of the department
    labTitle: string; // Title of the lab
    address: string; // Address of the lab
    phone: string; // Phone number of the lab
    email: string; // Email address of the lab
};

// Function to fetch lab information
export function fetchLabInfo(): LabInfo {
    // Mock lab information data
    const labInfo: LabInfo = {
        university: "University of Wisconsin–Madison",
        department: "Department of Urology",
        labTitle: "Ricke Lab",
        address: "1685 Highland Avenue Madison, WI 53705",
        phone: "(608) 265-3278",
        email: "ricke@urology.wisc.edu",
    };
    return labInfo; // Return the lab information
}

// Define the structure for lab keywords
export type LabKeywords = {
    type: string; // Type of the lab (e.g., research)
    field: string; // Field of study (e.g., urology)
    keywords: string[]; // List of keywords related to the lab
};

// Function to fetch lab keywords
export function fetchLabKeywords(): LabKeywords {
    // Mock lab keywords data
    const labKeywords: LabKeywords = {
        type: "research",
        field: "urology",
        keywords: [
            "urology",
            "animal studies",
            "pathogenesis"
        ]
    };
    return labKeywords; // Return the lab keywords
}

// Define the structure for lab resources
export type LabResources = {
    title: string; // Title of the resource
    link: string; // URL of the resource
}[]; // Array of resources

// Function to fetch lab resources
export function fetchResources(): LabResources {
    // Mock lab resources data
    const resources: LabResources = [
        {
            title: "People",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/people/"
        },
        {
            title: "Honors and Awards",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/honors-and-awards/"
        },
        {
            title: "Active Grants",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/active-grants/"
        },
        {
            title: "News",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/news/"
        },
        {
            title: "Alumni",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/alumni/"
        },
        {
            title: "Staff",
            link: "https://www.urology.wisc.edu/research/research-labs/ricke-lab/staff/"
        }
    ];
    return resources; // Return the lab resources
}

// Function to fetch reviews
export function fetchReviews() {
    // Mock reviews data
    const reviews = [
        {
            rating: 5, // Rating given in the review
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
            timestamp: "2020-01-01" // Date of the review
        },
        {
            rating: 4.5, // Rating given in the review
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
            timestamp: "2020-01-01" // Date of the review
        }
    ];
    return reviews; // Return the reviews
}

// Function to fetch rating
export function fetchRating() {
    // Mock rating data
    const rating = 4.5; // Rating value
    return rating; // Return the rating
}

// Function to fetch quick apply status
export function fetchQuickApply() {
    // Mock quick apply status
    const quickApply = true; // Indicates whether quick apply is activated
    return quickApply; // Return the quick apply status
}

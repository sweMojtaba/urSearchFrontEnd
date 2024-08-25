export type LabInfo = { 
    university: string, 
    department: string, 
    labTitle: string, 
    address: string, 
    phone: string, 
    email: string 
}
// Declaring a TypeScript type named LabInfo. This type defines the structure for lab information with fields for university, department, lab title, address, phone, and email.

export function fetchLabInfo(): LabInfo { 
    // Exporting a function named fetchLabInfo that returns an object of type LabInfo.

    const labInfo = { 
        university: "University of Wisconsin–Madison", 
        department: "Department of Urology", 
        labTitle: "Ricke Lab", 
        address: "1685 Highland Avenue Madison, WI 53705", 
        phone: "(608) 265-3278", 
        email: "ricke@urology.wisc.edu", 
    }
    // Defining a constant object labInfo with hardcoded values representing lab information.

    return labInfo; 
    // Returning the labInfo object from the function.
}

export type LabKeywords = { 
    type: string, 
    field: string, 
    keywords: string[] 
}
// Declaring a TypeScript type named LabKeywords. This type defines the structure for lab keywords with fields for type, field, and an array of keywords.

export function fetchLabKeywords() { 
    // Exporting a function named fetchLabKeywords that returns an object of type LabKeywords.

    const labKeywords = { 
        type: "research", 
        field: "urology", 
        keywords: [ 
            "urology", 
            "animal studies", 
            "pathogenesis" 
        ] 
    }
    // Defining a constant object labKeywords with hardcoded values for lab type, field of study, and an array of keywords.

    return labKeywords; 
    // Returning the labKeywords object from the function.
}

export type LabResources = { 
    title: string, 
    link: string 
}[] 
// Declaring a TypeScript type named LabResources which is an array of objects. Each object has a title and a link.

export function fetchResources() { 
    // Exporting a function named fetchResources that returns an array of objects of type LabResources.

    const resources: { title: string, link: string }[] = [ 
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
    ] 
    // Defining a constant array of objects named resources, where each object represents a resource with a title and a link.

    return resources; 
    // Returning the resources array from the function.
}

export function fetchReviews() { 
    // Exporting a function named fetchReviews that returns an array of review objects.

    const reviews: { rating: number, text: string, timestamp: string }[] = [ 
        { 
            rating: 5, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.", 
            timestamp: "2020-01-01" 
        }, 
        { 
            rating: 4.5, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.", 
            timestamp: "2020-01-01" 
        } 
    ] 
    // Defining a constant array of review objects named reviews. Each object contains a rating, review text, and a timestamp.

    return reviews; 
    // Returning the reviews array from the function.
}

export function fetchRating() { 
    // Exporting a function named fetchRating that returns a number representing the rating.

    const rating = 4.5; 
    // Defining a constant named rating with a hardcoded value of 4.5.

    return rating; 
    // Returning the rating value from the function.
}

export function fetchQuickApply() { 
    // Exporting a function named fetchQuickApply that returns a boolean value representing the quick apply status.

    const quickApply = true; 
    // Defining a constant named quickApply with a hardcoded boolean value of true.

    return quickApply; 
    // Returning the quickApply value from the function.
}

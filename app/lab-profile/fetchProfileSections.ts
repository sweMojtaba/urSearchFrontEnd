export type LabInfo = {
    university: string,
    department: string,
    labTitle: string,
    address: string,
    phone: string,
    email: string
}

export function fetchLabInfo(): LabInfo {
    const labInfo = {
        university: "University of Wisconsin–Madison",
        department: "Department of Urology",
        labTitle: "Ricke Lab",
        address: "1685 Highland Avenue Madison, WI 53705",
        phone: "(608) 265-3278",
        email: "ricke@urology.wisc.edu",
    }
    return labInfo;
}

export type LabKeywords = {
    type: string,
    field: string,
    keywords: string[]
}

export function fetchLabKeywords() {
    const labKeywords = {
        type: "research",
        field: "urology",
        keywords: [
            "urology",
            "animal studies",
            "pathogenesis"
        ]
    }
    return labKeywords;
}

export type LabResources = {
    title: string,
    link: string
}[]

export function fetchResources() {
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
    return resources;
}

export function fetchReviews() {
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
    return reviews;
}

export function fetchRating() {
    const rating = 4.5;
    return rating;
}

export function fetchQuickApply() {
    const quickApply = true;
    return quickApply;
}
export interface PersonalInfoInterface {
    name: string;
    degree: string;
    major: string;
    school: string;
    classYear: number;
    GPA: number;
    phone: number;
    email: string;
    GPAhidden: boolean;
}

export interface DocumentsInterface {
    documents: fileObject[];
}

export interface AffiliationsInterface {
    affiliations: affiliationsObject[];
}

export interface ExperiencesInterface {
    experiences: experienceObject[];
}

export interface ProjectsInterface {
    projects: projectObject[];
}

export interface VideoInterface {
    videos: fileObject[];
}

export interface SkillsInterface {
    skills: string[] | null;
}

export interface AccomplishmentsInterface {
    accomplishments: string[] | null;
}

export interface QuickApplyInterface {
    quickApply: boolean;
}

export interface applicationInterface {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    userId: string;
    jobSeekerId: number;
    labId: number;
    jobId: number;
    status: string;
    protectedVeteranType: number;
    disabilitiesType: number;
    resumeBlobName: string;
    coverLetterBlobName: string;
    videoBlobName: string;
    isVideoAttached: boolean;
}

export const defaultApplication = {
    ID: 0,
    CreatedAt: "",
    UpdatedAt: "",
    DeletedAt: null,
    userId: "",
    jobSeekerId: 0,
    labId: 0,
    jobId: 0,
    status: "",
    protectedVeteranType: 0,
    disabilitiesType: 0,
    resumeBlobName: "",
    coverLetterBlobName: "",
    videoBlobName: "",
    isVideoAttached: false,
};

interface fileObject {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    PersonID: number;
    userId: string;
    name: string;
    url: string;
}

interface experienceObject {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    PersonID: number;
    userId: string;
    name: string;
    role: string;
    start: string;
    end: string;
}

interface projectObject {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    PersonID: number;
    userId: string;
    name: string;
    description: string;
    start: string;
    end: string;
}

interface affiliationsObject {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    PersonID: number;
    userId: string;
    name: string;
    url: string;
}

// // TODO - Not sure what publication object looks like
// interface publicationsObject {}

export interface applicantInterface {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    userId: string;
    name: string;
    degree: string;
    major: string;
    school: string;
    classYear: number;
    GPA: number;
    phone: number;
    email: string;
    isQuickApplyActivated: boolean;
    GPAhidden: boolean;
    mostRecentResume: string;
    videoBlobName: string;
    files: fileObject[];
    videos: fileObject[];
    affiliations: affiliationsObject[];
    experiences: experienceObject[];
    projects: projectObject[];
    publications: string[];
    skills: string[];
    accomplishments: string[] | null;
}

export const defaultApplicant = {
    ID: 0,
    CreatedAt: "",
    UpdatedAt: "",
    DeletedAt: null,
    userId: "",
    name: "",
    degree: "",
    major: "",
    school: "",
    classYear: 0,
    GPA: 0,
    phone: 0,
    email: "",
    isQuickApplyActivated: false,
    GPAhidden: false,
    mostRecentResume: "",
    videoBlobName: "",
    files: [],
    videos: [],
    affiliations: [],
    experiences: [],
    projects: [],
    publications: [],
    skills: [],
    accomplishments: null,
};

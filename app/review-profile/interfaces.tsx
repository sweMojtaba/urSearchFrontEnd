// Interface defining the structure for personal information
export interface PersonalInfoInterface {
    name: string; // Full name of the person
    degree: string; // Degree obtained
    major: string; // Major field of study
    school: string; // School attended
    classYear: number; // Year of graduation
    GPA: number; // Grade Point Average
    phone: number; // Contact phone number
    email: string; // Contact email address
    GPAhidden: boolean; // Indicates if GPA is hidden (true or false)
}

// Interface defining the structure for documents
export interface DocumentsInterface {
    documents: fileObject[]; // Array of file objects
    resume: string; // URL or identifier for the resume
    coverLetter: string; // URL or identifier for the cover letter
    applicationId: string; // Application identifier
}

// Interface defining the structure for affiliations
export interface AffiliationsInterface {
    affiliations: affiliationsObject[]; // Array of affiliations objects
}

// Interface defining the structure for experiences
export interface ExperiencesInterface {
    experiences: experienceObject[]; // Array of experience objects
}

// Interface defining the structure for projects
export interface ProjectsInterface {
    projects: projectObject[]; // Array of project objects
}

// Interface defining the structure for videos
export interface VideoInterface {
    videos: fileObject[]; // Array of file objects representing videos
}

// Interface defining the structure for skills
export interface SkillsInterface {
    skills: string[] | null; // Array of skills or null if no skills
}

// Interface defining the structure for accomplishments
export interface AccomplishmentsInterface {
    accomplishments: string[] | null; // Array of accomplishments or null if no accomplishments
}

// Interface defining the structure for quick apply status
export interface QuickApplyInterface {
    quickApply: boolean; // Indicates if quick apply is activated (true or false)
}

// Interface defining the structure for an application
export interface applicationInterface {
    ID: number; // Unique identifier for the application
    CreatedAt: string; // Creation timestamp of the application
    UpdatedAt: string; // Last update timestamp of the application
    DeletedAt: string | null; // Deletion timestamp of the application (or null if not deleted)
    userId: string; // User identifier
    jobSeekerId: number; // Job seeker identifier
    labId: number; // Lab identifier
    jobId: number; // Job identifier
    status: string; // Current status of the application
    protectedVeteranType: number; // Type of protected veteran status
    disabilitiesType: number; // Type of disabilities status
    resumeBlobName: string; // Blob name of the resume
    coverLetterBlobName: string; // Blob name of the cover letter
    videoBlobName: string; // Blob name of the video
    isVideoAttached: boolean; // Indicates if a video is attached (true or false)
}

// Default values for an application
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

// Interface defining the structure for a file object
interface fileObject {
    ID: number; // Unique identifier for the file
    CreatedAt: string; // Creation timestamp of the file
    UpdatedAt: string; // Last update timestamp of the file
    DeletedAt: string | null; // Deletion timestamp of the file (or null if not deleted)
    PersonID: number; // Person identifier associated with the file
    userId: string; // User identifier
    name: string; // Name of the file
    url: string; // URL to access the file
}

// Interface defining the structure for an experience object
interface experienceObject {
    ID: number; // Unique identifier for the experience
    CreatedAt: string; // Creation timestamp of the experience
    UpdatedAt: string; // Last update timestamp of the experience
    DeletedAt: string | null; // Deletion timestamp of the experience (or null if not deleted)
    PersonID: number; // Person identifier associated with the experience
    userId: string; // User identifier
    name: string; // Name of the organization or experience
    role: string; // Role held during the experience
    start: string; // Start date of the experience
    end: string; // End date of the experience
}

// Interface defining the structure for a project object
interface projectObject {
    ID: number; // Unique identifier for the project
    CreatedAt: string; // Creation timestamp of the project
    UpdatedAt: string; // Last update timestamp of the project
    DeletedAt: string | null; // Deletion timestamp of the project (or null if not deleted)
    PersonID: number; // Person identifier associated with the project
    userId: string; // User identifier
    name: string; // Name of the project
    description: string; // Description of the project
    start: string; // Start date of the project
    end: string; // End date of the project
}

// Interface defining the structure for an affiliation object
interface affiliationsObject {
    ID: number; // Unique identifier for the affiliation
    CreatedAt: string; // Creation timestamp of the affiliation
    UpdatedAt: string; // Last update timestamp of the affiliation
    DeletedAt: string | null; // Deletion timestamp of the affiliation (or null if not deleted)
    PersonID: number; // Person identifier associated with the affiliation
    userId: string; // User identifier
    name: string; // Name of the affiliation
    url: string; // URL to access details about the affiliation
}

// // TODO - Not sure what publication object looks like
// interface publicationsObject {}

// Interface defining the structure for an applicant
export interface applicantInterface {
    ID: number; // Unique identifier for the applicant
    CreatedAt: string; // Creation timestamp of the applicant record
    UpdatedAt: string; // Last update timestamp of the applicant record
    DeletedAt: string | null; // Deletion timestamp of the applicant record (or null if not deleted)
    userId: string; // User identifier
    name: string; // Full name of the applicant
    degree: string; // Degree obtained by the applicant
    major: string; // Major field of study
    school: string; // School attended
    classYear: number; // Year of graduation
    GPA: number; // Grade Point Average
    phone: number; // Contact phone number
    email: string; // Contact email address
    isQuickApplyActivated: boolean; // Indicates if quick apply is activated (true or false)
    GPAhidden: boolean; // Indicates if GPA is hidden (true or false)
    mostRecentResume: string; // URL or identifier for the most recent resume
    videoBlobName: string; // Blob name of the video
    files: fileObject[]; // Array of file objects
    videos: fileObject[]; // Array of video file objects
    affiliations: affiliationsObject[]; // Array of affiliation objects
    experiences: experienceObject[]; // Array of experience objects
    projects: projectObject[]; // Array of project objects
    publications: string[]; // Array of publication identifiers or titles
    skills: string[]; // Array of skills
    accomplishments: string[] | null; // Array of accomplishments or null if no accomplishments
}

// Default values for an applicant
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

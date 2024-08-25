// Enum representing the possible states a user can be in
export enum UserState {
    NOT_LOGGED_IN = 0, // User is not logged in
    APPLICANT = 1,    // User is an applicant
    LAB = 2           // User is a lab
}

// Enum representing the possible roles a user can have
export enum RoleType {
    APPLICANT = "applicant", // Role type for applicants aka job seeker
    LAB = "lab"              // Role type for labs aka recruiter
}

// Function to get the opposite role type
export function getOtherRole(role: RoleType): RoleType {
    if (role === RoleType.APPLICANT) { // Check if the role is 'applicant'
        return RoleType.LAB; // Return 'lab' as the opposite role
    } else if (role === RoleType.LAB) { // Check if the role is 'lab'
        return RoleType.APPLICANT; // Return 'applicant' as the opposite role
    } else {
        throw new Error("Invalid role"); // Throw an error if the role is not recognized
    }
}

// Interface defining the structure of a User object
export interface User {
    name: string; // User's name
    state: UserState; // User's state, which must be one of the UserState enum values
}

// Interface defining the structure of the UserContext type
export interface UserContextType {
    user: User; // The current user object
    setUser: React.Dispatch<React.SetStateAction<User>>; // Function to update the user state
}

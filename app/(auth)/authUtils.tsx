import { RoleType } from "../context-utils"; 
// Import the RoleType enum from the context-utils file

export enum AuthType { 
    LOGIN = "login", 
    SIGNUP = "signup" 
    // Define an enumeration for authentication types with values 'login' and 'signup'
}

export function extractForm(event: React.FormEvent<HTMLFormElement>): { 
    username: string, 
    password: string, 
    role: RoleType, 
    termsCheck?: boolean 
} { 
    // Define a function to extract form data from a React form event
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value; 
    // Get the value of the 'username' input field
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value; 
    // Get the value of the 'password' input field
    const roleInput = (event.currentTarget.elements.namedItem('role') as HTMLInputElement).value; 
    // Get the value of the 'role' input field
    const termsCheck = (event.currentTarget.elements.namedItem('termsCheck') as HTMLInputElement)?.checked; 
    // Get the checked state of the 'termsCheck' input field, if it exists
    const role: RoleType = roleInput === "applicant" ? RoleType.APPLICANT : RoleType.LAB; 
    // Determine the role based on the 'role' input field value, mapping it to RoleType
    return { 
        username, 
        password, 
        role, 
        termsCheck 
        // Return an object containing the extracted form data
    }
}

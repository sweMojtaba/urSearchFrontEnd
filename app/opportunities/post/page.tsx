// TODO: Modify styling so that the grid templates create something workable on mobile.

"use client";
// Indicating that this file is intended for client-side execution in a Next.js application.

import { Button, Container } from "@/client-wrappers/bootstrap";
// Importing Button and Container components from the Bootstrap client-wrappers module for consistent styling and layout.

import Link from "next/link";
// Importing the Link component from Next.js for client-side navigation.

import styles from "./styles.module.scss";
// Importing module-specific styles from the "styles.module.scss" file.

import "../global_styles_override.scss";
// Importing global styles override for additional styling customizations.

import { useState, FormEvent, ChangeEvent } from "react";
// Importing React hooks and types for managing component state and handling events.

interface FormData {
    title: string;
    requirements: string[];
    description: string;
    responsibilities: string[];
    payRange: string;
    perks: string[];
    questions: string[];
    graduationYears: string[];
    hiddenRequirements: string[];
    minGPA: number;
    majors: string[];
    canBeDoneForCredit: boolean;
    remote: boolean;
}
// Defining a TypeScript interface for the form data structure used in the form submission.

export default function PostOpportunity() {
    // Exporting the default functional component named PostOpportunity.

    const [formData, setFormData] = useState<FormData>({
        // Initializing state for form data with default values.
        title: "",
        requirements: [],
        description: "",
        responsibilities: [],
        payRange: "",
        perks: [],
        questions: [],
        graduationYears: [],
        hiddenRequirements: [],
        minGPA: 0,
        majors: [],
        canBeDoneForCredit: false,
        remote: false,
    });

    // Individual state variables for various form inputs.
    const [qualification, setQualification] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [perk, setPerk] = useState("");
    const [customizedQuestion, setCustomizedQuestion] = useState("");
    const [hiddenRequirements, setHiddenRequirements] = useState("");
    const [preferredMajor, setPreferredMajor] = useState("");
    const [graduationYears, setGraduationYears] = useState("");
    const [minGPA, setMinGPA] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // Handling form submission.
        event.preventDefault(); // Preventing the default form submission behavior.

        // Basic validation checks for required fields.
        if (formData.title.length <= 0) {
            alert("Title required!");
            return;
        }
        if (formData.requirements.length <= 0) {
            alert("Qualifications required!");
            return;
        }
        if (formData.responsibilities.length <= 0) {
            alert("Responsibilities required!");
            return;
        }

        // Parsing and formatting additional form data.
        formData.graduationYears = graduationYears.split(",");
        const formattedGPA = parseFloat(minGPA);
        formData.minGPA = isNaN(formattedGPA) ? 0 : formattedGPA;

        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // Base URL for API requests (can be replaced with environment variable).

        const url = baseUrl + "api/job/me";
        const res = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (res.status === 200 && data.code === 0) {
            console.log("Successful post!");
        } else {
            console.log(data.msg);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Handling changes to input fields.
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleAddQualification = () => {
        // Adding a qualification to the formData.
        setFormData((prevData) => ({
            ...prevData,
            requirements: [...prevData.requirements, qualification],
        }));
        setQualification(""); // Clearing the input field after adding.
    };

    const handleAddResponsibility = () => {
        // Adding a responsibility to the formData.
        setFormData((prevData) => ({
            ...prevData,
            responsibilities: [...prevData.responsibilities, responsibility],
        }));
        setResponsibility(""); // Clearing the input field after adding.
    };

    const handleAddPerk = () => {
        // Adding a perk to the formData.
        setFormData((prevData) => ({
            ...prevData,
            perks: [...prevData.perks, perk],
        }));
        setPerk(""); // Clearing the input field after adding.
    };

    const handleAddCustomizedQuestion = () => {
        // Adding a customized question to the formData.
        setFormData((prevData) => ({
            ...prevData,
            questions: [...prevData.questions, customizedQuestion],
        }));
        setCustomizedQuestion(""); // Clearing the input field after adding.
    };

    const handleAddHiddenKeyword = () => {
        // Adding a hidden requirement to the formData.
        setFormData((prevData) => ({
            ...prevData,
            hiddenRequirements: [...prevData.hiddenRequirements, hiddenRequirements],
        }));
        setHiddenRequirements(""); // Clearing the input field after adding.
    };

    const handleAddPreferredMajor = () => {
        // Adding a preferred major to the formData.
        setFormData((prevData) => ({
            ...prevData,
            majors: [...prevData.majors, preferredMajor],
        }));
        setPreferredMajor(""); // Clearing the input field after adding.
    };

    return (
        <Container className="medium-content">
            {/* Rendering the Container component with a className of "medium-content" for layout and styling. */}
            
            <form className="medium-content" onSubmit={handleSubmit} style={{ margin: 0, maxWidth: "100%" }}>
                {/* Rendering the form with an onSubmit handler and inline styles for layout. */}
                
                <div className={styles.grid}>
                    {/* Rendering a div with className "grid" for layout styling. */}
                    
                    <div>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title*" />
                        {/* Input field for job title with a placeholder. */}
                        
                        <input type="text" name="qualifications" value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="Qualifications*" />
                        {/* Input field for qualifications with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddQualification}>
                            Add
                        </Button>
                        {/* Button to add qualifications. */}
                    </div>
                    
                    <div>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                        {/* Input field for job description with a placeholder. */}
                        
                        <input type="text" name="responsibilities" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} placeholder="Responsibilities*" />
                        {/* Input field for responsibilities with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddResponsibility}>
                            Add
                        </Button>
                        {/* Button to add responsibilities. */}
                    </div>
                    
                    <div>
                        <input type="text" name="payRange" value={formData.payRange} onChange={handleChange} placeholder="Pay Range" />
                        {/* Input field for pay range with a placeholder. */}
                        
                        <input type="text" name="perks" value={perk} onChange={(e) => setPerk(e.target.value)} placeholder="Perks" />
                        {/* Input field for perks with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddPerk}>
                            Add
                        </Button>
                        {/* Button to add perks. */}
                    </div>
                    
                    <div className={styles.checkbox_container}>
                        {/* Container for checkbox inputs. */}
                        
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Can be done for credit</label>
                            {/* Checkbox for credit options. */}
                        </div>
                        
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Remote</label>
                            {/* Checkbox for remote options. */}
                        </div>
                    </div>
                </div>
                
                <h2 className={styles.bebas_font}>Customized Parameters:</h2>
                {/* Header for customized parameters section. */}
                
                <div className={styles.grid}>
                    {/* Rendering a div with className "grid" for layout styling. */}
                    
                    <div id={styles.long}>
                        <input type="text" name="customizedQuestions" value={customizedQuestion} onChange={(e) => setCustomizedQuestion(e.target.value)} placeholder="Customized Questions:" />
                        {/* Input field for customized questions with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddCustomizedQuestion}>
                            Add
                        </Button>
                        {/* Button to add customized questions. */}
                    </div>
                    
                    <div>
                        <input type="text" name="graduationYears" value={graduationYears} onChange={(e) => setGraduationYears(e.target.value)} placeholder="Preferred Graduation Years" />
                        {/* Input field for preferred graduation years with a placeholder. */}
                        
                        <input type="text" name="hiddenKeywords" value={hiddenRequirements} onChange={(e) => setHiddenRequirements(e.target.value)} placeholder="Hidden Keywords" />
                        {/* Input field for hidden keywords with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddHiddenKeyword}>
                            Add
                        </Button>
                        {/* Button to add hidden keywords. */}
                    </div>
                    
                    <div>
                        <input type="text" name="minGPA" value={minGPA} onChange={(e) => setMinGPA(e.target.value)} placeholder="Minimum GPA" />
                        {/* Input field for minimum GPA with a placeholder. */}
                        
                        <input type="text" name="preferredMajors" value={preferredMajor} onChange={(e) => setPreferredMajor(e.target.value)} placeholder="Preferred Majors" />
                        {/* Input field for preferred majors with a placeholder. */}
                        
                        <Button className={styles.btn} onClick={handleAddPreferredMajor}>
                            Add
                        </Button>
                        {/* Button to add preferred majors. */}
                    </div>
                </div>
                
                <div id={styles.btn_grid}>
                    {/* Container for buttons with className "btn_grid". */}
                    
                    <Link href="/post-opportunity" className={styles.post_btn_container + " button-link"}>
                        <Button className={styles.post_btn}>Preview</Button>
                    </Link>
                    {/* Link to preview page with a button styled as "post_btn". */}
                    
                    <Button className={styles.post_btn} type="submit">
                        Post Opportunity
                    </Button>
                    {/* Submit button to post the opportunity. */}
                </div>
                
                <div id={styles.footer}>
                    {/* Footer section with className "footer". */}
                    
                    <h1>!</h1>
                    <h3>Hidden Keywords, are used in evaluation of applicants to determine their compatibility with the position. Add any keywords that you deem related to the position, and would help pick the best matches.</h3>
                </div>
            </form>
        </Container>
    );
}

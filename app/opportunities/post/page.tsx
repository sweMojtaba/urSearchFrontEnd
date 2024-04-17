"use client";

// TODO: Modify styling so that the grid templates create something workable on mobile.

import { Button, Container } from "@/client-wrappers/bootstrap";
import Link from "next/link";

import styles from "./styles.module.scss";
import "../global_styles_override.scss";
import { useState, FormEvent, ChangeEvent } from "react";

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

export default function PostOpportunity() {
    const [formData, setFormData] = useState<FormData>({
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
    const [qualification, setQualification] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [perk, setPerk] = useState("");
    const [customizedQuestion, setCustomizedQuestion] = useState("");
    const [hiddenRequirements, setHiddenRequirements] = useState("");
    const [preferredMajor, setPreferredMajor] = useState("");
    const [graduationYears, setGraduationYears] = useState("");
    const [minGPA, setMinGPA] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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

        formData.graduationYears = graduationYears.split(",");
        const formattedGPA = parseFloat(minGPA);
        formData.minGPA = isNaN(formattedGPA) ? 0 : formattedGPA;

        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
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
        if (res.status === 200 && data.code == 0) {
            console.log("Successful post!");
        } else {
            console.log(data.msg);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleAddQualification = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                requirements: [...prevData.requirements, qualification],
            };
        });
        setQualification("");
    };

    const handleAddResponsibility = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                responsibilities: [...prevData.responsibilities, responsibility],
            };
        });
        setResponsibility("");
    };

    const handleAddPerk = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                perks: [...prevData.perks, perk],
            };
        });
        setPerk("");
    };

    const handleAddCustomizedQuestion = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                perks: [...prevData.questions, customizedQuestion],
            };
        });
        setCustomizedQuestion("");
    };

    const handleAddHiddenKeyword = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                perks: [...prevData.hiddenRequirements, hiddenRequirements],
            };
        });
        setHiddenRequirements("");
    };

    const handleAddPreferredMajor = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                perks: [...prevData.majors, preferredMajor],
            };
        });
        setPreferredMajor("");
    };

    return (
        <Container className="medium-content">
            <form className="medium-content" onSubmit={handleSubmit} style={{ margin: 0, maxWidth: "100%" }}>
                <div className={styles.grid}>
                    <div>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title*" />
                        <input type="text" name="qualifications" value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder="Qualifications*" />
                        <Button className={styles.btn} onClick={handleAddQualification}>
                            Add
                        </Button>
                    </div>
                    <div>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                        <input type="text" name="responsibilities" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} placeholder="Responsibilities*" />
                        <Button className={styles.btn} onClick={handleAddResponsibility}>
                            Add
                        </Button>
                    </div>
                    <div>
                        <input type="text" name="payRange" value={formData.payRange} onChange={handleChange} placeholder="Pay Range" />
                        <input type="text" name="perks" value={perk} onChange={(e) => setPerk(e.target.value)} placeholder="Perks" />
                        <Button className={styles.btn} onClick={handleAddPerk}>
                            Add
                        </Button>
                    </div>
                    <div className={styles.checkbox_container}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Can be done for credit</label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Remote</label>
                        </div>
                    </div>
                </div>
                <h2 className={styles.bebas_font}>Customized Parameters:</h2>
                <div className={styles.grid}>
                    <div id={styles.long}>
                        <input type="text" name="customizedQuestions" value={customizedQuestion} onChange={(e) => setCustomizedQuestion(e.target.value)} placeholder="Customized Questions:" />
                        <Button className={styles.btn} onClick={handleAddCustomizedQuestion}>
                            Add
                        </Button>
                    </div>
                    <div>
                        <input type="text" name="graduationYears" value={graduationYears} onChange={(e) => setGraduationYears(e.target.value)} placeholder="Preferred Graduation Years" />
                        <input type="text" name="hiddenKeywords" value={hiddenRequirements} onChange={(e) => setHiddenRequirements(e.target.value)} placeholder="Hidden Keywords" />
                        <Button className={styles.btn} onClick={handleAddHiddenKeyword}>
                            Add
                        </Button>
                    </div>
                    <div>
                        <input type="text" name="minGPA" value={minGPA} onChange={(e) => setMinGPA(e.target.value)} placeholder="Minimum GPA" />
                        <input type="text" name="preferredMajors" value={preferredMajor} onChange={(e) => setPreferredMajor(e.target.value)} placeholder="Preferred Majors" />
                        <Button className={styles.btn} onClick={handleAddPreferredMajor}>
                            Add
                        </Button>
                    </div>
                </div>
                <div id={styles.btn_grid}>
                    <Link href="/post-opportunity" className={styles.post_btn_container + " button-link"}>
                        <Button className={styles.post_btn}>Preview</Button>
                    </Link>
                    <Button className={styles.post_btn} type="submit">
                        Post Opportunity
                    </Button>
                </div>
                <div id={styles.footer}>
                    <h1>!</h1>
                    <h3>Hidden Keywords, are used in evaluation of of applicants to determine their compatibility with the position. Add any keywords that you deem related to the position, and would help pick the best matches.</h3>
                </div>
            </form>
        </Container>
    );
}

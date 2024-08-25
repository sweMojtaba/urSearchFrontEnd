"use client"; // Indicates that this file uses client-side rendering

import ReviewProfile from "./assets/reviewProfile.svg"; // Import SVG image for profile picture
import { Rating } from "@smastrom/react-rating"; // Import Rating component from package
import '@smastrom/react-rating/style.css'; // Import CSS for Rating component
import styles from "./styles.module.scss"; // Import SCSS module for styling
import Image from "next/image"; // Import Image component from Next.js
import { LabInfo, LabKeywords, LabResources } from "./fetchProfileSections"; // Import data types or components
import { InfoCard } from "@/components/cards-and-items/cards"; // Import InfoCard component
import { SmallLi } from "@/components/cards-and-items/listItems"; // Import SmallLi component for list items
import { Button } from "react-bootstrap"; // Import Button component from React Bootstrap
import fakeResponse from "@/utils/fakeResponse"; // Import utility function for fake responses
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply"; // Import functionality for quick apply

// Component to display average rating
export function AvgRating({ rating }: { rating: number }) {
    return (
        <div className={styles.avgRating}>
            <Rating value={rating} readOnly={true} style={{ maxWidth: "12em" }} /> {/* Display rating */}
            <p>{rating} out of 5</p> {/* Display rating text */}
        </div>
    );
}

// Component to display a review with rating, text, and timestamp
export function Review({ data }: { data: { rating: number, text: string, timestamp: string } }) {
    return (
        <div className={styles.review}>
            <Image src={ReviewProfile} alt="profile picture" className={styles.profilePicture} /> {/* Display profile picture */}
            <div className={styles.reviewContent}>
                <div>
                    <Rating value={data.rating} readOnly={true} style={{ maxWidth: "10em" }} /> {/* Display review rating */}
                </div>
                <div>{data.text}</div> {/* Display review text */}
                <div>{data.timestamp}</div> {/* Display review timestamp */}
            </div>
        </div>
    );
}

// Component to display lab information
export function Info({ data }: { data: LabInfo }) {
    return (
        <InfoCard
            title={data.university} // Title of the info card
            editFunc={() => { console.log("TO-DO: edit") }} // Placeholder edit function
        >
            <p>{data.department}</p>
            <p>{data.address}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
        </InfoCard>
    );
}

// Component to display lab keywords
export function Keywords({ data }: { data: LabKeywords }) {
    return (
        <InfoCard
            title="Keywords" // Title of the info card
            editFunc={() => { console.log("TO-DO: edit") }} // Placeholder edit function
        >
            <SmallLi text={data.type + " Lab"} /> {/* Display lab type */}
            <SmallLi text={"Field of study: " + data.field} /> {/* Display field of study */}
            <SmallLi text={"Keywords: " + data.keywords.join(", ")} /> {/* Display keywords */}
        </InfoCard>
    );
}

// Component to display lab resources with links
export function Resources({ data }: { data: LabResources }) {
    return (
        <InfoCard
            title="Resources" // Title of the info card
            editFunc={() => { console.log("TO-DO: edit") }} // Placeholder edit function
        >
            {data.map((resource, i) => (
                <Button
                    key={i}
                    href={resource.link} // Link to resource
                >
                    {resource.title} {/* Display resource title */}
                </Button>
            ))}
        </InfoCard>
    );
}

// Enum for button text states
const buttonTextEnum: ButtonTextEnum = {
    ACTIVATED: "Activated",
    ACTIVATING: "Activating...",
    NOT_ACTIVATED: "Accept Quick Apply!" // Text for when quick apply is not activated
};

// Create button status from enum
const buttonStatus = createButtonStatus(buttonTextEnum);

// Component for Quick Apply functionality
export function QuickApply({ quickApply }: { quickApply: boolean }) {
    return (
        <QuickApplyTemplate
            initialStatus={quickApply ? buttonStatus.ACTIVATED : buttonStatus.NOT_ACTIVATED} // Set initial button status
            buttonStatus={buttonStatus} // Pass button status
            fetchFunction={fakeResponse} // Replace with the specific fetch function
            title="Accepting Quick Applications!" // Title of the Quick Apply section
            note="In addition to applicant&rsquo;s resume, and Profile information, Receive a Video, in which the applicants try to present themselves and impress you. The video can be used instead of an entry-level interview to judge and evaluate the applicant’s values and character." // Note explaining Quick Apply
        />
    );
}

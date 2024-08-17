"use client" 
// This directive indicates that this file is intended to be used in a client-side environment. It ensures that the code is executed on the client side rather than the server.

import ReviewProfile from "./assets/reviewProfile.svg" 
// Importing an SVG image file named reviewProfile.svg from the assets directory. This image will be used as a profile picture in the Review component.

import { Rating } from "@smastrom/react-rating" 
// Importing the Rating component from the @smastrom/react-rating package. This component is used to display star ratings.

import '@smastrom/react-rating/style.css'; 
// Importing the CSS stylesheet for the @smastrom/react-rating package to ensure proper styling of the Rating component.

import styles from "./styles.module.scss" 
// Importing the SCSS module named styles.module.scss. This file contains CSS styles scoped to this component, applied via class names.

import Image from "next/image"; 
// Importing the Image component from Next.js. This component optimizes image loading and handling for improved performance.

import { LabInfo, LabKeywords, LabResources } from "./fetchProfileSections"; 
// Importing data types or components LabInfo, LabKeywords, and LabResources from the fetchProfileSections module. These are used for rendering different sections of a lab profile.

import { InfoCard } from "@/components/cards-and-items/cards"; 
// Importing the InfoCard component from a local path. This component is used to display information in a card format.

import { SmallLi } from "@/components/cards-and-items/listItems"; 
// Importing the SmallLi component from a local path. This component is likely used to render small list items.

import { Button, Form } from "react-bootstrap"; 
// Importing Button and Form components from the react-bootstrap library. These components are used for building user interface elements with Bootstrap styles.

import fakeResponse from "@/utils/fakeResponse"; 
// Importing a utility function named fakeResponse from the utils directory. This function is used as a placeholder for making API requests.

import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus, ButtonStatusEnum } from "@/components/functionalities/quickApply"; 
// Importing several utilities related to the Quick Apply functionality: ButtonTextEnum for button text, QuickApplyTemplate for the UI component, createButtonStatus for button status management, and ButtonStatusEnum for button status types.

export function AvgRating({ rating }: { rating: number }) { 
// Defining and exporting a functional component named AvgRating that takes a rating prop of type number.

    return <div className={styles.avgRating}> 
    // Render a div with a class name of avgRating from the imported styles.

        <Rating value={rating} readOnly={true} style={{ maxWidth: "12em" }} /> 
        // Render the Rating component with the given rating value, set to readOnly to prevent user interaction. Styling the component with a maximum width of 12em.

        <p>{rating} out of 5</p> 
        // Display the numerical rating value with a text label "out of 5".
    </div>
}

export function Review({ data }: { data: { rating: number, text: string, timestamp: string } }) { 
// Defining and exporting a functional component named Review that takes a data prop with rating, text, and timestamp fields.

    return <div className={styles.review}> 
    // Render a div with a class name of review from the imported styles.

        <Image src={ReviewProfile} alt="profile picture" className={styles.profilePicture} /> 
        // Render an Image component with the imported ReviewProfile SVG, used as a profile picture. The image has a class name profilePicture for styling.

        <div className={styles.reviewContent}> 
        // Render a div with a class name of reviewContent to contain the review's content.

            <div>{data.timestamp}</div> 
            // Display the timestamp of the review.

            <div>{data.text}</div>   
            // Display the text content of the review.
        </div>

        <div> 
        // Render a div to contain the rating component.

            <Rating value={data.rating} readOnly={true} style={{ maxWidth: "10em", minWidth: "8.5em" }} /> 
            // Render the Rating component with the rating value from the data prop, set to readOnly. Styling with a maximum width of 10em and minimum width of 8.5em.
        </div>
    </div>
}

export function Info({ data }: { data: LabInfo }) { 
// Defining and exporting a functional component named Info that takes a data prop of type LabInfo.

    return <InfoCard
        title={data.university} 
        // Render an InfoCard component with the title set to the university from the data prop.
        editFunc={() => { console.log("TO-DO: edit") }} 
        // Provide an edit function that logs a placeholder message. This function is intended for future editing functionality.
    >
        <p style={{fontSize: "15px"}}>{data.department}</p> 
        // Render the department information with inline styling for font size.

        <p style={{fontSize: "15px"}}>{data.address}</p> 
        // Render the address information with inline styling for font size.

        <p style={{fontSize: "15px"}}>{data.phone}</p> 
        // Render the phone information with inline styling for font size.

        <p style={{fontSize: "15px"}}>{data.email}</p> 
        // Render the email information with inline styling for font size.
    </InfoCard>
}

export function Keywords({ data }: { data: LabKeywords }) { 
// Defining and exporting a functional component named Keywords that takes a data prop of type LabKeywords.

    return <InfoCard
        title="Keywords" 
        // Render an InfoCard component with the title "Keywords".
        editFunc={() => { console.log("TO-DO: edit") }} 
        // Provide an edit function that logs a placeholder message. This function is intended for future editing functionality.
    >
        <SmallLi text={data.type + " Lab"} /> 
        // Render a SmallLi component displaying the lab type.

        <SmallLi text={"Field of study: " + data.field} /> 
        // Render a SmallLi component displaying the field of study.

        <SmallLi text={"Keywords: " + data.keywords.join(", ")} /> 
        // Render a SmallLi component displaying the keywords as a comma-separated list.
    </InfoCard>
}

export function Resources({ data }: { data: LabResources }) { 
// Defining and exporting a functional component named Resources that takes a data prop of type LabResources.

    return <InfoCard
            title="Resources" 
            // Render an InfoCard component with the title "Resources".
            editFunc={() => { console.log("TO-DO: edit") }} 
            // Provide an edit function that logs a placeholder message. This function is intended for future editing functionality.
        >
            {data.map((resource, i) => 
            // Map over the data array to render a list of resource buttons.

                <Button
                    key={i}
                    href={resource.link}>
                    {resource.title}
                </Button>
                // Render a Button component for each resource with a link and title.
            )}
            <Form style={{marginTop: "100px"}}> 
            // Render a Form component with inline styling for margin-top.

                <Form.Group className="mb-3 line"> 
                // Render a Form.Group component with Bootstrap margin-bottom styling and a custom class name line.

                    <Form.Control type="text" placeholder="TITLE" id="title" name="title" required /> 
                    // Render a Form.Control component for entering a title. It is a required field.
                </Form.Group>

                <Form.Group className="mb-5 line"> 
                // Render another Form.Group component with Bootstrap margin-bottom styling and a custom class name line.

                    <Form.Control type="text" placeholder="LINK" id="link" name="link" required /> 
                    // Render a Form.Control component for entering a link. It is a required field.
                </Form.Group>

                <Button> 
                // Render a Button component for submitting the form.

                    Add 
                </Button>
            </Form>
        </InfoCard>
}

const buttonTextEnum: ButtonTextEnum = { 
// Declaring a constant object named buttonTextEnum with predefined button text values.

    ACTIVATED: "Activated", 
    ACTIVATING: "Activating...", 
    NOT_ACTIVATED: "Accept Quick Apply!" 
    // Text for the different states of the button.
}

const buttonStatus = createButtonStatus(buttonTextEnum); 
// Creating a button status object using the createButtonStatus function and the buttonTextEnum. This manages the button's various states based on the provided texts.

export function QuickApply({ quickApply }: { quickApply: { quickApply: boolean } }) { 
// Defining and exporting a functional component named QuickApply that takes a quickApply prop with a boolean field.

    quickApply.quickApply = !quickApply.quickApply 
    // Toggle the quickApply state value to switch between activated and not activated.

    return (
        <QuickApplyTemplate
            initialStatus={quickApply ? buttonStatus.ACTIVATED : buttonStatus.NOT_ACTIVATED} 
            // Render the QuickApplyTemplate component with initialStatus based on the current state of quickApply.
            buttonStatus={buttonStatus} 
            // Pass the buttonStatus object to manage button states.
            fetchFunction={fakeResponse} // Replace with the specific fetch function
            // Pass the fakeResponse function as a placeholder for the actual fetch function to handle quick apply requests.
            title="Accepting Quick Applications!" 
            // Set the title of the QuickApplyTemplate.
            note="In addition to applicant&rsquo;s resume, and Profile information, Receive a Video, in which the applicants try to present themselves and impress you. The video can be used instead of an entry-level interview to judge and evaluate the applicant’s values and character." 
            // Set a note explaining the purpose of the quick application process.
        />
    );
}

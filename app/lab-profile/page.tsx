import Image from "next/image";
// Importing the Image component from Next.js to handle optimized image rendering.

import { fetchLabInfo, fetchLabKeywords, fetchResources, fetchReviews, fetchRating, fetchQuickApply, LabKeywords } from "./fetchProfileSections";
// Importing functions and types from the fetchProfileSections module. These functions fetch lab-related data, and LabKeywords is a type used for lab keywords.

import Poster from "./assets/posterPlaceholder.png";
// Importing a placeholder image for the lab poster.

import SchoolIcon from "./assets/schoolIconPlaceholder.png";
// Importing a placeholder image for the school icon.

import { Button, Col, Container, Row } from "@/client-wrappers/bootstrap";
// Importing layout and UI components (Button, Col, Container, Row) from a client-wrapped Bootstrap module for consistent styling.

import { ActionableCard, InfoCard } from "@/components/cards-and-items/cards";
// Importing card components (ActionableCard, InfoCard) for displaying information and actions.

import styles from "./styles.module.scss";
// Importing a stylesheet (styles.module.scss) for component-specific styling.

import { AvgRating, Info, Keywords, QuickApply, Resources, Review } from "./client-side-components";
// Importing various client-side components (AvgRating, Info, Keywords, QuickApply, Resources, Review) to build the profile page.

export default function LabProfile() { 
    // Exporting the default functional component named LabProfile.

    const labName = "Ricke Lab"; 
    // Declaring a constant for the lab name.

    const labInfo = fetchLabInfo(); 
    // Fetching lab information using the fetchLabInfo function.

    const labKeywords: LabKeywords = fetchLabKeywords(); 
    // Fetching lab keywords using the fetchLabKeywords function and assigning them to a variable of type LabKeywords.

    const resources = fetchResources(); 
    // Fetching lab resources using the fetchResources function.

    const reviews = fetchReviews(); 
    // Fetching lab reviews using the fetchReviews function.

    const rating = fetchRating(); 
    // Fetching the lab rating using the fetchRating function.

    let quickApply = {quickApply: fetchQuickApply()}; 
    // Fetching the quick apply status using the fetchQuickApply function and storing it in an object.

    return <div className={styles.scrollPage}>
        {/* Rendering a div with a className of "scrollPage" for styling the container. */}
        
        <Image src={Poster} alt="poster of lab" className={styles.poster} />
        {/* Rendering the lab poster image with alt text and applying styling from the "poster" class. */}
        
        <Container className={styles.headerLineHolder}>
            {/* Rendering the Container component with a className of "headerLineHolder" for layout and styling. */}
            
            <Row className={styles.headerLine}>
                {/* Rendering a Row component with a className of "headerLine" for layout and styling. */}
                
                <Image src={SchoolIcon} alt="school icon" className={styles.schoolIcon} />
                {/* Rendering the school icon image with alt text and applying styling from the "schoolIcon" class. */}
                
                <h1 className={styles.header}>{labName}</h1>
                {/* Rendering the lab name as an h1 element with styling from the "header" class. */}
            </Row>
            
            <Row>
                {/* Rendering a Row component for layout. */}
                
                <Col md={6}>
                    {/* Rendering a Col component with a medium breakpoint of 6 for layout. */}
                    
                    <Info data={labInfo}/>
                    {/* Rendering the Info component with labInfo data as a prop. */}
                </Col>
                
                <Col md={6}>
                    {/* Rendering another Col component with a medium breakpoint of 6 for layout. */}
                    
                    <Keywords data={labKeywords} />
                    {/* Rendering the Keywords component with labKeywords data as a prop. */}
                </Col>
            </Row>
            
            <Row>
                {/* Rendering a Row component for layout. */}
                
                <Col md={4}>
                    {/* Rendering a Col component with a medium breakpoint of 4 for layout. */}
                    
                    <Resources data={resources} />
                    {/* Rendering the Resources component with resources data as a prop. */}
                </Col>
                
                <Col md={8}>
                    {/* Rendering another Col component with a medium breakpoint of 8 for layout. */}
                    
                    <Row>
                        {/* Rendering a nested Row component for layout. */}
                        
                        <Reviews reviews={reviews} rating={rating} />
                        {/* Rendering the Reviews component with reviews and rating data as props. */}
                    </Row>
                    
                    <Row>
                        {/* Rendering another nested Row component for layout. */}
                        
                        <Col md={6} className={styles.smallCard}>
                            {/* Rendering a Col component with a medium breakpoint of 6 and applying the "smallCard" class for styling. */}
                            
                            <PostNewOpportunity />
                            {/* Rendering the PostNewOpportunity component. */}
                        </Col>
                        
                        <Col md={6} className={styles.smallCard}>
                            {/* Rendering another Col component with a medium breakpoint of 6 and applying the "smallCard" class for styling. */}
                            
                            <QuickApply quickApply={quickApply}/>
                            {/* Rendering the QuickApply component with quickApply data as a prop. */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
        <h2>{quickApply && "! Activate Quick Applications, and save some time"}</h2>
        {/* Conditionally rendering an h2 element with a message based on the quickApply status. */}
    </div>
}

function Reviews({ reviews, rating }: { 
    reviews: { rating: number, text: string, timestamp: string }[], 
    rating: number 
}) { 
    // Declaring a functional component named Reviews that takes reviews and rating as props.

    return <div>
        {/* Rendering a div container for the Reviews component. */}
        
        <InfoCard
            title="Reviews"
        >
            {/* Rendering the InfoCard component with a title of "Reviews". */}
            
            <AvgRating rating={rating} />
            {/* Rendering the AvgRating component with the rating data as a prop. */}
            
            {reviews.map((review, i) => <Review key={i} data={review} />)}
            {/* Mapping over the reviews array and rendering a Review component for each review, using the index as the key. */}
            
            <Button>See All</Button>
            {/* Rendering a Button component with the text "See All". */}
        </InfoCard>
    </div>
}

function PostNewOpportunity() { 
    // Declaring a functional component named PostNewOpportunity.

    return <ActionableCard
        title="Post New Opportunities! &emsp;"
        buttonProps={{
            buttonText: "＞",
            href: "/opportunities/post"
        }}
    >
        {/* Rendering the ActionableCard component with a title and buttonProps for action handling. */}
        
        <p className='note' style={{visibility: 'hidden', fontSize: '12px'}}>
            {/* Rendering a paragraph element with className 'note', inline styles for visibility, and font size. */}
            
            In addition to applicant&rsquo;s resume, and Profile information, Receive a Video, in which the applicants try to present themselves and impress you. The video can be used instead of an entry-level interview to judge and evaluate the applicant’s values and character.
        </p>
        {/* The paragraph provides additional information about the quick application process. */}
    </ActionableCard>
}

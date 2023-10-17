import { Container, Button } from '@/client-wrappers/bootstrap';

import "./styles.scss";

export default function IdeaApplied() {
    return (
        <Container className="medium-container" id="container">
            <h2>
                Congrats! Your Idea has been submitted and the Ricke Lab team will get back to you with their feedback!
                <br/>
                Keep in mind that the ownership of your idea is protected by our legal team, and in case of any issues with your idea and collaboration, you can reach out to us.
            </h2>
            <Button>
                Back to Jobs Listings
            </Button>
        </Container>
    )
}
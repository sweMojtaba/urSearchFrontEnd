// TODO: Modify styling so that the grid templates create something workable on mobile.

import { Button, Container } from "@/client-wrappers/bootstrap";
import Link from "next/link";

import styles from "./styles.module.scss";
import "../global_styles_override.scss";

export default function PostOpportunity() {
    return (
        <Container className="medium-content">
            <div className={styles.grid}>
                <div>
                    <h3>Title*</h3>
                    <h3>Qualifications*</h3>
                    <Button className={styles.btn}>Add</Button>
                </div>
                <div>
                    <h3>Description</h3>
                    <h3>Responsibilities*</h3>
                    <Button className={styles.btn}>Add</Button>
                </div>
                <div>
                    <h3>Pay Range</h3>
                    <h3>Perks</h3>
                    <Button className={styles.btn}>Add</Button>
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
            <h2 className={styles.bebas_font}>
                Customized Parameters:
            </h2>
            <div className={styles.grid}>
                <div id={styles.long}>
                    <h3>Customized Questions:</h3>
                    <Button className={styles.btn}>Add</Button>
                </div>
                <div>
                    <h3>Preferred Graduation Years</h3>
                    <h3>Hidden Keywords</h3>
                    <Button className={styles.btn}>Add</Button>
                </div>
                <div>
                    <h3>Minimum GPA</h3>
                    <h3>Preferred Majors</h3>
                    <Button className={styles.btn}>Add</Button>
                </div>
            </div>
            <div id={styles.btn_grid}>
                <Link href="/post-opportunity" className={styles.post_btn_container
             + " button-link"}>
                    <Button className={styles.post_btn}>Preview</Button>
                </Link>
                <Link href="/post-open-to-idea" className={styles.post_btn_container + " button-link"}>
                    <Button className={styles.post_btn}>Post Opportunity</Button>
                </Link>
            </div>
            <div id={styles.footer}>
                <h1>!</h1>
                <h3>
                Hidden Keywords, are used in evaluation of of applicants to determine their compatibility with the position. Add any keywords that you deem related to the position, and would help pick the best matches.
                </h3>
            </div>
        </Container>
    )
}
"use client"

import ReviewProfile from "./assets/reviewProfile.svg"
import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css';
import styles from "./styles.module.scss"
import Image from "next/image";

export function Review({ data }: {
    data: {
        rating: number,
        text: string,
        timestamp: string
    }
}) {
    return <div className={styles.review}>
        <Image src={ReviewProfile} alt="profile picture" className={styles.profilePicture} />
        <div className={styles.reviewContent}>
            <div>
                <Rating value={data.rating} readOnly={true} style={{ maxWidth: "10em"}}/>
            </div>
            <div className={styles.text}>{data.text}</div>
            <div className={styles.timestamp}>{data.timestamp}</div>
        </div>
    </div>
}
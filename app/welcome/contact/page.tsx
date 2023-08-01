import ContactImg from "./contact.png";
import Item1 from "@/assets-common/item1.svg"
import Item2 from "@/assets-common/item2.svg"

import "./contact.scss"
import Image from "next/image";
import { ClientCol, ClientContainer, ClientRow } from "@/client-wrappers/bootstrap";

function ContactInfo({team, phone, email}: {team: string, phone: string, email: string}) {
    return <div className="contact-info">
        <div className="primary-line line line-start">
            <Image src={Item1} alt="item1"/>
            <p className="heading">{team}</p>
        </div>
        <div className="line line-start secondary-line">
            <Image src={Item2} alt="item2"/>
            <p className="text">Phone: {phone}</p>
        </div>
        <div className="line line-start secondary-line">
            <Image src={Item2} alt="item2"/>
            <p className="text">Email: {email}</p>
        </div>
    </div>
}

function Contact() {
    return <div id="slide">
        <ClientContainer>
            <ClientRow>
                <ClientCol lg={4}>
                    <ContactInfo
                        team="Technical Support"
                        email="tech@urSearch.com"
                        phone="+1 (608) 572 8750"
                    />
                </ClientCol>
                <ClientCol lg={4}>
                    <ContactInfo
                        team="Data & Marketing"
                        email="data@urSearch.com"
                        phone="+1 (608) 572 8750"
                    />
                </ClientCol>
            </ClientRow>
            <ClientCol lg={6}>
                <ContactInfo
                    team="Customer Support & Feedback"
                    email="customer@urSearch.com"
                    phone="+1 (608) 572 8750"
                />
            </ClientCol>
            <ClientCol lg={6}>
                <ContactInfo
                    team="Affiliates"
                    email="affiliates@urSearch.com"
                    phone="+1 (608) 572 8750"
                />
            </ClientCol>
        </ClientContainer>
        <Image src={ContactImg} alt="slide" className="fit-image"/>
    </div>
}

export default Contact;
import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { fetchDocuments, fetchGPAhidden, fetchPersonalInfo } from "./fetchProfileSections";
import { SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg"

export function PersonalInfo() {
    const {
        name,
        degree,
        major,
        school,
        classYear,
        GPA,
        phone,
        email
    } = fetchPersonalInfo();

    const { GPAhidden } = fetchGPAhidden();
    
    const cardProps: PassableInfoCardProps = {
        title: name,
        editFunc: () => { console.log("TO-DO: edit personal info") }
    }

    return <CardWithImg
        CardComponent={InfoCard}
        cardProps={cardProps}
        ImgSrc={Profile}
    >
        <p>{degree} {major}</p>
        <p>{school}</p>
        <p>class of {classYear}</p>
        <p className="stand-out">GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span></p>
        <p>phone: {phone}</p>
        <p>email: {email}</p>

    </CardWithImg>
}

export function Documents() {
    const documents = fetchDocuments()

    return <InfoCard
        title="Documents"
        editFunc={() => { console.log("TO-DO: edit documents") }}>
        {documents.map(document => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>
}




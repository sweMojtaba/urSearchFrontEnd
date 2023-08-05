import "./listItems.scss"
import Item1 from "@/assets-common/item1.svg"
import Image from "next/image";

export function SmallLi({ text, url }: { text: string, url: string }) {
    return <div className="line line-start small-li">
        <Image src={Item1} alt="item1" />
        <a href={url}>{text}</a>
    </div>
}


interface BigLiProps {
    title: string;
    subtitle: string;
    note: string; // used as time
    Img: React.FunctionComponent<any>;
}

export function BigLi({ title, subtitle, note, Img}: BigLiProps): JSX.Element {
    return <div className="line line-start big-li">
        <Img />
        <div className="main-line">
            <div className="main-item">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="note">{note}</div>
        </div>
        
    </div>
}
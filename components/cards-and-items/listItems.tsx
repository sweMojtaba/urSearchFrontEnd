import "./listItems.scss"
import Item1 from "@/assets/item1.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
    note: string;
    ImgSrc: StaticImport;
}

export function BigLi({ title, subtitle, note, ImgSrc}: BigLiProps): JSX.Element {
    return <div className="line line-start big-li">
        <Image src={ImgSrc} alt="image for list item" />
        <div className="main-line">
            <div className="main-item">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="note">{note}</div>
        </div>
        
    </div>
}
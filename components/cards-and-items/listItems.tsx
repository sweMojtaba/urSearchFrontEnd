import "./listItems.scss"
import Item1 from "@/assets/item1.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function SmallLi({ text, url }: { text: string, url?: string }) {
    return <div className="line line-start small-li">
        <Image src={Item1} alt="item1" />
        {url ? <a href={url}>{text}</a> : <span>{text}</span>}
    </div>
}

interface BigLiProps {
    title: string;
    subtitle: string;
    note: string;
    url?: string;
    ImgSrc: StaticImport | string;
}

function BigLiContent({ title, subtitle, note, ImgSrc }: BigLiProps) {
    return <div className="line line-start big-li">
        <Image src={ImgSrc} alt="image for list item" width={27} height={27} />
        <div className="main-line">
            <div className="main-item">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="note">{note}</div>
        </div>
    </div>
}

export function BigLi({ title, subtitle, note, url, ImgSrc }: BigLiProps): JSX.Element {
    if (url === undefined) {
        return <BigLiContent title={title} subtitle={subtitle} note={note} ImgSrc={ImgSrc} />
    } else {
        return <Link href={url} className="big-li-wrapper-with-link">
            <BigLiContent 
                title={title}
                subtitle={subtitle}
                note={note}
                ImgSrc={ImgSrc}
            />
        </Link>
    }
}

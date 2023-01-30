import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title:string;
  description:string;
  photo1:string;
  photo2:string;
  linktext:string|null;
  link:string|null;
}

export function Card(props: CardProps) {
  return (
    <div className="box text-center">
      <h1 className="box-title text-3xl sm:text-5xl">{props.title}</h1>
      <ul className="flex">
        <li className="m-2 w-full relative aspect-square" ><Image src={props.photo1} fill alt="" className="object-contain" /></li>
        {props.photo2?<li className="m-2 w-full relative aspect-square" ><Image src={props.photo2} fill alt="" className="object-cover" /></li>:null}
      </ul>
      <p>{props.description}</p>
      {props.link && props.linktext ? <Link href={props.link} className="text-3xl font-bold block pt-5">＞{props.linktext}</Link>:null}
    </div>
  )
}

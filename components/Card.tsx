import Image from "next/image";

type CardProps = {
  title:string;
  description:string;
  photo1:string;
  photo2:string;
}

export default function Card(props: CardProps) {
  return (
    <div className="box">
      <h1 className="box-title text-3xl sm:text-5xl">{props.title}</h1>
      <ul className="flex">
        <li className="m-2 w-1/2 relative aspect-square" ><Image src={props.photo1} fill alt="" className="" /></li>
        <li className="m-2 w-1/2 relative aspect-square" ><Image src={props.photo2} fill alt="" className="" /></li>
      </ul>
      <p>{props.description}</p>
    </div>
  )
}

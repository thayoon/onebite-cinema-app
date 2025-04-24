import { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";
import Image from "next/image";

export default function MovieItem(props: MovieData) {
  return (
    <Link
      className={style.container}
      href={`/movie/${props.id}`}
      scroll={false}
    >
      <Image
        src={props.posterImgUrl}
        alt={`${props.title}의 이미지`}
        width={300}
        height={450}
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      />
      <div className={style.title}>
        <p className={style.titleText}>{props.title}</p>
        <p className={style.subTitle}>{props.subTitle}</p>
      </div>
    </Link>
  );
}

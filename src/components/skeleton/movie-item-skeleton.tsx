import style from "./movie-item-skeleton.module.css";

export default function MovieItemSkeleton({ type }: { type: string }) {
  return (
    <div>
      <div className={`${style.posterImgUrl} ${style[type]}`}></div>
      <div className={style.title}>
        <div className={style.titleText}></div>
        <div className={style.subTitle}></div>
      </div>
    </div>
  );
}

import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButton from "./review-item-delete";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>
          {new Date(createdAt)
            .toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              weekday: "short",
            })
            .replace("(", "")
            .replace(")", "")}{" "}
          작성됨
        </div>
      </div>
      <div className={style.content}>{content}</div>
      <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      <hr />
    </div>
  );
}

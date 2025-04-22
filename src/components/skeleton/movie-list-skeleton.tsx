import MovieItemSkeleton from "./movie-item-skeleton";
import style from "./movie-item-skeleton.module.css";

export default function MovieListSkeleton({ count }: { count: number }) {
  return (
    <div className={count === 3 ? style.reco_conatiner : style.all_container}>
      {new Array(count).fill(0).map((_, idx) => (
        <MovieItemSkeleton
          key={`movie-item-skeleton-${idx}`}
          type={count === 3 ? "reco" : "all"}
        />
      ))}
    </div>
  );
}

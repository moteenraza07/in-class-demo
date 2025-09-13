import { Movie } from "../types";
type MovieCardProps = {
  movie: Movie;
};
export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div
      style={{
        border: "1px solid white",
        width: 300,
        height: 400,
        marginTop: 16,
      }}
    >
      <img
        src={movie.poster_path}
        alt={movie.title}
        style={{ height: 300, width: 250 }}
      />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <div>{movie.vote_average}</div>
    </div>
  );
}

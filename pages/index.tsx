import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { Movie } from "../types";
export default function Home() {
  const appName = "Movies App";
  const movie: Movie = {
    title: "Forest Gump",
    overview:
      "The presidencies of Kennedy and Johnson are shown through the eyes of an Alabama man with an iq of 75",
    poster_path:
      "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
  };
  const movie2 = {
    title: "God Father",
    overview: "lorem epsum",
    poster_path:
      "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "2003-02-06",
    vote_average: 9.8,
  };
  return (
    <div>
      <Navbar name={appName} />
      <MovieCard movie={movie} />
      <MovieCard movie={movie2} />
    </div>
  );
}

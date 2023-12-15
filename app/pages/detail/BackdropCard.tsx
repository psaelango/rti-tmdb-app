import { Movie, TvShow } from "../../types";
import { MOVIE_POSTER_BASE_URL } from "../../utils/constants";

export const BackdropCard: React.FC<Movie | TvShow> = (info) => {
  const { typeId, backdrop_path } = info;
  const imgAlt = typeId === "Movie" ? info.title : info.name;
  return (
    <img
      className="w-full h-full object-cover"
      src={`${MOVIE_POSTER_BASE_URL}/original/${backdrop_path}`}
      alt={imgAlt}
    />
  );
};

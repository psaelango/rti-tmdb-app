import { Movie, TvShow } from "../../types";
import { MOVIE_POSTER_BASE_URL } from "../../utils/constants";

interface Props {
  info: Movie | TvShow;
  onImageClick: (id: number) => void;
}

const PosterCard: React.FC<Props> = ({ info, onImageClick }) => {
  const { typeId, poster_path, id } = info;
  const imgAlt = typeId === "Movie" ? info.title : info.name;

  return (
    <img
      className="h-auto max-w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
      src={`${MOVIE_POSTER_BASE_URL}/w185/${poster_path}`}
      alt={imgAlt}
      onClick={() => onImageClick(id)}
    />
  );
};

export default PosterCard;

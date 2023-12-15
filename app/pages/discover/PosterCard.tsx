import { Movie } from "../../types";
import { MOVIE_POSTER_BASE_URL } from "../../utils/constants";

interface Props {
  info: Movie;
  onImageClick: (id: number) => void;
}

const PosterCard: React.FC<Props> = ({ info, onImageClick }) => {
  const { title, poster_path, id } = info;

  return (
    <img
      className="h-auto max-w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
      src={`${MOVIE_POSTER_BASE_URL}/w185/${poster_path}`}
      alt={title}
      onClick={() => onImageClick(id)}
    />
  );
};

export default PosterCard;

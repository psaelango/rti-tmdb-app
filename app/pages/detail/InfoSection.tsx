import { Movie, TvShow } from "../../types";

export const InfoSection: React.FC<Movie | TvShow> = (info) => {
  const { overview, vote_average, popularity } = info;
  return (
    <div>
      <span className="inline font-bold text-gray-700 dark:text-gray-300">
        Plot:
      </span>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {overview}
      </p>
      <div className="mb-4">
        <span className="inline font-bold text-gray-700 dark:text-gray-300">
          Release Date / Last Aired Date:
        </span>
        <div className="text-white text-l leading-6">
          {info.typeId === "Movie"
            ? info.release_date
            : info.last_air_date || "Unknown"}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Recent Popularity:
        </span>
        <div className="font-bold text-white text-sm italic leading-6 mt-3">
          {popularity || "Unknown"}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 dark:text-gray-300">
          User Rating:
        </span>
        <div className="text-white text-sm font-bold leading-6 mt-3">
          {vote_average.toFixed(1)} / 10
        </div>
      </div>
    </div>
  );
};

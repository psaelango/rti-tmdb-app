import { Movie } from "../../types";

export const InfoSection: React.FC<Movie> = (movie) => {
  const { release_date, vote_average, popularity } = movie;

  return (
    <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5 self-start">
      <div className="text-neutral-800 text-xl leading-6">
        {release_date || "Unknown"}
      </div>
      <div className="text-neutral-800 text-sm italic leading-6 mt-3">
        {popularity}
      </div>
      <div className="text-neutral-800 text-sm font-bold leading-6 mt-10">
        {vote_average.toFixed(1)} / 10
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="text-white text-center text-base font-medium leading-6 shadow-sm bg-stone-500 justify-center items-stretch mt-6 px-11 py-6 rounded-sm">
          Add to Favorite
        </div>
        <div className="text-white text-center text-base font-medium leading-6 shadow-sm bg-stone-500 justify-center items-stretch mt-6 px-11 py-6 rounded-sm">
          Add to Watchlist
        </div>
      </div>
    </div>
  );
};

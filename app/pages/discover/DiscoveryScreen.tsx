import { useLoaderData, useNavigate } from "@remix-run/react";
import { ApiResponse } from "../../types";

const DiscoveryScreen = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as ApiResponse;
  const movies = data.results || [];

  return (
    <div className="bg-white flex max-w-[375px] flex-col items-stretch pb-12">
      <div className="bg-neutral-800 flex w-full items-stretch justify-between gap-5 p-5">
        <div className="flex items-stretch justify-between gap-2">
          <div className="text-white text-xl font-bold leading-6 self-center grow whitespace-nowrap my-auto">
            Popular Movies
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8993bbf16cdd7b61be4bff82e956954f33c233402793e67350f09beb643977c?apiKey=01428c97297244d3842cd2633820c35e&"
          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="flex w-full flex-col items-stretch mt-6 mb-3 px-6">
        <div className="flex items-stretch justify-between gap-4">
          {movies.map((movie: any) => (
            <img
              key={movie.original_title}
              className="h-auto max-w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryScreen;

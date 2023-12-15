import React from "react";
import { Movie } from "../../types";
import { TrailerSection } from "./TrailerSection";
import { InfoSection } from "./InfoSection";

const DetailScreen: React.FC<Movie> = (movie) => {
  const { title, overview, poster_path } = movie;

  return (
    <div className="bg-white flex flex-col items-stretch max-w-6xl mx-auto l:mt-0 md:mt-2 sm:mt-10 mt-14">
      <div className="text-white text-xl font-medium leading-6 whitespace-nowrap shadow-sm bg-stone-500 w-full justify-center pl-4 pr-16 py-5 items-start">
        {title}
      </div>
      <div className="flex w-full flex-col items-stretch mt-6 mb-3 px-6">
        <div className="flex items-stretch justify-between gap-4">
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
            className="aspect-[0.68] object-contain object-center w-[115px] overflow-hidden shrink-0 max-w-full"
          />
          <InfoSection {...movie} />
        </div>
        <div className="text-neutral-500 text-sm font-medium leading-6 mt-8">
          {overview}
        </div>
        <TrailerSection />
      </div>
    </div>
  );
};

export default DetailScreen;

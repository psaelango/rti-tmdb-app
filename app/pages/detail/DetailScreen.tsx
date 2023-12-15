import React from "react";
import { Movie, TvShow } from "../../types";
import { FavoriteSVG, StarSVG } from "../../components/svg";
import { TrailerSection } from "./TrailerSection";
import { BackdropCard } from "./BackdropCard";
import { IconButton } from "../../components/buttons/IconButton";
import { InfoSection } from "./InfoSection";

const DetailScreen: React.FC<Movie | TvShow> = (info) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 flex flex-col items-stretch max-w-6xl mx-auto l:mt-0 md:mt-2 sm:mt-10 mt-14">
      <div className="text-white text-xl font-medium leading-6 whitespace-nowrap shadow-sm bg-stone-500 w-full justify-center pl-4 pr-16 py-5 items-start">
        {info.typeId === "Movie" ? info.title : info.name}
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <BackdropCard {...info} />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <IconButton
                  text="Add to Favorite"
                  Icon={<StarSVG className="w-6 h-6" fill="white" />}
                />
              </div>
              <div className="w-1/2 px-2">
                <IconButton
                  text="Add to Wishlist"
                  Icon={<FavoriteSVG className="w-6 h-6" />}
                />
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <InfoSection {...info} />
            <TrailerSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;

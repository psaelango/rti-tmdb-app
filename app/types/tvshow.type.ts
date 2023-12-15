type Genres = {
  id: number;
  name: string;
};

export interface TvShow {
  typeId: "TvShow";
  adult: boolean;
  backdrop_path: string;
  genres: Genres[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  name: string;
  original_name: string;
  first_air_date: string;
  last_air_date: string;
  homepage: string;
  in_production: boolean;
  next_episode_to_air: string;
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  tagline: string;
  type: string;
}

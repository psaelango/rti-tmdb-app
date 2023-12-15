import { Movie } from "./movie.type";
import { TvShow } from "./tvshow.type";

export interface ApiResponse {
  page: number;
  results: Movie[] | TvShow[];
  total_pages: number;
  total_results: number;
}

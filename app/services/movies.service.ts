import { APIService } from "./api.service";

class MoviesService extends APIService {
  protected apiKey: string;

  constructor() {
    super(process.env.API_URL || "");
    this.apiKey = process.env.API_KEY || "";
  }

  callApi(url: string) {
    return this.get(url, {
      params: {
        api_key: this.apiKey,
      },
    })
      .then((response) => {
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  getPopularMovies() {
    return this.callApi("/movie/popular");
  }

  getTopratedMovies() {
    return this.callApi("/movie/top_rated");
  }

  async getMovieInfo(movieId: string) {
    const apiUrl = `/movie/${movieId}`;
    const response = await this.callApi(apiUrl);
    response.typeId = "Movie";
    return response;
  }
}

export const moviesService = new MoviesService();

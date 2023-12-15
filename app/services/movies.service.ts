import { APIService } from "./api.service";

class MoviesService extends APIService {
  protected apiKey: string;

  constructor() {
    super(process.env.API_URL || "");
    this.apiKey = process.env.API_KEY || "";
  }

  getPopularMovies() {
    return this.get("/movie/popular", {
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

  getTopratedMovies() {
    return this.get("/movie/top_rated", {
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

  getMovieInfo(id: string) {
    return this.get(`/movie/${id}`, {
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
}

export const moviesService = new MoviesService();

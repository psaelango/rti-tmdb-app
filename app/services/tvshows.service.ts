import { APIService } from "./api.service";
class TvShowsService extends APIService {
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

  getPopularShows() {
    return this.callApi("/tv/popular");
  }

  getTopratedShows() {
    return this.callApi("/tv/top_rated");
  }

  async getShowInfo(showId: string) {
    const apiUrl = `/tv/${showId}`;
    const response = await this.callApi(apiUrl);
    response.typeId = "TvShow";
    return response;
  }
}

export const tvShowsService = new TvShowsService();

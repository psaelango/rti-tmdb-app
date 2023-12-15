import { moviesService } from "../services/movies.service";
import DiscoveryScreen from "../pages/discover/DiscoveryScreen";

export async function loader() {
  return moviesService
    .getPopularMovies()
    .then((response) => response)
    .catch(() => {
      throw new Response("Something went wrong!", { status: 500 });
    });
}

export default function PopularMovies() {
  return <DiscoveryScreen type="movie" />;
}

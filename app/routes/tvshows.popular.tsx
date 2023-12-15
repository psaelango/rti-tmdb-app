import DiscoveryScreen from "../pages/discover/DiscoveryScreen";
import { tvShowsService } from "../services/tvshows.service";

export async function loader() {
  return tvShowsService
    .getPopularShows()
    .then((response) => response)
    .catch(() => {
      throw new Response("Something went wrong!", { status: 500 });
    });
}

export default function PopularTvShows() {
  return <DiscoveryScreen type="tvshow" />;
}

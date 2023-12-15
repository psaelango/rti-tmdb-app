import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DetailScreen from "../pages/detail/DetailScreen";
import { tvShowsService } from "../services/tvshows.service";
import { Movie } from "../types";

export async function loader({ params }: LoaderFunctionArgs): Promise<any> {
  return tvShowsService
    .getShowInfo(params.showId || "")
    .then((response) => response)
    .catch(() => {
      throw new Response("Something went wrong!", { status: 500 });
    });
}

export default function TvShowInfo() {
  const data = useLoaderData<typeof loader>() as Movie;
  return <DetailScreen {...data} />;
}

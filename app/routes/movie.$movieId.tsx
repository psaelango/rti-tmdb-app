import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DetailScreen from "../pages/detail/DetailScreen";
import { moviesService } from "../services/movies.service";

export async function loader({ params }: LoaderFunctionArgs): Promise<any> {
  try {
    const response = await moviesService.getMovieInfo(params.movieId || "");
    return response;
  } catch (error: any) {
    throw new Response("Something went wrong!", { status: 500 });
  }
}

export default function MovieInfoPage() {
  const data = useLoaderData<typeof loader>();

  return <DetailScreen {...data} />;
}

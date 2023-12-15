import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { moviesService } from "../services/movies.service";

export async function loader({ params }: LoaderFunctionArgs): Promise<any> {
  try {
    const response = await moviesService.getMovieInfo(params.movieId || "");
    return response;
  } catch (error: any) {
    throw new Response("Something went wrong!", { status: 500 });
  }
}

export default function MovieDetails() {
  const data = useLoaderData<typeof loader>();
  const { title, overview } = data;
  return (
    <div className="bg-white flex max-w-[375px] flex-col items-stretch pb-12">
      <div className="bg-neutral-800 flex w-full items-stretch justify-between gap-5 p-5">
        <div className="flex items-stretch justify-between gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/068f986670a18db317d58b2d23e7a1a2be0b923b626f0432c8178568635636ab?apiKey=01428c97297244d3842cd2633820c35e&"
            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-xl font-bold leading-6 self-center grow whitespace-nowrap my-auto">
            Movie details
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8993bbf16cdd7b61be4bff82e956954f33c233402793e67350f09beb643977c?apiKey=01428c97297244d3842cd2633820c35e&"
          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="text-white text-xl font-medium leading-6 whitespace-nowrap shadow-sm bg-stone-500 w-full justify-center pl-4 pr-16 py-5 items-start">
        {title}
      </div>
      <div className="flex w-full flex-col items-stretch mt-6 mb-3 px-6">
        <div className="flex items-stretch justify-between gap-4">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02a330fae2972dc0a787d370fc3c4c029f913f246f57f621c710515574ab9f67?apiKey=01428c97297244d3842cd2633820c35e&"
            className="aspect-[0.68] object-contain object-center w-[115px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5 self-start">
            <div className="text-neutral-800 text-xl leading-6">2015</div>
            <div className="text-neutral-800 text-sm italic leading-6 mt-3">
              120 mins
            </div>
            <div className="text-neutral-800 text-sm font-bold leading-6 mt-10">
              8.1/10
            </div>
            <div className="text-white text-center text-base font-medium leading-6 shadow-sm bg-stone-500 justify-center items-stretch mt-6 px-11 py-6 rounded-sm">
              Add to Favorite
            </div>
          </div>
        </div>
        <div className="text-neutral-500 text-sm font-medium leading-6 mt-8">
          {overview}
        </div>
        <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide mt-9">
          TRAILERS
        </div>
        <div className="bg-neutral-200 shrink-0 h-px mt-2.5" />
        <div className="bg-neutral-50 flex items-stretch justify-between gap-4 mt-4 pl-4 pr-20 py-4 rounded-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ea483efa9e7b34fe4bea09395265fdfc6018957c20a77980f9c4d8968ffedf?apiKey=01428c97297244d3842cd2633820c35e&"
            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide self-center grow whitespace-nowrap my-auto">
            Play trailer 1
          </div>
        </div>
        <div className="bg-neutral-50 flex items-stretch justify-between gap-4 mt-2 pl-4 pr-20 py-4 rounded-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ea483efa9e7b34fe4bea09395265fdfc6018957c20a77980f9c4d8968ffedf?apiKey=01428c97297244d3842cd2633820c35e&"
            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-neutral-500 text-sm font-medium leading-6 tracking-wide self-center grow whitespace-nowrap my-auto">
            Play trailer 2
          </div>
        </div>
      </div>
    </div>
  );
}

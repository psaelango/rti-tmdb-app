import { useLoaderData, useNavigate } from "@remix-run/react";
import { ApiResponse } from "../../types";
import PosterCard from "./PosterCard";
import { useContext } from "react";
import { DiscoverContext } from "~/context";

const DiscoveryScreen = ({ type }: { type: string }) => {
  const { setDiscovering } = useContext(DiscoverContext);
  const navigate = useNavigate();
  const data = useLoaderData() as ApiResponse;
  const items = data.results || [];
  const onItemelect = (id: number) => {
    setDiscovering({
      category: "",
      type: type === "movie" ? "Movie Info" : "TV Show Info",
    });
    navigate(`/${type}/${id}`);
  };

  return (
    <section className="xl:mt-10 md:mt-12 sm:mt-15 mt-20">
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg transition-all hover:scale-105 hover:bg-background-muted"
          >
            <PosterCard info={item} onImageClick={onItemelect} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryScreen;

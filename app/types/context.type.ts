export interface DiscoverInfo {
  type: "Movies" | "Tv Shows" | "Movie Info" | "TV Show Info";
  category: "Popular" | "Top Rated" | "";
}

export interface DiscoverContextType {
  discovering: DiscoverInfo;
  setDiscovering: (info: DiscoverInfo) => void;
}

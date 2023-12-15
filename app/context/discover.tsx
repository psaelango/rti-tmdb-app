import { createContext } from "react";
import { DiscoverContextType, DiscoverInfo, ChildAsProps } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

const initialContext: DiscoverContextType = {
  discovering: {} as DiscoverInfo,
  setDiscovering: () => {},
};

export const DiscoverContext = createContext(initialContext);

export function DiscoverProvider({ children }: ChildAsProps) {
  const [discovering, setDiscovering] = useLocalStorage<DiscoverInfo>(
    "Discover",
    {
      type: "Movies",
      category: "Popular",
    }
  );

  return (
    <DiscoverContext.Provider
      value={{
        discovering,
        setDiscovering,
      }}
    >
      {children}
    </DiscoverContext.Provider>
  );
}

import InfiniteScroll from "react-infinite-scroller";
import { Species } from "./Species";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSpecies } from "../services/links";

const initialUrl = "https://swapi.py4e.com/api/species/";

export function InfiniteSpecies() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["sw-species"],
    queryFn: ({ pageParam = initialUrl }) => fetchSpecies(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.next || undefined;
    },
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error {error.toString()}</div>;
  return (
    <>
      {isFetching && <div className="loading">Fetching...</div>}
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) fetchNextPage();
        }}
        hasMore={hasNextPage}
        initialLoad={false}
      >
        {data.pages.map((pageData) =>
          pageData.results.map((specie, index) => (
            <Species
              key={index}
              name={specie.name}
              averageLifespan={specie.averageLifespan}
              language={specie.language}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { useInfiniteQuery } from "react-query";
import Dropdown from "./Dropdown";
import { links } from "./data";
import Media from "./Media";
import "./show.css";

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1200: 2,
};

function Show() {
  const fetchPhotos = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=${
        pageParam != 1 ? "10" : "100"
      }`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery("photos", fetchPhotos, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    });

  return (
    <div className="show min-h-1500 mx-auto  w-full max-w-screen-2xl px-4">
      <div className="flex bar justify-between items-center w-full py-3 capitalize">
        <div>
          <span className="text-lg leading-22 font-semibold">
            Free Stock Photos
          </span>
        </div>
        <Dropdown text="trending" path="/" data={links} />
      </div>

      <InfiniteScroll
        dataLength={data?.pages?.length || 1}
        hasMore={hasNextPage}
        loader={
          <Loader
            type="ThreeDots"
            color="#000"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        }
        next={fetchNextPage}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.pages?.map((page) =>
            page.results.map((image) => <Media key={image.id} media={image} />)
          )}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}

export default Show;

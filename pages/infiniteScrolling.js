import UseBookSearch from "./../components/UseBookSearch";
import { useState, useEffect } from "react";

export default function InfiniteScrolling() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { loading, books, errors, hasMore } = UseBookSearch(query, page);

  function searchHandler(e) {
    setQuery(e.target.value);
    setPage(1);
  }

  return (
    <div>
      <input type="text" onChange={searchHandler}></input>
      <UseBookSearch />
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}

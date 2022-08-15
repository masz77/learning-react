import { useEffect, useState } from "react";
import axios from "axios";

export default function UseBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancelReq;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancelReq = c)),
    })
      .then((res) => {
        setLoading(false);
        setHasMore(res.data.docs.length > 0);
        setBooks((prevBooks) => {
          return [...prevBooks, res.data.docs.map((b) => b.title)];
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setErrors(true);
      });

    return () => cancelReq();
  }, [query, pageNumber]);
  return { loading, books, errors, hasMore };
}

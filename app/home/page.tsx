"use client";

import { fetchAdminBlogListHandler } from "@/services/todo/todo";
import React, { useCallback, useEffect, useState } from "react";

const HomeContainer = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [getallBlogs, setallBlogs] = useState<any>({
    loading: false,
    data: null,
  });

  const fetchBlogs: () => Promise<void> = useCallback(async () => {
    if (true) {
      await setallBlogs({ loading: true, data: null });
      await fetchAdminBlogListHandler().then((res) => {
        console.log("ressss", res);
        if (res?.status === 200) {
          setallBlogs({
            loading: false,
            data: res?.data,
          });
        } else {
          setallBlogs({
            loading: false,
            data: null,
          });
        }
      });
    }
  }, []);
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBlogs]);
  return (
    <>
      {getallBlogs?.data?.map((item: any, index: any) => {
        return (
          <div key={index}>
            <h5>{item?.name}</h5>
          </div>
        );
      })}
      {
        getallBlogs?.data?.length>0 &&(
          <pre>
          <code>{JSON.stringify(getallBlogs, null, 4)}</code>
        </pre>

        )
      }
     
    </>
  );
};

export default HomeContainer;

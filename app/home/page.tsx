"use client"

import React, { useEffect, useState } from "react";

const HomeContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fullstack-nextjs-starter-g1nn-9o4m3sgm1-khaairs-projects.vercel.app/api/todo"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);
  return <h5 className="text-[red]">Home here</h5>;
};

export default HomeContainer;

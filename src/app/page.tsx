"use client";

import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [catImage, setCatImage] = useState<string>(
    "https://cdn2.thecatapi.com/images/6gj.jpg"
  );

  const fetchCatImage = async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const result = await res.json();
      console.log(result);
      setCatImage(result[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>猫画像アプリ</h1>
      <img src={catImage} alt="猫" width={500} height="auto" />
      <button
        style={{
          display: "inline-block",
          marginTop: "3rem",
        }}
        onClick={fetchCatImage}
      >
        今日の猫さん
      </button>
    </div>
  );
};

export default Home;

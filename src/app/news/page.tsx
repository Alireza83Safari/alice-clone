import NewsCategories from "@/container/news-page/news-categories/news-categories";
import NewsContainer from "@/container/news-page/news-container/news-container";
import NewsHeader from "@/container/news-page/news-header/news-header";
import React from "react";

export default function page() {
  return (
    <>
      <NewsHeader />
      <NewsCategories />
      <NewsContainer />
    </>
  );
}

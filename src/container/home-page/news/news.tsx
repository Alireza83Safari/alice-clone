"use client";
import React from "react";
import "./news.scss";
import NewsTemplate from "@/components/news-template/news-template";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { News as NewsType } from "@/types/news";

type NewsProps = {
  news: NewsType[];
};

const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <section className="news">
      <div className="news-container">
        <h1 className="news-title">اخبار و تازه‌ها</h1>
        <div className="news-slider">
          <Swiper
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper"
            modules={[Pagination]}
            pagination
            loop
          >
            {news?.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsTemplate
                  id={item.id}
                  subTitle={item.subTitle}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;

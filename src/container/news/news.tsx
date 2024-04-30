"use client";
import React from "react";
import "./news.scss";
import NewsTemplate from "./news-template/news-template";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const News = () => {
  return (
    <section className="news">
      <div className="news-container">
        <h1 className="news-title">اخبار و تازه‌ها</h1>
        <div className="news-slider">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsTemplate
                subtitle={["۰۲ اردیبهشت ۱۴۰۳", "اخبار و تازه‌ها"]}
                title="راه‌اندازی گلخانه ۲۰ هکتاری سرچین عالیس"
                description="مدیرکشاورزی هلدینگ عالیس گفت: اقدامات ابتدایی برای افتتاح گلخانه 20 هکتاری در شرکت کشت و صنعت سرچین در دست اقدام بوده و امید می‌رود با اختصاص تسهیلات در کوتاه‌ترین زمان […]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;

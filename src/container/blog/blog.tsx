"use client";
import React from "react";
import "./blog.scss";
import BlogTemplate from "@/components/blog-template/blog-template";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        <h1 className="blog-title">بلاگ عالیس</h1>
        <div className="blog-grid">
          <div className="blog-big">
            <div>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </div>
          </div>
          <div className="blog-small">
            <div>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </div>
            <div>
              <BlogTemplate
                title="طرز تهیه آب سیر"
                image="/images/blog/528223-430x242.webp"
                category="نوشیدنی"
              />
            </div>
            <div>
              <BlogTemplate
                title="طرز تهیه شیر چایی"
                image="/images/blog/4242452-430x242.webp"
                category="نوشیدنی"
              />
            </div>
            <div>
              <BlogTemplate
                title="طرز تهیه آب هویج"
                image="/images/blog/carrot-juice-430x242.webp"
                category="نوشیدنی"
              />
            </div>
          </div>
        </div>

        <div className="blog-slider">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogTemplate
                title="طرز تهیه چای مراکشی"
                image="/images/blog/4639636-430x242.webp"
                category="نوشیدنی"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;

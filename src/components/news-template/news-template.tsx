import React from "react";
import "./news-template.scss";
import Link from "next/link";
import { News } from "@/types/news";

const NewsTemplate = ({ id, subTitle, title, description }: News) => {
  return (
    <section className="news-template">
      <Link href={`/news?newsId=${id}`}>
        <div className="news-template-subtitle">
          {subTitle?.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <h2 className="news-template-title">{title}</h2>
        <p className="news-template-description">{description}</p>
      </Link>
    </section>
  );
};

export default NewsTemplate;

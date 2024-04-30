import React from "react";
import "./news-template.scss";

type NewsTemplateProps = {
  subtitle: string[];
  title: string;
  description: string;
};

const NewsTemplate: React.FC<NewsTemplateProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <section className="news-template">
      <div className="news-template-subtitle">
        {subtitle?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <h2 className="news-template-title">{title}</h2>
      <p className="news-template-description">{description}</p>
    </section>
  );
};

export default NewsTemplate;

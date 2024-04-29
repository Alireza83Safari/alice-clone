import Image from "next/image";
import React from "react";
import "./blog-template.scss";

type BlogTemplateProps = {
  title: string;
  image: string;
  category: string;
};

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  title,
  image,
  category,
}) => {
  return (
    <section className="blog-template">
      <div className="blog-image-container">
        <p className="blog-category">{category}</p>
        <Image
          src={image}
          alt="juice image"
          width={700}
          height={700}
          className="blog-image"
        />
      </div>
      <h2>{title}</h2>
    </section>
  );
};

export default BlogTemplate;

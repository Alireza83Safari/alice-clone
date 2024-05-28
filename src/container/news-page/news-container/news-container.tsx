import NewsTemplate from "@/components/news-template/news-template";
import "./news-container.scss";
import { newsData } from "@/data/data";

const NewsContainer = () => {
  return (
    <section className="news-container">
      {newsData?.map((item) => (
        <NewsTemplate {...item} />
      ))}
    </section>
  );
};

export default NewsContainer;

import Link from "next/link";
import "./news-categories.scss";

const NewsCategories = () => {
  return (
    <div className="news-categories">
      <div className="news-categories-title">دسته‌بندی</div>
      <div className="news-categories-item">
        <Link href="/news/">اخبار مالی</Link>
      </div>
    </div>
  );
};

export default NewsCategories;

import "./news-header.scss";

const NewsHeader = () => {
  return (
    <div className="news-header">
      <h1 className="news-title">اخبار و تازه‌ها</h1>

      <div className="news-input-container">
        <input
          type="text"
          className="news-input"
          placeholder="جستجو در اخبار و تازه‌های عالیس"
        />
        <img src="/icons/search.svg" alt="" className="news-icon" />
      </div>
    </div>
  );
};

export default NewsHeader;

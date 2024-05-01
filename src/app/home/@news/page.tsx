import News from "@/container/home-page/news/news";
import { newsData } from "@/data/data";

export default function page() {
  return <News news={newsData} />;
}

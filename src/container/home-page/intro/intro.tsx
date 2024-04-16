import Image from "next/image";
import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-title">
          <h1>هلدینگ عالیس</h1>
          <p>بزرگترین تولید‌کننده انواع نوشیدنی در ایران</p>
          <button>مشاهده محصولات</button>
        </div>
        <div className="intro-motion">
          <div className="right-motion">
            <Image
              width={300}
              height={183}
              src="/images/motion/cloud2-5.webp"
              alt=""
              className="cloud-img"
            />

            <Image
              width={600}
              height={600}
              src="/images/motion/alis1.webp"
              alt=""
              className="intro-img"
            />

            <Image
              width={600}
              height={600}
              src="/images/motion/alis1_bg.webp"
              alt=""
              className="intro-bg"
            />
          </div>
          <div className="left-motion">
            <Image
              width={250}
              height={150}
              src="/images/motion/cloud1-4.webp"
              alt=""
              className="cloud-img"
            />

            <Image
              width={700}
              height={700}
              src="/images/motion/alis2_bg.webp"
              alt=""
              className="intro-bg"
            />
            <Image
              width={700}
              height={700}
              src="/images/motion/alis2.webp"
              alt=""
              className="intro-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

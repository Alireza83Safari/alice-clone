import Image from "next/image";
import "./about.scss";
import Link from "next/link";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <Image
            src="/images/about/anim1.webp"
            width={600}
            height={600}
            alt=""
            className="alis-img"
          />
          <img src="/images/about/anim3.webp" alt="mint" className="mint" />
        </div>
        <div className="about-content">
          <h1 className="about-title">هلدینگ عالیس</h1>
          <p className="about-subtitle">
            عالیس در کنار تولید محصولات باکیفیت، نگاهی جدی به حفظ محیط ‌زیست و
            بالا بردن سطح سلامت مصرف‌کنندگان محصولاتش دارد.
          </p>
          <p className="about-desc">
            گروه کارخانجات تولیدی عالیس با تکیه بر دانش فنی و بهترین
            تکنولوژی‌های روز دنیا و نیز تولید محصولاتی با بالاترین کیفیت و
            استانداردهای جهانی توانسته است سهم قابل توجهی از بازار کشورهای منطقه
            در حوزه نوشیدنی را به خود اختصاص دهد.
          </p>
          <Link href="/about-us/" className="about-more">
            بیشتر بدانید
          </Link>
          <div className="about-options">
            <div className="green">
              <b>تولید مکانیزه</b>
            </div>
            <div>
              <b>توزیع سراسری</b>
            </div>
            <div className="green">
              <b>محصولات صادراتی</b>
            </div>
            <div>
              <b>بهترین مواد اولیه</b>
            </div>
            <div className="green">
              <b>تکنولوژی روز</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

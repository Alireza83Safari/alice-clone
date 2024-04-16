import Image from "next/image";
import "./tagline.scss";

const Tagline = () => {
  return (
    <section className="tagline">
      <div className="tagline-container">
        <div className="tagline-image">
          <span className="bg"></span>
          <Image
            src="/images/tagline/alis5.webp"
            width={400}
            height={400}
            alt="alis"
            className="alice-image"
          />
          <Image
            src="/images/tagline/X-Ray-Gold.webp"
            width={400}
            height={400}
            alt="X-Ray-Gold"
            className="xray-gold"
          />
          <Image
            src="/images/tagline/X-Ray.webp"
            width={400}
            height={400}
            alt="X-Ray"
            className="xray"
          />
        </div>
        <div className="tagline-content">
          <h1 className="tagline-title">نوشیدنی انرژی‌زا ایکس‌ری</h1>
          <p className="tagline-desc">
            نوشیدنی انرژی‌زا ایکس‌ری با بهره‌گیری از تکنولوژی روز دنیا و مواد
            مقوی تائورین، ویتامین‌های ب‌2، ب‌3، ب‌5، ب‌6، ب12، کافئین و
            اینوزیتول، بدون نگهدارنده، با کیفیت عالی و قیمت مناسب تولید و در
            قوطی‌های 250 سی‌سی عرضه می‌شود.
          </p>
          <span className="tagline-more">اطلاعات بیشتر</span>
          <div className="tagline-options">
            <div>
              <span className="options-vitamin">B5</span>
              <span className="options-title">Vitamin</span>
            </div>
            <div>
              <span className="options-vitamin">B6</span>
              <span className="options-title">Vitamin</span>
            </div>
            <div>
              <span className="options-vitamin">B12</span>
              <span className="options-title">Vitamin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tagline;

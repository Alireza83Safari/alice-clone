import Image from "next/image";
import Link from "next/link";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-description">
            <h2>عالیس برای خانواده</h2>
            <p>
              گروه کارخانه‌جات تولیدی عالیس، یکی از بزرگ‌ترین تولیدکنندگان انواع
              نوشیدنی در کشور است. این گروه تولیدی، در سال 1384 با هدف تولید
              فرآورده‌های لبنی پاستوریزه، در زمینی به وسعت ۱۰ هکتار واقع در شهرک
              صنعتی چناران آغاز به کار کرد.
            </p>
          </div>
          <div className="footer-top-address">
            <h2>0513187</h2>
            <p>
              مشهد، بلوار احمد آباد، خیابان طالقانی، نبش طالقانی ۳، ساختمان
              عالیس
            </p>
            <div className="social-container">
              <Image
                src="/images/footer/icon-1.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
              <Image
                src="/images/footer/instagram.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
              <Image
                src="/images/footer/twiter.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
              <Image
                src="/images/footer/linkedin.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
              <Image
                src="/images/footer/telegram.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
              <Image
                src="/images/footer/message.svg"
                alt=""
                width={36}
                height={36}
                className="social-img"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <Image
            src="/images/footer/logo.svg"
            alt=""
            width={155}
            height={80}
            className="logo"
          />

          <div className="footer-menu">
            <h3>دسترسی مهم</h3>
            <ul>
              <li>
                <Link href="/jobs/">فرصت‌های شغلی</Link>
              </li>
              <li>
                <Link href="/contact-us/">ارتباط با ما</Link>
              </li>
              <li>
                <Link href="/about-us/">درباره ما</Link>
              </li>
              <li>
                <Link href="/export/">صادرات</Link>
              </li>
              <li>
                <Link href="/bourse/">امور سهامداران</Link>
              </li>
              <li>
                <Link href="/sub-corps/">شرکت‌های زیر‌مجموعه</Link>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <h3>محصولات</h3>
            <ul>
              <li>
                <Link href="/products?category=all/">همه محصولات</Link>
              </li>
              <li>
                <Link href="/products?category=water/">آب‌معدنی</Link>
              </li>
              <li>
                <Link href="/products?category=energy-drink/">
                  نوشیدنی انرژی زا
                </Link>
              </li>
              <li>
                <Link href="/products?category=fruit-juice/">آبمیوه‌‌ها</Link>
              </li>
              <li>
                <Link href="/products?category=carbonated-juice/">
                  آبمیوه‌های گازدار
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <ul>
              <li>
                <Link href="/products?category=dough/">دوغ‎‌ها</Link>
              </li>
              <li>
                <Link href="/products?category=non-alcoholic-beer/">
                  ماءالشعیرها
                </Link>
              </li>
              <li>
                <Link href="/products?category=soft-drinks/">نوشابه‌‌ها</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <span>
            <b>©</b>تمامی حقوق مادی و معنوی این سایت برای هلدینگ عالیس محفوظ
            ‌می‌باشد.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

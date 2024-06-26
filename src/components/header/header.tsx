"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./header.scss";

const Header = () => {
  const [isShowPorudtcsMenu, setShowPorudtcsMenu] = useState(false);
  const [isShowMoreMenu, setShowMoreMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 170) {
        setScrolling(false);
      }
      if (window.scrollY > 170) {
        setScrolling(true);
      }
      if (window.scrollY > 600) {
        setScrolling(false);
      }
      scrollRef.current === window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${scrolling ? "scrolled" : ""} ${
        window.scrollY < 200 ? "smallest-than-100" : ""
      }`}
    >
      <Link href="/" className="logo-container">
        <img src="/images/logo.svg" alt="" />
      </Link>

      <div className={`header-menu ${showMenu ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/bourse" className="header-menu-link">
              امور سهامداران
            </Link>
          </li>

          <li>
            <Link href="/blog" className="header-menu-link">
              بلاگ
            </Link>
          </li>

          <li>
            <Link href="/news" className="header-menu-link">
              اخبار و تازه‌ها
            </Link>
          </li>

          <li>
            <div
              className="header-menu-title"
              onClick={() => setShowPorudtcsMenu(!isShowPorudtcsMenu)}
            >
              محصولات
            </div>
            <div
              className={`header-menu-item ${isShowPorudtcsMenu ? "open" : ""}`}
            >
              <Link href="/products/mineral-water/">آب‌معدنی</Link>
              <Link href="/products/energy-drink/">نوشیدنی انرژی‌زا</Link>
              <Link href="/products/fruit-juice/">آبمیوه‌‌ها</Link>
              <Link href="/products/carbonated-juices/">آبمیوه‌های گازدار</Link>
              <Link href="/products/dough/">دوغ‎‌ها</Link>
              <Link href="/products/milk/">شیرها</Link>
              <Link href="/products/non-alcoholic-beer/">ماءالشعیرها</Link>
              <Link href="/products/soft-drinks/">نوشابه‌‌ها</Link>
              <Link href="/products/all/">همه</Link>
            </div>
          </li>

          <li>
            <div
              className="header-menu-title"
              onClick={() => setShowMoreMenu(!isShowMoreMenu)}
            >
              و بیشتر
            </div>

            <div className={`header-menu-item ${isShowMoreMenu ? "open" : ""}`}>
              <Link href="/jobs/">فرصت‌های شغلی</Link>
              <Link href="/export/">صادرات</Link>
              <Link href="/sub-corps/">شرکت‌های زیر‌مجموعه</Link>
              <Link href="/about-us/">درباره ما</Link>
              <Link href="/contact-us/">ارتباط با ما</Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="header-left-menu">
        <Link href="#">
          <div
            className="image-container"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <img src="/icons/earth.svg" alt="earth" className="earth-icon" />
          </div>
          {showLanguages && (
            <div className="languages">
              <div className="language-item">
                <div className="language-info">
                  <p>EN</p>
                  <span>English</span>
                </div>
                <span className="language-coming-soon">به زودی</span>
              </div>
              <div className="language-item">
                <div className="language-info">
                  <p>RU</p>
                  <span>Russian</span>
                </div>
                <span className="language-coming-soon">به زودی</span>
              </div>
              <div className="language-item">
                <div className="language-info">
                  <p>AR</p>
                  <span>Arabic</span>
                </div>
                <span className="language-coming-soon">به زودی</span>
              </div>
            </div>
          )}
        </Link>

        <Link href="/products/">
          <div className="image-container">
            <img src="/icons/juice.svg" alt="juice" className="juice-icon" />
          </div>
          <span className="tooltip">محصولات</span>
        </Link>

        <Link href="/contact-us/">
          <div className="image-container">
            <img src="/icons/letter.svg" alt="letter" className="letter-icon" />
          </div>
          <span className="tooltip">تماس با ما</span>
        </Link>
        <span
          className={` burger-menu ${showMenu ? "open" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        ></span>
      </div>
    </header>
  );
};

export default Header;

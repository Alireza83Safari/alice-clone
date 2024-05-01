import React from "react";
import "./intro.scss";
import Image from "next/image";
import Link from "next/link";

const BourseIntro = () => {
  return (
    <section className="bourse-intro">
      <div className="bourse-intro-container">
        <div className="bourse-intro-title">
          <h1>عالیس در بورس</h1>
          <span>امور سهامداران</span>
          <button>
            <Link href="https://www.csdiran.ir/" target="_blank">
              ورود به پنل بورس
            </Link>
          </button>
        </div>

        <div className="bourse-intro-motion">
          <Image
            src="/images/bourse/coin1.webp"
            alt=""
            width={250}
            height={250}
            className="c-1"
          />
          <Image
            src="/images/bourse/coin2.webp"
            alt=""
            width={250}
            height={250}
            className="c-2"
          />
          <Image
            src="/images/bourse/coin1.webp"
            alt=""
            width={250}
            height={250}
            className="c-3"
          />
          <Image
            src="/images/bourse/coin2.webp"
            alt=""
            width={650}
            height={650}
            className="c-4"
          />
          <Image
            src="/images/bourse/coin1.webp"
            alt=""
            width={550}
            height={550}
            className="c-5"
          />
        </div>
      </div>
    </section>
  );
};

export default BourseIntro;

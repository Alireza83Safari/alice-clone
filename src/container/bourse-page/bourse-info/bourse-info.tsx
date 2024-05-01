import Image from "next/image";
import Link from "next/link";
import "./bourse-info.scss";

const BourseInfo = () => {
  return (
    <section className="bourse-info">
      <div className="bourse-info-category">
        <ul className="bourse-info-list">
          <li className="bourse-info-list-item">
            <Link href="" className="bourse-info-list-link">
              عالیس در بورس
            </Link>
          </li>
          <li className="bourse-info-list-item">
            <Link href="" className="bourse-info-list-link">
              عالیس در کدال
            </Link>
          </li>
          <li className="bourse-info-list-item">
            <Link href="" className="bourse-info-list-link">
              گزارش مالی
            </Link>
          </li>
          <li className="bourse-info-list-item">
            <Link href="" className="bourse-info-list-link">
              اعضای هیئت مدیره و کمیته‌های تخصصی
            </Link>
          </li>
          <li className="bourse-info-list-item">
            <Link href="" className="bourse-info-list-link">
              زمان‌بندی و نحوه دریافت سود
            </Link>
          </li>
        </ul>
      </div>
      <div className="bourse-info-image">
        <Image
          src="/images/bourse/bourse.jpeg"
          alt="bourse"
          width={700}
          height={400}
        />
      </div>
    </section>
  );
};

export default BourseInfo;

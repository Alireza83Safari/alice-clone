import React from "react";
import "./contact-us.scss";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">ارتباط با ما</h1>
      <div className="contact-content">
        <div className="contact-form">
          <div>
            <label htmlFor="">
              نام <span>الزامی</span>
            </label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">
              شماره تماس <span>الزامی</span>
            </label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">
              متن پیام <span>الزامی</span>
            </label>
            <textarea name="" id=""></textarea>
          </div>

          <button className="contact-form-submit">ارسال</button>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <Image
              width={34}
              height={34}
              src="/images/contact/phone.svg"
              alt=""
            />
            <div>
              <p>شماره تماس</p>
              <p>0513187</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Image
              width={34}
              height={34}
              src="/images/contact/message.svg"
              alt=""
            />
            <div>
              <p>آدرس ایمیل</p>
              <p>info@alis.ir</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Image
              width={34}
              height={34}
              src="/images/contact/route.svg"
              alt=""
            />
            <div>
              <p>آدرس</p>
              <p>
                مشهد، بلوار احمد آباد، خیابان طالقانی، نبش طالقانی ۳، ساختمان
                عالیس
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

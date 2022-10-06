import React from "react";
import image from "../../assets/images/pic_sample1.png";
import image1 from "../../assets/images/pic_sample.png";
import icon1 from "../../assets/svg/olive-wreath-icon.svg";
import icon2 from "../../assets/svg/heart_icon.svg";
import icon3 from "../../assets/svg/linkedin_icon.svg";
import Container from "../../components/container/Container"
import "./aboutUs.style.scss";
const AboutUs = () => {
  return (
    <div>
      <header className="Header">
        <h1>درباره ما</h1>
      </header>
      <Container>
      <div className="imgtext">
        <img
          className="ImageCircle"
          src={image}
          width="300px"
          height="300px"
          alt=""
        />
        <div className="content">
          <li>داستان شرکت را به اشتراک بگذارد</li>
          <p>
            اجازه دهید صفحه درباره ما بگوید شرکت چگونه شروع به کار کرده است. یک
            روایت کوتاهی را به اشتراک بگذارید که انگیزه‌ای برای تشکیل شرکت بوده
            است. یک نوار زمان (timeline) از آنچه که شرکت انجام داده، ارائه کنید.
            در این صفحه بیان کنید که چرا شرکت شما در مورد آنچه که انجام می‌دهید
            پر اشتیاق است و اجازه دهید تا افراد با مطالعه این صفحه تا حد بیشتری
            با شما و نقاط قوتی که شرکت شما با سایر رقبا در حوزه کاری خود دارد،
            آشنا شوند. مشتریان دوست دارند وضعیت یک کسب و کار را درک کنند.
          </p>
        </div>
      </div>

      <div className="imgtext">
        <div className="content">
          <li>تصویر و بیوگرافی</li>
          <p>
            حداقل یک تصویر و بیوگرافی از هر کدام از عوامل اجرایی شرکت آپلود
            کنید. اگر شرکت کوچک است اینکار را با همه کارکنان آن انجام دهید. یک
            بیوگرافی نشاط آور تولید کنید بدان معنا که کمی خلاق باشد. همچنین
            می‌توانید تصاویری از محیط شرکت و یا کارخانه، عکس از رویدادهای مهم که
            در آن شرکت کرده‌اید مانند نمایشگاه‌ها و همایش‌ها قرار دهید تا در
            برقراری ارتباط و شناخت از شرکت تأثیر زیادی را داشته باشد.
          </p>
          <br/>
        </div>
        <img
          className="ImageCircle"
          src={image1}
          width="300px"
          height="300px"
          alt=""
        />
      </div>
      <div className="Features">
        <div className="Feature">
          <img src={icon1} width="50px" height="50px" alt="" />
          <h3>
              یک ویژگی
          </h3>
          <p>
              از ویژگی های منحصر به فرد شرکت بگید
          </p>
        </div>
        <div className="Feature">
          <img src={icon2} width="50px" height="50px" alt="" />
          <h3>
              ویژگی دوست داشتنی
          </h3>
          <p>
             از ویژگی های همه پسند
          </p>
        </div>
        <div className="Feature">
          <img src={icon3} width="50px" height="50px" alt="" />
          <h3>
              ارتباط
          </h3>
          <p>
             از راه های ارتباطی خود بگویید
          </p>
        </div>
      </div>
      </Container>

    </div>
  );
};

export default AboutUs;

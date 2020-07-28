import React from "react";
import Header from "./header";
import Footer2 from "./footer2";

const takemd = () => {
  return (
    <div>
      <title>Take medicine</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่เกี่ยวกับการรับประทานยา</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>
              这药饭前吃还是饭后吃？
              <br />
              Zhè yào fàn qián chī hái shì fàn hòu chī?
              <br />
              ยานี้รับประทานก่อนอาหารหรือหลังอาหารคะ?
            </li>
          </ul>
          <ul>
            <li>
              一天吃三次，一次两粒。
              <br />
              Yì tiān chī sān cì, yí cì liǎng lì.
              <br />
              หนึ่งวันทาน 3 ครั้ง ครั้งละ 2 เม็ด
            </li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default takemd;

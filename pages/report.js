import React from "react";
import Header from "./header";
import Footer from "./footer";

const report = () => {
  return (
    <div>
      <title>Report</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่ผู้ป่วยมักใช้ในการบอกอาการให้แพทย์ทราบ</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>
              我的头很痛。 <br />
              Wǒ de tóu hěn tòng.
              <br />
              ผมปวดหัวมากเลยครับ
            </li>
          </ul>
          <ul>
            <li>
              他拉肚子了。
              <br />
              Tā lādùzi le.
              <br />
              เขาท้องเสียครับ
            </li>
          </ul>
          <ul>
            <li>
              我发烧了。 <br />
              Wǒ fāshāo le.
              <br />
              ผมมีไข้ครับ
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              我的头很晕。 <br />
              Wǒ de tóu hěn yūn.
              <br />
              ฉันเวียนหัวมากค่ะ
            </li>
          </ul>
          <ul>
            <li>
              我这样很多天了。
              <br />
              Wǒ zhèyàng hěnduō tiānle. <br />
              ผมเป็นแบบนี้มาหลายวันแล้ว
            </li>
          </ul>
          <ul>
            <li>
              他晕过去了。
              <br />
              Tā yūn guòqùle. <br />
              เขาเป็นลมแล้ว
            </li>
          </ul>
          <ul>
            <li>
              我看不见了。
              <br />
              Wǒ kàn bùjiànle.
              <br />
              ฉันมองไม่เห็นแล้ว
            </li>
          </ul>
          <ul>
            <li>
              我被蛇咬了。 <br />
              Wǒ bèi shé yǎole.
              <br />
              ผมถูกงูกัดครับ
            </li>
          </ul>
          <ul>
            <li>
              我觉得全身都疼。
              <br />
              Wǒ juédé quánshēn dōu téng.
              <br />
              ฉันรู้สึกปวดไปทั้งตัว
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default report;

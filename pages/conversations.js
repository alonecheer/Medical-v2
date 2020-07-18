import React from "react";
import Header from "./header";
import Footer from "./footer";
const conversations = () => {
  return (
    <div>
      <title>Concersation</title>
      <Header />
      <div className="container">
        <div className="title-conversation">
          <h2>“看病”常用汉语</h2>
          <p>ประโยคภาษาจีนที่ใช้บ่อยแบบง่าย ๆ เวลาไปหาหมอ</p>
        </div>

        <div className="conversation">
          <p>医生询问病情 หมอสอบถามอาการป่วยของคนไข้</p>
          <ul>
            <li>你哪儿不舒服？</li>
            <li>nĭ năr bù shū fu?</li>
            <li>หนี หน่า ปู้ ซู ฝุ</li>
            <li>คุณไม่สบายตรงไหน (อาการเป็นยังงัย)</li>
            <li>What’s the matter with you?</li>
          </ul>
          <span className="vocabulary">คำศัพท์</span>
          <span className="vocabulary-dt">舒服 shū fu สบาย</span>
        </div>

        <div className="conversation">
          <ul>
            <li>你心脏有什么毛病？</li>
            <li>nĭ xīn zàng yŏu shénme máobìng?</li>
            <li>หนี่ ซิน จ้าง โหย่ว เสิน เมอ เหมาปิ้ง</li>
            <li>หัวใจของคุณมีอะไรผิดปกติ?</li>
            <li>What’s wrong with your heart?</li>
          </ul>
          <span className="vocabulary">คำศัพท์</span>
          <span className="vocabulary-dt">心脏 xīn zàng หัวใจ ,</span>
          <span className="vocabulary-dt">毛病 máobìng ผิดปกติ</span>
        </div>

        <div className="conversation">
          <ul>
            <li>什么时候开始痛的？</li>
            <li>shénme shíhòu kāi shĭ tòng de ?</li>
            <li>เสินเมอ สือ โฮ่ว คาย สื่อ ท้ง เตอ</li>
            <li>เริ่มปวดเมื่อไหร่</li>
            <li>When did the pain start?</li>
          </ul>
          <span className="vocabulary">คำศัพท์</span>
          <span className="vocabulary-dt">痛 tong ปวด / เจ็บ</span>
        </div>

        <div className="conversation">
          <ul>
            <li>你这样有多久了？</li>
            <li>nĭ zhè yàng yŏu duō jiŭ le ?</li>
            <li>หนี่ เจ้อ ย่าง โหย่ว ตัว จิ่ว เลอ</li>
            <li>คุณเป็นอย่างนี้มานานแล้วหรือยัง</li>
            <li>How long have you been like this?</li>
          </ul>
        </div>
        <div className="conversation-last">
          <ul>
            <li>你患这病有多久了？</li>
            <li>nĭ huàn zhè bìng yŏu duō jiŭ le?</li>
            <li>หนี่ ฮว้าน เจ้อ ปิ้ง โหย่ว ตัว จิ่ว เลอ</li>
            <li>คุณป่วยเป็นโรคนี้มานานเท่าไหร่แล้ว</li>
            <li>How long have you had it?</li>
          </ul>
          <span className="vocabulary">คำศัพท์</span>
          <span className="vocabulary-dt">
            患这病 huàn zhè bìng ป่วยเป็นโรคนี้
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default conversations;

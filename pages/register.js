import React from "react";
import Header from "./header";
import Footer from "./footer";

const register = () => {
  return (
    <div>
      <title>Register</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่ใช้ในขั้นตอนการลงทะเบียน</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>
              请先在挂号处挂号。
              <br />
              Qǐng xiān zài guàhào chù guàhào. <br />
              กรุณาลงทะเบียนที่แผนกลงทะเบียนก่อนนะคะ
            </li>
          </ul>

          <ul>
            <li>
              有病历卡吗？
              <br />
              Yǒu bìnglìkǎ ma?
              <br />
              มีบัตรผู้ป่วยไหมคะ?
            </li>
          </ul>

          <ul>
            <li>
              请在这张表上填上你的姓名、年龄和地址。
              <br />
              Qǐng zài zhè zhāng biǎo shàng tián shàng ní de xìngmíng, niánlíng hé dìzhǐ.
              <br />
              กรุณากรอกชื่อ อายุ และที่อยู่ ที่แบบฟอร์มนี้ด้วยค่ะ
            </li>
          </ul>

          <ul>
            <li>
              你过敏什么些药吗？
              <br />
              Nǐ guò mǐn shénme xiē yào ma?
              <br />
              คุณแพ้ยาอะไรบ้างหรือเปล่า?
            </li>
          </ul>
          <ul>
            <li>
              请坐一会，等叫你的名字
              <br />
              Qǐng zuò yí huìr, děng jiào nǐ de míng zi.
              <br />
              กรุณานั่งรอเรียกชื่อสักครู่นะคะ
            </li>
          </ul>
          <ul>
            <li>
              挂号处在哪里？
              <br />
              Guàhào chù zài nǎlǐ?
              <br />
              ลงทะเบียนที่ไหนครับ?
            </li>
          </ul>
          <ul>
            <li>
              请给我一张挂号单。 <br />
              Qǐng gěi wǒ yī zhāng guàhào dān.
              <br />
              ขอแบบฟอร์มลงทะเบียนหน่อยครับ
            </li>
          </ul>
          <ul>
            <li>
              你有医院的病人身份卡吗？
              <br />
              Nǐ yǒu yīyuàn de bìngrén shēnfèn kǎ ma?
              <br />
              คุณมีบัตรประจำตัวผู้ป่วยไหมคะ?
            </li>
          </ul>
          <ul>
            <li>
              您是第一次来这里看病吗？
              <br />
              Nín shì dì yī cì lái zhèlǐ kànbìng ma?
              <br />
              คุณมาโรงพยาบาลนี้ครั้งแรกหรือครับ?
            </li>
          </ul>
          <ul>
            <li>
              外国人可以在这里挂号吗？
              <br />
              Wàiguó rén kěyǐ zài zhèlǐ guàhào ma?
              <br />
              คนต่างชาติลงทะเบียนที่นี่ได้ไหมครับ
            </li>
          </ul>
          <ul>
            <li>
              只有护照可以登记挂号吗？ <br />
              Zhǐyǒu hùzhào kěyǐ dēngjì guàhào ma?
              <br />
              มีแต่พาสปอร์ตลงทะเบียนได้ไหมครับ?
            </li>
          </ul>
          <ul>
            <li>
              您想看哪个科的医生？ <br />
              Nín xiǎng kàn nǎgè kē de yīshēng?
              <br />
              คุณอยากดูหมอแผนกไหนคะ?
            </li>
          </ul>
          <ul>
            <li>
              我还要等多久？ <br />
              Wǒ hái yào děng duōjiǔ?
              <br />
              ผมยังต้องรอนานเท่าไหร่ครับ ?
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default register;

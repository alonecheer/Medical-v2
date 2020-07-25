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
            <li>请先在挂号处挂号。</li>
            <li>Qǐng xiān zài guà hào chù guà hào.</li>
            <li>กรุณาลงทะเบียนที่แผนกลงทะเบียนก่อนนะคะ</li>
          </ul>

          <ul>
            <li>有病历卡吗？</li>
            <li>Yǒu bìng lì kǎ ma?</li>
            <li>มีบัตรผู้ป่วยไหมคะ?</li>
          </ul>

          <ul>
            <li>请在这张表上填上你的姓名、年龄和地址。</li>
            <li>
              Qǐng zài zhè zhāng biǎo shàng tián shàng ní de xìng míng, nián
              líng hé dì zhǐ.
            </li>
            <li>กรุณากรอกชื่อ อายุ และที่อยู่ ที่แบบฟอร์มนี้ด้วยค่ะ</li>
          </ul>

          <ul>
            <li>你过敏什么些药吗？</li>
            <li>Nǐ guò mǐn shén me xiē yào ma?</li>
            <li>คุณแพ้ยาอะไรบ้างหรือเปล่า?</li>
          </ul>
          <ul>
            <li>请坐一会，等叫你的名字</li>
            <li>Qǐng zuò yí huìr, děng jiào nǐ de míng zi.</li>
            <li>กรุณานั่งรอเรียกชื่อสักครู่นะคะ</li>
          </ul>
          <ul>
            <li>挂号处在哪里？</li>
            <li>Guàhào chù zài nǎlǐ? </li>
            <li>ลงทะเบียนที่ไหนครับ? </li>
          </ul>
          <ul>
            <li>请给我一张挂号单。 </li>
            <li>Qǐng gěi wǒ yī zhāng guàhào dān. </li>
            <li>ขอแบบฟอร์มลงทะเบียนหน่อยครับ </li>
          </ul>
          <ul>
            <li>你有医院的病人身份卡吗？</li>
            <li>Nǐ yǒu yīyuàn de bìngrén shēnfèn kǎ ma? </li>
            <li>คุณมีบัตรประจำตัวผู้ป่วยไหมคะ? </li>
          </ul>
          <ul>
            <li>您是第一次来这里看病吗？ </li>
            <li>Nín shì dì yī cì lái zhèlǐ kànbìng ma? </li>
            <li>คุณมาโรงพยาบาลนี้ครั้งแรกหรือครับ? </li>
          </ul>
          <ul>
            <li>外国人可以在这里挂号吗？ </li>
            <li>Wàiguó rén kěyǐ zài zhèlǐ guàhào ma? </li>
            <li>คนต่างชาติลงทะเบียนที่นี่ได้ไหมครับ </li>
          </ul>
          <ul>
            <li>只有护照可以登记挂号吗？ </li>
            <li>Zhǐyǒu hùzhào kěyǐ dēngjì guàhào ma? </li>
            <li>มีแต่พาสปอร์ตลงทะเบียนได้ไหมครับ? </li>
          </ul>
          <ul>
            <li>您想看哪个科的医生？ </li>
            <li>Nín xiǎng kàn nǎgè kē de yīshēng? </li>
            <li>คุณอยากดูหมอแผนกไหนคะ?</li>
          </ul>
          <ul>
            <li>我还要等多久？ </li>
            <li>Wǒ hái yào děng duōjiǔ? </li>
            <li>ผมยังต้องรอนานเท่าไหร่ครับ ? </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default register;

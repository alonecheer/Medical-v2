import React from "react";
import Header from "./header";
import Footer from "./footer";

const recommend = () => {
  return (
    <div>
      <title>Recommend</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่มักใช้ในการแนะนำการใช้ยาและการซื้อยา</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>
              我来取药。 <br />
              Wǒ lái qǔ yào.
              <br />
              ผมมารับยา
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              这些药怎么服用？ <br />
              Zhèxiē yào zěnme fúyòng?
              <br />
              ยาพวกนี้จะใช้ยังไงเหรอคะ?
            </li>
          </ul>
          <ul>
            <li>
              这种药一天吃几次？ <br />
              Zhè zhǒng yào yītiān chī jǐ cì?
              <br />
              ยาชนิดนี้กินวันละกี่ครั้งครับ?
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              每次吃几粒。 <br />
              Měi cì chī jǐ lì.
              <br />
              กินครั้งละกี่เม็ดครับ
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              这种药要饭前吃吗？ <br />
              Zhè zhǒng yào yàofàn qián chī ma?
              <br />
              ยาชนิดนี้ต้องกินก่อนอาหารไหม?
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              这种药要饭后吃吗？ <br />
              Zhè zhǒng yào yàofàn hòu chī ma?
              <br />
              ยาชนิดนี้ต้องกินหลังอาหารไหม?
            </li>
          </ul>
          <ul>
            <li>
              第一次要吃六粒。 <br />
              Dì yī cì yào chī liù lì.
              <br />
              กินครั้งแรกต้องกินหกเม็ดครับ
            </li>
          </ul>
          <ul>
            <li>
              你需要什么要吗？
              <br />
              Nǐ xūyào shénme yào ma?
              <br />
              คุณต้องการยาอะไรหรือครับ?
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              这种药需要有医生的处方单。
              <br />
              Zhè zhǒng yào xūyào yǒu yīshēng de chǔfāng dān. <br />
              ยาชนิดนี้ต้องมีใบสั่งยาจากแพทย์ครับ
            </li>
          </ul>
          <ul>
            <li>
              如果没有处方单就买不了。 <br />
              Rúguǒ méiyǒu chǔfāng dān jiù mǎi bùliǎo.
              <br />
              ถ้าไม่มีใบสั่งยาซื้อไม่ได้ครับ
            </li>
          </ul>
          <ul>
            <li>
              你吃过这种药吗？ <br />
              Nǐ chīguò zhè zhǒng yào ma? <br />
              คุณเคยกินยาแบบนี้ไหมครับ?
            </li>
          </ul>
          <ul>
            <li>
              这种药吃了会犯困。 <br />
              Zhè zhǒng yào chīle huì fànkùn.
              <br />
              ยาชนิดนี้กินแล้วจะทำให้ง่วงครับ
            </li>
          </ul>
          <ul>
            <li>
              你对什么药物过敏吗? <br />
              Nǐ duì shénme yàowù guòmǐn ma?
              <br />
              คุณแพ้ยาอะไรไหมครับ?
            </li>
          </ul>
          <ul>
            <li>
              我对这种药过敏。
              <br />
              Wǒ duì zhè zhǒng yào guòmǐn.
              <br />
              ผมแพ้ยาชนิดนี้ครับ
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default recommend;

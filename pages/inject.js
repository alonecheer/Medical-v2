import React from "react";
import Header from "./header";
import Footer from "./footer";

const inject = () => {
  return (
    <div>
      <title>Inject</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่เกี่ยวข้องกับการฉีดยา</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>注射室在哪里？ </li>
            <li>Zhùshè shì zài nǎlǐ? </li>
            <li>ห้องฉีดยาอยู่ทางไหนครับ? </li>
          </ul>
          <ul>
            <li>我需要打几天针？ </li>
            <li>Wǒ xūyào dǎ jǐ tiān zhēn? </li>
            <li>ผมต้องฉีดยากี่วันครับ? </li>
          </ul>
          <ul>
            <li>你以前打过这种药吗？ </li>
            <li>Nǐ yǐqián dǎguò zhè zhǒng yào ma? </li>
            <li>คุณเคยฉีดยาแบบนี้ไหมครับ? </li>
          </ul>
          <ul>
            <li>你需要先做皮试。 </li>
            <li>Nǐ xūyào xiān zuò pí shì. </li>
            <li>คุณต้องทำการทดสอบก่อนค่ะ </li>
          </ul>
          <ul>
            <li>皮试结果显示你不能打这种药水。 </li>
            <li>Pí shì jiéguǒ xiǎnshì nǐ bùnéng dǎ zhè zhǒng yàoshuǐ. </li>
            <li>ผลการทดสอบพบว่าคุณฉีดยาชนิดนี้ไม่ได้ค่ะ </li>
          </ul>
          <ul>
            <li>我可以吃药代替打针吗? </li>
            <li>Wǒ kěyǐ chī yào dàitì dǎzhēn ma? </li>
            <li>ผมสามารถกินยาแทนการฉีดยาได้ไหมครับ? </li>
          </ul>
          <ul>
            <li>我非常怕打针。 </li>
            <li>Wǒ fēicháng pà dǎzhēn. </li>
            <li>ดิฉันกลัวการฉีดยามาก </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default inject;

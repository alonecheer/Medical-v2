import React from "react";
import Header from "./header";
import Footer2 from "./footer2";

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
            <li>
              注射室在哪里？ <br />
              Zhùshè shì zài nǎlǐ?
              <br />
              ห้องฉีดยาอยู่ทางไหนครับ?
            </li>
          </ul>
          <ul>
            <li>
              我需要打几天针？ <br />
              Wǒ xūyào dǎ jǐ tiān zhēn? <br />
              ผมต้องฉีดยากี่วันครับ?
            </li>
          </ul>
          <ul>
            <li>
              你以前打过这种药吗？ <br />
              Nǐ yǐqián dǎguò zhè zhǒng yào ma? <br />
              คุณเคยฉีดยาแบบนี้ไหมครับ?
            </li>
          </ul>
          <ul>
            <li>
              你需要先做皮试。 <br />
              Nǐ xūyào xiān zuò pí shì. <br />
              คุณต้องทำการทดสอบก่อนค่ะ
            </li>
          </ul>
          <ul>
            <li>
              皮试结果显示你不能打这种药水。 <br />
              Pí shì jiéguǒ xiǎnshì nǐ bùnéng dǎ zhè zhǒng yàoshuǐ.
              <br />
              ผลการทดสอบพบว่าคุณฉีดยาชนิดนี้ไม่ได้ค่ะ
            </li>
          </ul>
          <ul>
            <li>
              我可以吃药代替打针吗? <br />
              Wǒ kěyǐ chī yào dàitì dǎzhēn ma?
              <br />
              ผมสามารถกินยาแทนการฉีดยาได้ไหมครับ?
            </li>
          </ul>
          <ul>
            <li>
              我非常怕打针。 <br />
              Wǒ fēicháng pà dǎzhēn. <br />
              ดิฉันกลัวการฉีดยามาก
            </li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default inject;

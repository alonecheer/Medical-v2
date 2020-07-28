import React from "react";
import Header from "./header";
import Footer from "./footer";

const diagnose = () => {
  return (
    <div>
      <title>Diagnose</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างประโยคที่แพทย์มักใช้ในการวินิจฉัยโรค</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>
              您是咽喉发炎。
              <br />
              Nín shì yānhóu fāyán.
              <br />
              คุณเป็นคออักเสบครับ
            </li>
          </ul>
          <ul>
            <li>
              你得了肠胃炎。 <br />
              Nǐ déle chángwèi yán.
              <br />
              คุณเป็นโรคลำไส้อักเสบครับ
            </li>
          </ul>
          <ul>
            <li>
              您患了高血压。
              <br />
              Nín huànle gāo xiěyā.
              <br />
              คุณเป็นโรคความดันสูงค่ะ
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              您需要打针。 <br />
              Nín xūyào dǎzhēn.
              <br />
              คุณต้องฉีดยา
            </li>
          </ul>
          <ul>
            <li>
              我先给你量一下血压。
              <br />
              Wǒ xiān gěi nǐ liàng yīxià xiěyā.
              <br />
              หมอจะเช็คความดันโลหิตให้ก่อนนะครับ
            </li>
          </ul>
          <ul>
            <li>
              你没有大碍。 <br />
              Nǐ méiyǒu dà ài.
              <br />
              คุณไม่ได้เป็นอะไรมากครับ
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              吃过药再好好休息就会好的
              <br />
              Chīguò yào zài hǎohǎo xiūxí jiù huì hǎo de.
              <br />
              กินยาและพักผ่อนให้ดีก็หายแล้วครับ
            </li>
          </ul>
          <ul>
            <li>
              您先去拍个X光片吧。 <br />
              Nín xiān qù pāi gè X guāng piàn ba.
              <br />
              คุณไปถ่ายภาพเอ็กซ์เรย์ก่อนครับ
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              您怀孕了。
              <br />
              Nín huáiyùnle. <br />
              คุณตั้งตั้งครรภ์แล้ว
            </li>
          </ul>
          <ul>
            <li>
              你需要住院治疗。 <br />
              Nǐ xūyào zhùyuàn zhìliáo.
              <br />
              คุณต้องมาพักรักษาที่โรงพยาบาลครับ
            </li>
          </ul>
          <ul>
            <li>
              您的情况很严重，要开刀。 <br />
              Nín de qíngkuàng hěn yánzhòng, yào kāidāo.
              <br />
              อาการของคุณหนักมากต้องผ่าตัดครับ
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default diagnose;

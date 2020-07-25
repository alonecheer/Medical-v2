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
            <li>您是咽喉发炎。</li>
            <li>Nín shì yānhóu fāyán. </li>
            <li>คุณเป็นคออักเสบครับ </li>
          </ul>
          <ul>
            <li>你得了肠胃炎。 </li>
            <li>Nǐ déle chángwèi yán. </li>
            <li>คุณเป็นโรคลำไส้อักเสบครับ </li>
          </ul>
          <ul>
            <li>您患了高血压。 </li>
            <li>Nín huànle gāo xiěyā. </li>
            <li>คุณเป็นโรคความดันสูงค่ะ </li>
          </ul>
          <ul>
            <li> 您需要打针。 </li>
            <li>Nín xūyào dǎzhēn. </li>
            <li>คุณต้องฉีดยา </li>
          </ul>
          <ul>
            <li>我先给你量一下血压。 </li>
            <li>Wǒ xiān gěi nǐ liàng yīxià xiěyā. </li>
            <li>หมอจะเช็คความดันโลหิตให้ก่อนนะครับ </li>
          </ul>
          <ul>
            <li>你没有大碍。 </li>
            <li>Nǐ méiyǒu dà ài. </li>
            <li>คุณไม่ได้เป็นอะไรมากครับ </li>
          </ul>
          <ul>
            <li> 吃过药再好好休息就会好的</li>
            <li>Chīguò yào zài hǎohǎo xiūxí jiù huì hǎo de. </li>
            <li>กินยาและพักผ่อนให้ดีก็หายแล้วครับ </li>
          </ul>
          <ul>
            <li>您先去拍个X光片吧。 </li>
            <li>Nín xiān qù pāi gè X guāng piàn ba. </li>
            <li>คุณไปถ่ายภาพเอ็กซ์เรย์ก่อนครับ </li>
          </ul>
          <ul>
            <li> 您怀孕了。 </li>
            <li>Nín huáiyùnle. </li>
            <li>คุณตั้งตั้งครรภ์แล้ว </li>
          </ul>
          <ul>
            <li>你需要住院治疗。 </li>
            <li>Nǐ xūyào zhùyuàn zhìliáo. </li>
            <li>คุณต้องมาพักรักษาที่โรงพยาบาลครับ </li>
          </ul>
          <ul>
            <li>您的情况很严重，要开刀。 </li>
            <li>Nín de qíngkuàng hěn yánzhòng, yào kāidāo. </li>
            <li>อาการของคุณหนักมากต้องผ่าตัดครับ</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default diagnose;

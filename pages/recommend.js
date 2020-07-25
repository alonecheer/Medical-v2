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
            <li>我来取药。 </li>
            <li>Wǒ lái qǔ yào. </li>
            <li>ผมมารับยา  </li>
          </ul>
          <ul>
            <li> 这些药怎么服用？ </li>
            <li>Zhèxiē yào zěnme fúyòng? </li>
            <li>ยาพวกนี้จะใช้ยังไงเหรอคะ?   </li>
          </ul>
          <ul>
            <li>这种药一天吃几次？ </li>
            <li>Zhè zhǒng yào yītiān chī jǐ cì? </li>
            <li>ยาชนิดนี้กินวันละกี่ครั้งครับ?  </li>
          </ul>
          <ul>
            <li> 每次吃几粒。 </li>
            <li>Měi cì chī jǐ lì. </li>
            <li>กินครั้งละกี่เม็ดครับ  </li>
          </ul>
          <ul>
            <li> 这种药要饭前吃吗？ </li>
            <li>Zhè zhǒng yào yàofàn qián chī ma? </li>
            <li>ยาชนิดนี้ต้องกินก่อนอาหารไหม?  </li>
          </ul>
          <ul>
            <li> 这种药要饭后吃吗？ </li>
            <li>Zhè zhǒng yào yàofàn hòu chī ma? </li>
            <li>ยาชนิดนี้ต้องกินหลังอาหารไหม?   </li>
          </ul>
          <ul>
            <li>第一次要吃六粒。 </li>
            <li>Dì yī cì yào chī liù lì.</li>
            <li>กินครั้งแรกต้องกินหกเม็ดครับ   </li>
          </ul>
          <ul>
            <li>你需要什么要吗？</li>
            <li>Nǐ xūyào shénme yào ma? </li>
            <li>คุณต้องการยาอะไรหรือครับ?  </li>
          </ul>
          <ul>
            <li> 这种药需要有医生的处方单。 </li>
            <li>Zhè zhǒng yào xūyào yǒu yīshēng de chǔfāng dān. </li>
            <li>ยาชนิดนี้ต้องมีใบสั่งยาจากแพทย์ครับ   </li>
          </ul>
          <ul>
            <li>如果没有处方单就买不了。 </li>
            <li>Rúguǒ méiyǒu chǔfāng dān jiù mǎi bùliǎo. </li>
            <li>ถ้าไม่มีใบสั่งยาซื้อไม่ได้ครับ   </li>
          </ul>
          <ul>
            <li>你吃过这种药吗？ </li>
            <li>Nǐ chīguò zhè zhǒng yào ma? </li>
            <li>คุณเคยกินยาแบบนี้ไหมครับ?   </li>
          </ul>
          <ul>
            <li>这种药吃了会犯困。 </li>
            <li>Zhè zhǒng yào chīle huì fànkùn. </li>
            <li>ยาชนิดนี้กินแล้วจะทำให้ง่วงครับ   </li>
          </ul>
          <ul>
            <li>你对什么药物过敏吗? </li>
            <li>Nǐ duì shénme yàowù guòmǐn ma? </li>
            <li>คุณแพ้ยาอะไรไหมครับ?   </li>
          </ul>
          <ul>
            <li>我对这种药过敏。</li>
            <li>Wǒ duì zhè zhǒng yào guòmǐn. </li>
            <li>ผมแพ้ยาชนิดนี้ครับ</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default recommend;

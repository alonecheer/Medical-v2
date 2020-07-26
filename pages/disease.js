import React from "react";
import Header from "./header";
import Footer2 from "./footer2";
import { MDBDataTable } from "mdbreact";
const disease = () => {
  const data = {
    columns: [
      {
        label: "ภาษาจีน",
        field: "cn",
        sort: "asc",
        width: 150,
      },
      {
        label: "พินอิน",
        field: "pinin",
        sort: "asc",
        width: 270,
      },

      {
        label: "ภาษาไทย",
        field: "th",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        cn: " 流行病  ",
        pinin: " Liúxíng bìng ",
        th: " โรคระบาด ",
      },
      {
        cn: " 慢性病  ",
        pinin: " Mànxìng bìng ",
        th: " โรคเรื้อรัง ",
      },
      {
        cn: " 传染病  ",
        pinin: " Chuánrǎnbìng ",
        th: " โรคติดต่อ ",
      },
      {
        cn: " 并发症  ",
        pinin: " Bìngfāzhèng ",
        th: " โรคแทรกซ้อน ",
      },
      {
        cn: " 病毒  ",
        pinin: " Bìng dú ",
        th: " ไวรัส ",
      },
      {
        cn: " 疾病  ",
        pinin: " Jí bìng ",
        th: " โรค ",
      },
      {
        cn: " 病入膏肓  ",
        pinin: " Bìngrùgāohuāng ",
        th: " โรคร้าย (หมดทางรักษา) ",
      },
      {
        cn: " 过敏症  ",
        pinin: " Guòmǐnzhèng ",
        th: " โรคภูมิแพ้ ",
      },
      {
        cn: " 艾滋病  ",
        pinin: " Àizībìng ",
        th: " เอดส์ ",
      },
      {
        cn: " 疹子  ",
        pinin: " Zhěn zǐ ",
        th: " โรคหัด ",
      },
      {
        cn: " 疟疾  ",
        pinin: " Nüèjí ",
        th: " ไข้มาลาเรีย ",
      },
      {
        cn: " 疱疹  ",
        pinin: " Pàozhěn ",
        th: " ฝีดาษ, งูสวัด ",
      },
      {
        cn: " 糖尿病  ",
        pinin: " Tángniàobìng ",
        th: " เบาหวาน ",
      },
      {
        cn: " 神经病 ",
        pinin: " Shén jīng bìng ",
        th: " โรคประสาท ",
      },
      {
        cn: " 发疯  ",
        pinin: " Fā fēng ",
        th: " บ้า ",
      },
      {
        cn: " 关节炎  ",
        pinin: " Guānjiéyán ",
        th: " ข้อต่ออักเสบ ",
      },
      {
        cn: " 水痘  ",
        pinin: " Shuĭ dòu ",
        th: " อีสุกอีใส ",
      },
      {
        cn: " 霍乱  ",
        pinin: " Huò luàn ",
        th: " อหิวาตกโรค ",
      },
      {
        cn: " 偏瘫 ",
        pinin: " Piān tān ",
        th: " อัมพาตครึ่งซีก ",
      },
      {
        cn: " 黄疸  ",
        pinin: " Huángdăn ",
        th: " ดีซ่าน ",
      },
      {
        cn: " 偏头痛  ",
        pinin: " Piān tóu tòng ",
        th: " ไมเกรน ",
      },
      {
        cn: " 流行性腮腺炎  ",
        pinin: " Liúxíngxìng sāixiànyán ",
        th: " คางทูม ",
      },
      {
        cn: " 麻痹  ",
        pinin: " Mábì ",
        th: " ชา ",
      },
      {
        cn: " 老年疾呆症  ",
        pinin: " Lǎo nián jí dāi zhèng ",
        th: " โรคความจำเสื่อม ",
      },
      {
        cn: " 瘤, 肿瘤  ",
        pinin: " Liú, zhǒngliú ",
        th: " เนื้องอก ",
      },
      {
        cn: " 癌  ",
        pinin: " Ái ",
        th: " มะเร็ง ",
      },
      {
        cn: " 脊髓灰质炎  ",
        pinin: " Jĭsuĭ huī zhì yán ",
        th: " โปลิโอ ",
      },
      {
        cn: " 狂犬病  ",
        pinin: " Kuáng quăn bìng ",
        th: " โรคพิษสุนัขบ้า ",
      },
      {
        cn: " Dòu yán ",
        pinin: " Dòu yán ",
        th: " โรคไซนัสอักเสบ ",
      },
      {
        cn: " 天花  ",
        pinin: " Tiānhuā ",
        th: " ฝีดาษ,ไข้ทรพิษ ",
      },
      {
        cn: " 破伤风  ",
        pinin: " Pò shāng fēng ",
        th: " โรคบาดทะยัก ",
      },
      {
        cn: " 伤口  ",
        pinin: " Shāng kǒu ",
        th: " บาดแผล ",
      },
      {
        cn: " 淤血  ",
        pinin: " Yūxuè ",
        th: " เลือดคั่ง ",
      },
      {
        cn: " 癫痫  ",
        pinin: " Diān xián ",
        th: " โรคลมบ้าหมู ",
      },
      {
        cn: " 风疹  ",
        pinin: " Fēng zhĕn ",
        th: " หัดเยอรมัน ",
      },
      {
        cn: " 痛风  ",
        pinin: " Tòng fēng ",
        th: " โรคเกาต์ ",
      },
      {
        cn: " 精神病  ",
        pinin: " Jīng shén bìng ",
        th: " โรคประสาท ",
      },
      {
        cn: " 结核病  ",
        pinin: " Jié hé bìng ",
        th: " วัณโรค ",
      },
      {
        cn: " 斑疹伤寒  ",
        pinin: " Bān zhĕn shāng hán ",
        th: " โรคไข้ราดสาดใหญ่ ",
      },
      {
        cn: " 荨麻疹  ",
        pinin: " Xún mă zhĕn ",
        th: " โรคลมพิษ ",
      },
      {
        cn: " 黄热病 ",
        pinin: " Huáng rè bìng ",
        th: " ไข้เหลือง ",
      },
      {
        cn: " 带状疮疹  ",
        pinin: " Dài zhuàng chuāng zhĕn ",
        th: " โรคงูสวัด ",
      },
      {
        cn: " 非典  ",
        pinin: " Fēi diǎn ",
        th: " โรคซาร์ส ",
      },
      {
        cn: " 皮肤病  ",
        pinin: " Pífūbìng ",
        th: " โรคผิวหนัง ",
      },
      {
        cn: " 湿疹  ",
        pinin: " Shī zhĕn ",
        th: " ผื่นคัน, ผื่นแดง ",
      },
      {
        cn: " 皮炎  ",
        pinin: " Pí yán ",
        th: " ผิวหนังอักเสบ ",
      },
      {
        cn: " 皮疹  ",
        pinin: " Pí zhěn ",
        th: " ผื่น ",
      },
      {
        cn: " 痱子  ",
        pinin: " Fèi zǐ ",
        th: " ผด ",
      },
      {
        cn: " 脓肿  ",
        pinin: " Nóng zhǒng ",
        th: " ฝีหนอง ",
      },
      {
        cn: " 挫伤  ",
        pinin: " Cuò shāng ",
        th: " ฟกช้ำ ",
      },
      {
        cn: " 挫伤  ",
        pinin: " Zhuó shāng  ",
        th: " แผลไหม้ ",
      },
      {
        cn: " 擦伤  ",
        pinin: " Cā shāng ",
        th: " แผลถลอก ",
      },
      {
        cn: " 烫伤  ",
        pinin: " Tàng shāng  ",
        th: " แผลถูกลวก ",
      },
      {
        cn: " 跌倒  ",
        pinin: " Diē dǎo ",
        th: " หกล้ม ",
      },
      {
        cn: " 淋病  ",
        pinin: " Lìn bìng ",
        th: " โรคหนองใน ",
      },
      {
        cn: " 梅毒  ",
        pinin: " Méi dú ",
        th: " โรคซิฟิลิส ",
      },
      {
        cn: " 流鼻血  ",
        pinin: " Liú bí xiě ",
        th: " เลือดกำเดาไหล ",
      },
      {
        cn: " 血癌/白血病  ",
        pinin: " Xuè’ái, Xiě ái, Bái xiě bìng ",
        th: " มะเร็งในเม็ดเลือดขาว ",
      },
      {
        cn: " 白血病  ",
        pinin: " Bái xuè bìng ",
        th: " ลูคีเมีย ",
      },
      {
        cn: " 贫血  ",
        pinin: " Pín xuè ",
        th: " โลหิตจาง ",
      },
      {
        cn: " 高血压  ",
        pinin: " Gāoxueyā ",
        th: " ความดันโลหิตสูง ",
      },
      {
        cn: " 低血压  ",
        pinin: " Dīxuèyā ",
        th: " ความดันต่ำ ",
      },
      {
        cn: " ความดันต่ำ ",
        pinin: " Gǎn mào, shāng fēng ",
        th: " เป็นหวัด ",
      },
      {
        cn: " 流感  ",
        pinin: " Liú gǎn ",
        th: " โรคไข้หวัดใหญ่ ",
      },
      {
        cn: " 禽流感  ",
        pinin: " Qín liú gǎn ",
        th: " ไข้หวัดนก ",
      },
      {
        cn: " 肺病  ",
        pinin: " Fèi bìng ",
        th: " วัณโรค ",
      },
      {
        cn: " 心肌梗塞  ",
        pinin: " Xīn jī gĕng sè ",
        th: " โรคหัวใจขาดเลือด ",
      },
      {
        cn: " 血栓形成  ",
        pinin: " Xuè shuān xíng chéng ",
        th: " โรคเส้นเลือดตีบ ",
      },
      {
        cn: " 食管癌  ",
        pinin: " 食管癌  ",
        th: " มะเร็งหลอดอาหาร ",
      },
      {
        cn: " 心绞痛  ",
        pinin: " Xin jiăo tòng ",
        th: " หลอดเลือดหัวใจตีบตัน ",
      },
      {
        cn: " 眼病  ",
        pinin: " Yǎnbìng ",
        th: " โรคตา ",
      },
      {
        cn: " 失明  ",
        pinin: " Shī míng  ",
        th: " ตาบอด ",
      },
      {
        cn: " 盲目  ",
        pinin: " Máng mù ",
        th: " ตาบอด ",
      },
      {
        cn: " 白喉  ",
        pinin: " Bái hóu ",
        th: " โรคคอตีบ ",
      },
      {
        cn: " 咽炎  ",
        pinin: " Yān yán ",
        th: " Yān yán ",
      },
      {
        cn: " 心脏病  ",
        pinin: " Xīn zāng bìng ",
        th: " โรคหัวใจ ",
      },
      {
        cn: " 乳房癌  ",
        pinin: " Rǔ fáng ái ",
        th: " มะเร็งเต้านม ",
      },
      {
        cn: " 肠炎  ",
        pinin: " Chángyán ",
        th: " ลำไส้อักเสบ ",
      },
      {
        cn: " 阑尾炎  ",
        pinin: " Lán wĕi yán ",
        th: " ไส้ติ่งอักเสบ ",
      },
      {
        cn: " 急性阑尾炎  ",
        pinin: " Jí xìng lán wěi yán ",
        th: " ไส้ติ่งอักเสบเฉียบพลัน ",
      },
      {
        cn: " 慢性阑尾炎  ",
        pinin: " Màn xìng lán wěi yán ",
        th: " ไส้ติ่งอักเสบเรื้อรัง ",
      },
      {
        cn: " 脑溢血  ",
        pinin: " Nǎoyìxuè ",
        th: " เส้นเลือดแตกในสมอง ",
      },
      {
        cn: " 肾炎  ",
        pinin: " Shènyán ",
        th: " ไตอักเสบ ",
      },
      {
        cn: " 肾衰竭  ",
        pinin: " Shèn shuāi jié ",
        th: " ไตวาย ",
      },
      {
        cn: " 支气管炎  ",
        pinin: " Zhī qì guǎn yán ",
        th: " หลอดลมอักเสบ ",
      },
      {
        cn: " 肺病  ",
        pinin: " Fèi bìng ",
        th: " โรคปอด ",
      },
      {
        cn: " 肺气肿  ",
        pinin: " 肺气肿  ",
        th: " โรคปอดพองลม ",
      },
      {
        cn: " 肺吸虫  ",
        pinin: " Fèi xī chóng ",
        th: " พยาธิใบไม้ที่ปอด ",
      },
      {
        cn: " 肺蛭  ",
        pinin: " Fèi zhì ",
        th: " พยาธิใบไม้ที่ปอด ",
      },
      {
        cn: " 肺炎  ",
        pinin: " Fèi yán ",
        th: " ปอดอักเสบ ",
      },
      {
        cn: " 肺癌  ",
        pinin: " Fèi ái ",
        th: " มะเร็งปอด ",
      },
      {
        cn: " 肝癌  ",
        pinin: " Gān’ái ",
        th: " โรคมะเร็งตับ ",
      },
      {
        cn: " 肝炎  ",
        pinin: " Gān yán ",
        th: " ตับอักเสบ ",
      },
      {
        cn: " 肝硬变  ",
        pinin: " Gān yìng biàn ",
        th: " ตับแข็ง ",
      },
      {
        cn: " 分娩  ",
        pinin: " Fēn miǎn ",
        th: " คลอดบุตร ",
      },
      {
        cn: " 怀孕  ",
        pinin: " Huái yùn ",
        th: " ตั้งครรภ์ ",
      },
      {
        cn: " 流产  ",
        pinin: " Liú chǎn ",
        th: " แท้ง ",
      },
      {
        cn: " 死胎  ",
        pinin: " Sǐ tāi ",
        th: " ทารกตายในครรภ์ ",
      },
      {
        cn: " 肌  ",
        pinin: " Jī ",
        th: " กล้ามเนื้อ ",
      },
      {
        cn: " 子宫肌瘤  ",
        pinin: " Zǐ gōng jī liú ",
        th: " เนื้องอกในกล้ามเนื้อมดลูก ",
      },
      {
        cn: " 前置胎盘  ",
        pinin: " Qián zhì tāi pán ",
        th: " รกเกาะต่ำ ",
      },
      {
        cn: " 胆石病  ",
        pinin: " Dǎn shí bìng ",
        th: " นิ่วในถุงน้ำดี ",
      },
      {
        cn: " 胆囊炎  ",
        pinin: " Dǎn náng yán ",
        th: " ถุงน้ำดีอักเสบ ",
      },
      {
        cn: " 痢疾  ",
        pinin: " Lì jí ",
        th: " บิด ",
      },
      {
        cn: " 便秘  ",
        pinin: " Biàn mì ",
        th: " ท้องผูก ",
      },
      {
        cn: " 拉肚子，泻肚  ",
        pinin: " Lādùzǐ, xièdù ",
        th: " ท้องเสีย, ท้องร่วง ",
      },
      {
        cn: " 胃气胀 ",
        pinin: " Wèi qì zhàng ",
        th: " ท้องอืดท้องเฟ้อ ",
      },
      {
        cn: " 胃病  ",
        pinin: " Wèibìng ",
        th: " โรคกระเพาะ ",
      },
      {
        cn: " 腹膜炎  ",
        pinin: " Fùmóyán ",
        th: " เยื่อบุช่องท้องอักเสบ ",
      },
      {
        cn: " 溃疡  ",
        pinin: " Kuì yáng ",
        th: " แผลเปื่อย, บาดแผลที่พุพอง ",
      },
      {
        cn: " 胃溃疡  ",
        pinin: " Wèikuìyáng ",
        th: " แผลกระเพาะอาหาร ",
      },
      {
        cn: " 慢性胃炎  ",
        pinin: " Màn xìng wèi yán ",
        th: " กระเพาะอาหารอักเสบเรื้อรัง ",
      },
      {
        cn: " 胃穿孔  ",
        pinin: " Wèi chuān kǒng ",
        th: " กระเพาะอาหารทะลุ ",
      },
      {
        cn: " 膀胱炎  ",
        pinin: " Wèi qì shì ",
        th: " กระเพาะปัสสาวะอักเสบ ",
      },
      {
        cn: " 肺蛭 ",
        pinin: " Fèi zhì  ",
        th: " พยาธิใบไม้ที่ปอด ",
      },
      {
        cn: " 哑巴  ",
        pinin: " Yǎ bā ",
        th: " เป็นใบ้ ",
      },
    ],
  };
  return (
    <div>
      <title>Disease</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ภาษาจีนเกี่ยวกับโรคต่างๆ</h2>
        </div>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
          displayEntries={false}
        />
      </div>
      <Footer2 />
    </div>
  );
};

export default disease;

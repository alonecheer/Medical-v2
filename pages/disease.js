import React from "react";
import Header from "./header";
import Footer from "./footer";
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
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
      },
    ],
  };
  return (
    <div>
      <title>Disease</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>疾病 หมวดโรค</h2>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default disease;

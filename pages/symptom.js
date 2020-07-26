import React from "react";
import Header from "./header";
import Footer2 from "./footer2";
import { MDBDataTable } from "mdbreact";
const symptom = () => {
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
        cn: " 疼痛  ",
        pinin: " Téng tòng  ",
        th: " ปวด ",
      },
      {
        cn: " 感染  ",
        pinin: " Gǎn rǎn ",
        th: " ติดเชื้อ ",
      },
      {
        cn: " 头痛  ",
        pinin: " Tóu tòng ",
        th: " ปวดหัว ",
      },
      {
        cn: " 咳嗽  ",
        pinin: " Ké sòu  ",
        th: " ไอ ",
      },
      {
        cn: " 喉咙痛  ",
        pinin: " Hóu lóng tòng ",
        th: " เจ็บคอ ",
      },
      {
        cn: " 嗓子疼  ",
        pinin: " Sǎngziténg ",
        th: " เจ็บคอ ",
      },
      {
        cn: " 火大  ",
        pinin: " Huǒ dà  ",
        th: " ร้อนใน ",
      },
      {
        cn: " 消化不良  ",
        pinin: " Xiāo huà bù liáng  ",
        th: " อาหารไม่ย่อย ",
      },
      {
        cn: " 营养不良  ",
        pinin: " Yíng yáng bù liáng  ",
        th: " ขาดสารอาหาร ",
      },
      {
        cn: " 中毒  ",
        pinin: " Zhòng dú  ",
        th: " ถูกพิษ ",
      },
      {
        cn: " 食物中毒  ",
        pinin: " Shí wù zhòng dú  ",
        th: " อาหารเป็นพิษ ",
      },
      {
        cn: " 酸  ",
        pinin: " Suān  ",
        th: " เมื่อย ",
      },
      {
        cn: " 肿  ",
        pinin: " Zhǒng  ",
        th: " บวม ",
      },
      {
        cn: " 瘙痒  ",
        pinin: " Sào yǎng  ",
        th: " คัน  ",
      },
      {
        cn: " 失色  ",
        pinin: " Shī sè  ",
        th: " หน้าซีด ",
      },
      {
        cn: " 失血  ",
        pinin: " Shī xiě  ",
        th: " เสียเลือด ",
      },
      {
        cn: " 流鼻血  ",
        pinin: " Liú bí xiě  ",
        th: " เลือดกำเดาไหล ",
      },
      {
        cn: " 骨折  ",
        pinin: " Gú zhé  ",
        th: " กระดูกหัก ",
      },
      {
        cn: " 痉挛  ",
        pinin: " Jìng luán  ",
        th: " เป็นตะคริว ",
      },
      {
        cn: " 抽筋  ",
        pinin: " Chōu jīn  ",
        th: " เป็นตะคริว ",
      },
      {
        cn: " 扭伤  ",
        pinin: " Niǔ shāng  ",
        th: " เคล็ด ",
      },
      {
        cn: " 失眠  ",
        pinin: " Shī mián  ",
        th: " นอนไม่หลับ ",
      },
      {
        cn: " 并发症  ",
        pinin: " Bìng fā zhèng  ",
        th: " ภาวะแทรกซ้อน ",
      },
      {
        cn: " 抗药性  ",
        pinin: " Kàng yào xìng  ",
        th: " ภาวะดื้อยา ",
      },
      {
        cn: " 晕  ",
        pinin: " Yūn  ",
        th: "  วิงเวียน ",
      },
      {
        cn: " 头晕  ",
        pinin: " Tóu yūn ",
        th: " วิงเวียนศรีษะ ",
      },
      {
        cn: " 恶心 ",
        pinin: " Ěxīn  ",
        th: " คลื่นไส้ ",
      },
      {
        cn: " 呕吐 ",
        pinin: " ǒu tǔ  ",
        th: " อาเจียน ",
      },
      {
        cn: " 酸疼  ",
        pinin: " Suānténg  ",
        th: " ปวดเมื่อย ",
      },
      {
        cn: " 发烧  ",
        pinin: " Fāshāo  ",
        th: " มีไข้ ตัวร้อน ",
      },
      {
        cn: " 受寒  ",
        pinin: " Shòu hán  ",
        th: " หนาวสั่น ",
      },
      {
        cn: " 疲劳  ",
        pinin: " Pí láo ",
        th: " อ่อนเพลีย ",
      },
      {
        cn: " 发炎  ",
        pinin: " Fāyán  ",
        th: " อักเสบ ",
      },
      {
        cn: " 鼻塞  ",
        pinin: " Bí sài  ",
        th: " คัดจมูก ",
      },
      {
        cn: " 打喷嚏  ",
        pinin: " Dǎ pēn tì  ",
        th: " จาม ",
      },
      {
        cn: " 休克  ",
        pinin: " Xiū kè ",
        th: " ช็อค ",
      },
      {
        cn: " 痉挛  ",
        pinin: " Jìng luán  ",
        th: " ชักกระตุก ",
      },
      {
        cn: " 麻醉  ",
        pinin: " Má zuì  ",
        th: " ชา ",
      },
      {
        cn: " 绞痛  ",
        pinin: " Jiǎo tòng  ",
        th: " จุกเสียด ",
      },
    ],
  };
  return (
    <div>
      <title>Symptom</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ศัพท์ภาษาจีนเกี่ยวกับการแสดงอาการต่างๆ</h2>
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

export default symptom;

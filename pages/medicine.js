import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const medicine = () => {
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
        cn: " 西药  ",
        pinin: " Xīyào  ",
        th: " ยาแผนปัจจุบัน ",
      },
      {
        cn: " 中药  ",
        pinin: " Zhōngyào  ",
        th: " ยาจีน ",
      },
      {
        cn: " 参  ",
        pinin: " Shēn  ",
        th: " โสม ",
      },
      {
        cn: " 人参  ",
        pinin: " Rénshēn  ",
        th: " โสมคน ",
      },
      {
        cn: " 草药  ",
        pinin: " Cǎoyào  ",
        th: " สมุนไพร ",
      },
      {
        cn: " 丸剂，丸药，药片 ",
        pinin: " Wánjì, Wányào, Yàopiàn  ",
        th: " ยาเม็ด ",
      },
      {
        cn: " 药丸  ",
        pinin: " Yàowán ",
        th: " Yàowán ",
      },
      {
        cn: " 栓剂  ",
        pinin: " Shuānjì  ",
        th: " ยาเหน็บ  ",
      },
      {
        cn: " 胶囊  ",
        pinin: " Jiāonáng  ",
        th: " แคปซูล ",
      },
      {
        cn: " 膏药  ",
        pinin: " Gāoyào  ",
        th: " ยากอเอี้ยะ，พลาสเตอร์ยา ",
      },
      {
        cn: " 绷带  ",
        pinin: " Bēngdài  ",
        th: " ผ้าพันแผล ",
      },
      {
        cn: " 良药  ",
        pinin: " Liángyào  ",
        th: " ยาแก้ร้อนใน ",
      },
      {
        cn: " 退热贴  ",
        pinin: " Tuìrètiē  ",
        th: " แผ่นความเย็นลดไข้ ",
      },
      {
        cn: " 退烧药  ",
        pinin: " Tuìshāoyào  ",
        th: " ยาลดไข้  ",
      },
      {
        cn: " 维生素  ",
        pinin: " Wéi shēng sù  ",
        th: " วิตามิน ",
      },
      {
        cn: " 避孕药  ",
        pinin: " Bìyùnyào  ",
        th: " ยาคุมกำเนิด ",
      },
      {
        cn: " 安眠药 ",
        pinin: " Ānmián yào  ",
        th: " ยานอนหลับ ",
      },
      {
        cn: " 阿司匹林  ",
        pinin: " āsī pǐlín  ",
        th: " แอสไพริน ",
      },
      {
        cn: " 盘尼西林  ",
        pinin: " Pánní xīlín  ",
        th: " ยาเพนนิซิลิน ",
      },
      {
        cn: " 止痛药  ",
        pinin: " Zhǐtòngyào ",
        th: " ยาแก้ปวด ",
      },
      {
        cn: " 感冒药  ",
        pinin: " Gǎnmàoyào  ",
        th: " ยาแก้หวัด ",
      },
      {
        cn: " 止痒剂  ",
        pinin: " Zhǐyǎngjì  ",
        th: " ยาแก้คัน ",
      },
      {
        cn: " 消肿药  ",
        pinin: " Xiāozhǒngyào  ",
        th: " ยาแก้บวม ",
      },
      {
        cn: " 消炎药  ",
        pinin: " Xiāoyányào  ",
        th: " ยาแก้อักเสบ ",
      },
      {
        cn: " 抗菌素  ",
        pinin: " Kàngjùnsù  ",
        th: " ยาปฎิชีวนะ ",
      },
      {
        cn: " 消毒剂  ",
        pinin: " Xiāodújì  ",
        th: " ยาฆ่าเชื้อ ",
      },
      {
        cn: " 泻药  ",
        pinin: " Xièyào  ",
        th: " ยาระบาย, ยาถ่าย ",
      },
      {
        cn: " 疫苗  ",
        pinin: " Yìmiáo  ",
        th: " วัคซีน ",
      },
      {
        cn: " 止咳糖浆  ",
        pinin: " Zhǐké tángjiāng  ",
        th: " ยาน้ำเชื่อมแก้ไอ ",
      },
      {
        cn: " 祛痰剂  ",
        pinin: " Qūtánjì   ",
        th: " ยาขับเสมหะ ",
      },
      {
        cn: " 润喉糖  ",
        pinin: " Rùnhóutáng  ",
        th: " ยาอมแก้เจ็บคอ ",
      },
      {
        cn: " 凡士林  ",
        pinin: " Fánshìlín  ",
        th: " วาสลีน ",
      },
      {
        cn: " 薄荷相同  ",
        pinin: " Báo héxiāngtóng  ",
        th: " ยาดม ",
      },
      {
        cn: " 万金油，清凉油  ",
        pinin: " Wànjīnyóu, Qīngliángyóu  ",
        th: " ยาหม่อง ",
      },
      {
        cn: " 洗眼液  ",
        pinin: " Xǐyǎnyè  ",
        th: " ยาล้างตา ",
      },
      {
        cn: " 红药水  ",
        pinin: " Hóngyàoshuǐ  ",
        th: " ยาแดง ",
      },
      {
        cn: " 碘酊  ",
        pinin: " Diǎndīng  ",
        th: " ทิงเจอร์ไอโอดีน ",
      },
      {
        cn: " 药方 ",
        pinin: " Yào fāng  ",
        th: " ใบสั่งยา ",
      },
      {
        cn: " 服药  ",
        pinin: " Fúyào ",
        th: " รับประทานยา ",
      },
      {
        cn: " 服用  ",
        pinin: " Fúyòng ",
        th: " รับประทานยา ",
      },
      {
        cn: " 一天三次  ",
        pinin: " Yītiān sāncì ",
        th: " วันละ 3 ครั้ง ",
      },
      {
        cn: " 每次一片  ",
        pinin: " Měicì yīpiàn ",
        th: " ครั้งละ 1 เม็ด ",
      },
      {
        cn: " 饭前服用  ",
        pinin: " Fànqián fúyòng ",
        th: " ก่อนอาหาร ",
      },
      {
        cn: " 饭后服用  ",
        pinin: " Fànhòu fúyòng  ",
        th: " หลังอาหาร ",
      },
      {
        cn: " 睡觉前服用  ",
        pinin: " Shuìjiàoqián fúyòng ",
        th: " ก่อนนอน ",
      },
      {
        cn: " 痛的时候服用  ",
        pinin: " Tòngdeshíhòu shǐyòng ",
        th: " ทานเมื่อปวด ",
      },
      {
        cn: " 涂擦  ",
        pinin: " Túcā ",
        th: " ทายา ",
      },
      {
        cn: " 内服药 ",
        pinin: " Nèi fú yào  ",
        th: " ยาภายใน ",
      },
      {
        cn: " 外服药 ",
        pinin: " Wài fú yào  ",
        th: " ยาภายนอก ",
      },
    ],
  };
  return (
    <div>
      <title>Medicine</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ภาษาจีนเกี่ยวกับยา</h2>
        </div>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
          displayEntries={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default medicine;

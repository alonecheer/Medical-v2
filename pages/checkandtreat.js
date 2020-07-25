import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const checkandtreat = () => {
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
        cn: " 诊脉  ",
        pinin: " Zhěnmài ",
        th: " จับชีพจร ",
      },
      {
        cn: " 体检   ",
        pinin: " Tǐjiǎn ",
        th: " ตรวจสุขภาพ ",
      },
      {
        cn: " 诊察  ",
        pinin: " Zhěnchá ",
        th: " ตรวจไข้ ",
      },
      {
        cn: " 诊断  ",
        pinin: " Zhěnduàn ",
        th: " วินิจฉัยโรค ",
      },
      {
        cn: " 验血  ",
        pinin: " Yànxuè ",
        th: " ตรวจเลือด ",
      },
      {
        cn: " 输血  ",
        pinin: " Shūxuè ",
        th: " ถ่ายเลือด ",
      },
      {
        cn: " 验光  ",
        pinin: " Yànguāng ",
        th: " ตรวจสายตา ",
      },
      {
        cn: " 验小便  ",
        pinin: " Yàn xiǎobiàn ",
        th: " ตรวจอุจาระ ",
      },
      {
        cn: " 验大便  ",
        pinin: " Yàn dàbiàn ",
        th: " ตรวจอุจาระ ",
      },
      {
        cn: " 打点滴  ",
        pinin: " Dǎdiǎndī ",
        th: " ให้น้ำเกลือ ",
      },
      {
        cn: " 针灸   ",
        pinin: " Zhēn jiǔ  ",
        th: " ฝังเข็ม ",
      },
      {
        cn: " 打针   ",
        pinin: " Dǎzhē  ",
        th: " ฉีดยา ",
      },
      {
        cn: " 动手术   ",
        pinin: " Dòng shǒu shù  ",
        th: " ผ่าตัด ",
      },
      {
        cn: " 爱克斯光   ",
        pinin: " Ài kè sī guāng  ",
        th: " x-ray  ",
      },
      {
        cn: " 打脉   ",
        pinin: " Dǎmài  ",
        th: " วัดชีพจร  ",
      },
      {
        cn: " 测血压   ",
        pinin: " Cè xiě yā  ",
        th: " วัดความดัน  ",
      },
      {
        cn: " 量体温   ",
        pinin: " Liàng tǐ wēn  ",
        th: " วัดอุณหภูมิ ",
      },
      {
        cn: " 接种疫苗   ",
        pinin: " Jiē zhòng yì miáo  ",
        th: " ฉีดวัดซีน ",
      },
      {
        cn: " 拍X光片  ",
        pinin: " Pāi X guāngpiàn  ",
        th: " ถ่ายเอกซเรย์ ",
      },
      {
        cn: " 超声波诊断  ",
        pinin: " Chāoshēngbōzhěnduàn  ",
        th: " ตรวจวินิจฉัยด้วยอัลตราซาวด์ ",
      },
      {
        cn: " 心电图检查  ",
        pinin: " Xīndiàntú jiǎnchá  ",
        th: " ตรวจคลื่นไฟฟ้าหัวใจ ",
      },
      {
        cn: " 听诊  ",
        pinin: " Tīngzhěn  ",
        th: " การตรวจร่างกายด้วยการฟังเสียง ",
      },
    ],
  };
  return (
    <div>
      <title>Checkandtreat</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ที่ใช้ในการทำการตรวจและรักษา</h2>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default checkandtreat;

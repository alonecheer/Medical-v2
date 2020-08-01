import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const room = () => {
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
        cn: " 康复理疗室  ",
        pinin: " Kāngfùlǐliáo shì  ",
        th: " ห้องกายภาพบำบัดฟื้นฟู ",
      },
      {
        cn: " 加护病房  ",
        pinin: " Jiāhù bìngfáng ",
        th: " ห้องICU ",
      },
      {
        cn: " 产房  ",
        pinin: " Chǎnfáng ",
        th: " ห้องคลอด ",
      },
      {
        cn: " 急救室  ",
        pinin: " Jíjiù shì  ",
        th: " ห้องฉุกเฉิน ",
      },
      {
        cn: " 病房  ",
        pinin: " Bìngfáng  ",
        th: " ห้องคนไข้ ",
      },
      {
        cn: " 会诊室  ",
        pinin: " Huìzhěn shì ",
        th: " ห้องตรวจโรค ",
      },
      {
        cn: " 手术室  ",
        pinin: " Shǒushù  ",
        th: " ห้องผ่าตัด ",
      },
      {
        cn: " 保健室  ",
        pinin: " Bǎojiàn shì ",
        th: " ห้องพยาบาล ",
      },
      {
        cn: " 康复室  ",
        pinin: " Kāngfù shì  ",
        th: " ห้องพักฟื้นหลังผ่าตัด ",
      },
      {
        cn: " X 射线室   ",
        pinin: " X shèxiàn shì  ",
        th: " ห้องเอกซเรย์ ",
      },
    ],
  };
  return (
    <div>
      <title>Room</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ภาษาจีนเกี่ยวกับห้องต่างๆในโรงพยาบาล</h2>
        </div>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
          displayEntries={false}
        />
      </div>
    </div>
  );
};

export default room;

import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const tools = () => {
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
        cn: " 体温计  ",
        pinin: " Tǐwēnjì ",
        th: " ปรอทวัดไข้ ",
      },
      {
        cn: " 听诊器  ",
        pinin: " Tīngzhěnqì ",
        th: " หูฟังของแพทย์  ",
      },
      {
        cn: " 石膏夹板  ",
        pinin: " Shígāo jiábǎn ",
        th: " เฝือก ",
      },
      {
        cn: " 黑膏药  ",
        pinin: " Hēi gāoyao ",
        th: " กอเอี๊ยะ ",
      },
      {
        cn: " 拐杖  ",
        pinin: " Guǎizhàng ",
        th: " ไม้เท้า  ",
      },
      {
        cn: " 轮椅  ",
        pinin: " Lúnyǐ ",
        th: " เก้าอี้เข็น ",
      },
      {
        cn: " 担架  ",
        pinin: " Dānjià ",
        th: " เปลหาม ",
      },
      {
        cn: " B超 ",
        pinin: " B chāo  ",
        th: " อัลตราซาวด์ ",
      },
      {
        cn: " CT扫描  ",
        pinin: " CT sǎo miáo   ",
        th: " ซีทีสแกน  ",
      },
      {
        cn: " MRI扫描   ",
        pinin: " MRI sǎomiáo  ",
        th: " เอ็มอาร์ทีสแกน  ",
      },
      {
        cn: " 心电图  ",
        pinin: " Xīndiàntú  ",
        th: " ภาพคลื่นไฟฟ้าหัวใจ ",
      },
    ],
  };
  return (
    <div>
      <title>Tools</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ศัพท์ภาษาจีนเกี่ยวกับเครื่องมือทางการแพทย์</h2>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default tools;

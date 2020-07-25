import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const department = () => {
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
        cn: " 精神科医生  ",
        pinin: " Jīngshénkē yīshēng  ",
        th: " จิตแพทย์  ",
      },
      {
        cn: " 眼科医生   ",
        pinin: " Yǎnkē yīshēng  ",
        th: " จักษุแพทย์  ",
      },
      {
        cn: " 儿科医生  ",
        pinin: " Árkē yīshēng  ",
        th: " กุมารแพทย์  ",
      },
      {
        cn: " 牙科医生  ",
        pinin: " Yákē yīshēng 	 ",
        th: " ทันตแพทย์  ",
      },
      {
        cn: " 中医医师   ",
        pinin: " Zhōngyī yīshī  ",
        th: " แพทย์แผนจีน  ",
      },
      {
        cn: " 麻醉医生   ",
        pinin: " Mázuì yīshēng ",
        th: " วิสัญญีแพทย์  ",
      },
      {
        cn: " 外科医生   ",
        pinin: " Wàikē yīshēng 	 ",
        th: " ศัลยแพทย์  ",
      },
      {
        cn: " 妇产科医生   ",
        pinin: " Fùchǎn kē yīshēng  ",
        th: " สูตินารีแพทย์  ",
      },
      {
        cn: " 内科医生   ",
        pinin: " Nèikē yīshēng ",
        th: " อายุรแพทย์  ",
      },
      {
        cn: " 放射科医生  ",
        pinin: " Fàngshè kē yīshēng  ",
        th: " แพทย์รังสีวิทยา  ",
      },
      {
        cn: " 神经科医生   ",
        pinin: " Shénjīngkē yīshēng  ",
        th: " แพทย์ทางสมองและเส้นประสาท  ",
      },
      {
        cn: " 泌尿科医生   ",
        pinin: " Mìniàokē yīshēng  ",
        th: " แพทย์ผู้เชี่ยวชาญระบบทางเดินปัสสาวะ",
      },
      {
        cn: " 整形外科医生    ",
        pinin: " Zhěngxíng wàikē yīshēng  ",
        th: " แพทย์ผู้เชี่ยวชาญด้านศัลยกรรมตกแต่ง  ",
      },
      {
        cn: " 皮肤科医生   ",
        pinin: " Pífūkē yīshēng  ",
        th: " แพทย์ผู้เชี่ยวชาญด้านโรคผิวหนัง ",
      },
      {
        cn: " 耳鼻喉医生   ",
        pinin: " Bíhóu yīshēng ",
        th: " แพทย์ผู้เชี่ยวชาญด้านหู คอ จมูก ",
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
      <title>Department</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ภาษาจีนเกี่ยวกับบุคลากรทางการแพทย์ในแผนกต่างๆ</h2>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default department;

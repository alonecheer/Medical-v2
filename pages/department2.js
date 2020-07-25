import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MDBDataTable } from "mdbreact";
const department2 = () => {
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
        cn: " 内科  ",
        pinin: " Nèikē ",
        th: " แผนกอายุรกรรม  ",
      },
      {
        cn: " 外科  ",
        pinin: " Wàikē ",
        th: " แผนกศัลยกรรม  ",
      },
      {
        cn: " 妇产科  ",
        pinin: " Fùchǎnkē ",
        th: " แผนกสูติ-นรีเวช  ",
      },
      {
        cn: " 眼科  ",
        pinin: " Yǎnkē ",
        th: " แผนกจักษุ  ",
      },
      {
        cn: " 皮肤科  ",
        pinin: " Pífūkē ",
        th: " แผนกโรคผิวหนัง  ",
      },
      {
        cn: " 心脏科  ",
        pinin: " Xīnzàngkē ",
        th: " แผนกหัวใจ  ",
      },
      {
        cn: " 耳鼻喉科 ",
        pinin: " Érbíhóukē ",
        th: " แผนกหู คอ จมูก  ",
      },
      {
        cn: " 放射科  ",
        pinin: " Fàngshèkē ",
        th: " แผนกรังสีวิทยา ",
      },
      {
        cn: " 儿科 ",
        pinin: " Érkē ",
        th: " แผนกกุมารเวช  ",
      },
      {
        cn: " 住院处 ",
        pinin: " Zhù yuàn chù  ",
        th: " แผนกผู้ป่วยใน ",
      },
      {
        cn: " 挂号处 ",
        pinin: " Guà hào chù  ",
        th: " แผนกลงทะเบียน ",
      },
      {
        cn: " 皮肤科 ",
        pinin: " Pífūkē  ",
        th: " แผนกโรคผิวหนัง ",
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
      <title>Department2</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>คำศัพท์ภาษาจีนเกี่ยวกับแผนกต่างๆ</h2>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default department2;

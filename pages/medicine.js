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
      {
        cn: " xxxx ",
        pinin: " xxxx ",
        th: " xxxx ",
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
        <MDBDataTable striped bordered small data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default medicine;

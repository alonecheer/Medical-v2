import React from "react";
import { MDBDataTable } from "mdbreact";
import Header from './header'
import Footer from './footer' 


const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'ภาษาจีน',
        field: 'cn',
        sort: 'asc',
        width: 150
      },
      {
        label: 'พินอิน',
        field: 'pinin',
        sort: 'asc',
        width: 270
      },
      {
        label: 'คำอ่าน',
        field: 'read',
        sort: 'asc',
        width: 200
      },
      {
        label: 'ภาษาอังกฤษ',
        field: 'eng',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ภาษาไทย',
        field: 'th',
        sort: 'asc',
        width: 150
      },

    ],
    rows: [
      {
        cn: '医生，医师',
        pinin: 'yīshēng,yīshī',
        read: 'อีเซิง , อีซือ',
        eng: 'doctor　',
        th: 'หมอ/นายแพทย์',
      },
      {
        cn: '法医学',
        pinin: 'fă yī xué',
        read: 'เตี้ยน อิ่ง กง เย่',
        eng: 'forensic medicine',
        th: 'นิติเวชศาสตร์',
      },
      {
        cn: '内科医师',
        pinin: 'nèikē yī shī',
        read: 'เน่ยเคอ ซืออี',
        eng: 'physician',
        th: 'แพทย์อายุรเวช',
      },
      {
        cn: '家庭医生',
        pinin: 'jiātíng yisheng',
        read: 'เจียถิง อีเซิง',
        eng: 'family doctor',
        th: 'หมอบ้าน',
      },
      {
        cn: '儿科医师',
        pinin: 'ér kē  yī shī',
        read: 'pediatrician, pediatrist ',
        eng: 'เอ๋อ เคอ อีซือ',
        th: 'กุมารแพทย์',
      },
      {
        cn: '妇科医师',
        pinin: 'fù kē  yī shī',
        read: 'ฟู่ เคอ อี ซือ',
        eng: 'gynecologist',
        th: 'นรีแพทย์',
      },
      {
        cn: '产科医师',
        pinin: 'chăn kē  yī shī',
        read: 'ฉ่าน เคอ อี ซือ',
        eng: 'tocologist, obstetrician',
        th: 'สูติแพทย์',
      },
      {
        cn: '神经专家',
        pinin: 'shén jīng  zhuān jiā',
        read: 'เสิน จิง จวนเจีย',
        eng: 'neurologist',
        th: 'ผู้เชี่ยวชาญทางด้านประสาทวิทยา',
      },
      {
        cn: '精神病学专家',
        pinin: 'jīng shén bìng xué zhuān jiā',
        read: 'จิง เสิน ปิ้ง เสวีย จวนเจีย',
        eng: 'psychiatrist',
        th: 'จิตแพทย์',
      },
      {
        cn: '眼科医师',
        pinin: 'yǎn kē yī shī',
        read: 'แหย่น เคอ อีซือ',
        eng: 'oculist ',
        th: 'จักษุแพทย์',
      },
      {
        cn: '牙医师',
        pinin: 'yá  yī shī',
        read: 'หยา อี ซือ',
        eng: 'dentist, odontologist',
        th: 'หมอฟัน',
      },
      {
        cn: '外科医师',
        pinin: 'wài kē  yī shī',
        read: 'ว่ายเคอ อีซือ',
        eng: 'surgeon',
        th: 'หมอศัลยกรรม',
      },
      {
        cn: '麻醉师',
        pinin: 'má zuì  shī',
        read: 'หมาจุ้ย ซือ',
        eng: 'anesthetist, anaesthetist',
        th: 'ผู้วางยาชาหรือยาสลบ',
      },
      {
        cn: '护士',
        pinin: 'hù shi',
        read: 'ฮู้ สึ',
        eng: 'nurse',
        th: 'นางพยาบาล',
      },
    //   {
    //     cn: 'xxxx',
    //     pinin: 'xxxx',
    //     read: 'xxxx',
    //     eng: 'xxxx',
    //     th: 'xxxx',
    //   },

    ]
  };
  return (
    <div>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <Header />
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="content-heading">
            <h1>รวมคำศัพท์</h1>
            <MDBDataTable striped bordered small data={data} />
          </div>
          <div className="not_res">
            The website does not support this device or please rotate the device
            to landscape mode.
          </div>
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
     <Footer />
      {/*------------------------------------ End Footer ------------------------------------*/}
    </div>
  );
};

export default DatatablePage;

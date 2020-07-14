import React from "react";
import { MDBDataTable } from "mdbreact";
import Header from './component/header'
import Footer from './component/footer'
import '../public/static/style/main.css'
import styled from "styled-components";

const StyledWrapper = styled.div`
  
`;
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
        cn: "药味",
        pinin: "yàowèi",
        th: "กลิ่นและรสของยา",
      },
      {
        cn: "酸痛软膏",
        pinin: "Suān tòng ruǎn gāo",
        th: "ครีมทาบรรเทาปวดเมื่อย",
      },
      {
        cn: "棉花棒",
        pinin: "Miánhuā bàng",
        th: "คอตตอนบัด",
      },
      {
        cn: "药性",
        pinin: "yàoxìng",
        th: "คุณสมบัติของยา",
      },
      {
        cn: "高锰酸钾",
        pinin: "Gāo měng suān jiǎ",
        th: "ด่างทับทิม",
      },
      {
        cn: "当归",
        pinin: "dāngguī",
        th: "ตังกุย",
      },
      {
        cn: "冬虫夏草",
        pinin: "Dōngchóngxiàcǎo",
        th: "ถั่งเช่า",
      },
      {
        cn: "碘酒",
        pinin: "Diǎn jiǔ",
        th: "ทิงเจอร์ไอโอดีน",
      },

      {
        cn: "鱼肝油",
        pinin: "yúgānyóu",
        th: "น้ำมันตับปลา",
      },
      {
        cn: "生理盐水",
        pinin: "Shēng lǐ yán shuǐ",
        th: "น้ำเกลือล้างแผล",
      },
      {
        cn: "纱布",
        pinin: "Shābù",
        th: "ผ้ากอซ",
      },
      {
        cn: "膏药",
        pinin: "Gāo yào",
        th: "พลาสเตอร์บรรเทาปวด",
      },
      {
        cn: "创可贴",
        pinin: "Chuàng kě tiē",
        th: "พลาสเตอร์ยา",
      },
      {
        cn: "扑热息痛",
        pinin: "Pū rè xī tòng",
        th: "พาราเซตามอล",
      },
      {
        cn: "冰片",
        pinin: "bīngpiàn",
        th: "พิมเสน",
      },
      {
        cn: "祛痰剂",
        pinin: "Qū tán jì",
        th: "ยาขับเสมหะ",
      },
      {
        cn: "药膏",
        pinin: "yàogāo",
        th: "ยาครีม,ยาขี้ผึ้ง",
      },
      {
        cn: "抗抑郁药",
        pinin: "Kàng yì yù yào",
        th: "ยาคลายเครียด",
      },
      {
        cn: "避孕药",
        pinin: "Bì yùn yào",
        th: "ยาคุมกำเนิด",
      },
      {
        cn: "紧急避孕药",
        pinin: "Jǐn jí bì yùn yào",
        th: "ยาคุมกำเนิดฉุกเฉิน",
      },
      {
        cn: "消毒剂",
        pinin: "Xiāo dú jì",
        th: "ยาฆ่าเชื้อ",
      },
      {
        cn: "肌肉注射剂",
        pinin: "jīròu zhùshèjì",
        th: "ยาฉีดกล้ามเนื้อ",
      },
      {
        cn: "静脉注射剂",
        pinin: "	jìngmài zhùshèjì",
        th: "ยาฉีดเข้าเส้นเลือด",
      },
      {
        cn: "皮下注射剂",
        pinin: "píxià zhùshèjì",
        th: "ยาฉีดใต้ผิวหนัง",
      },
      {
        cn: "消化药",
        pinin: "	xiāohuà yào",
        th: "ยาช่วยย่อยอาหาร",
      },
      {
        cn: "开胃药",
        pinin: "kāiwèi yào",
        th: "ยาช่วยเจริญอาหาร",
      },
      {
        cn: "鼻通",
        pinin: "Bí tōng",
        th: "ยาดม",
      },
      {
        cn: "药酒",
        pinin: "yàojiǔ",
        th: "ยาดอง",
      },
      {
        cn: "汤药",
        pinin: "tāngyào",
        th: "ยาต้ม, ยาหม้อ",
      },
      {
        cn: "外用擦药",
        pinin: "Wàiyòng cā yào",
        th: "ยาทาภายนอก",
      },
      {
        cn: "安眠药",
        pinin: "Ān mián yào",
        th: "ยานอนหลับ",
      },
      {
        cn: "药水",
        pinin: "yàoshuǐ",
        th: "ยาน้ำ",
      },
      {
        cn: "止咳糖浆",
        pinin: "Zhǐ ké táng jiāng",
        th: "ยาน้ำเชื่อมแก้ไอ",
      },
      {
        cn: "补药",
        pinin: "bǔyào",
        th: "ยาบำรุง",
      },
      {
        cn: "抗菌素",
        pinin: "Kàng jùn sù",
        th: "ยาปฏิชีวนะ",
      },
      {
        cn: "药粉",
        pinin: "yàofěn",
        th: "ยาผง",
      },
      {
        cn: "紫药水",
        pinin: "Zǐ yào shuǐ",
        th: "ยาม่วง",
      },
      {
        cn: "泻药",
        pinin: "xièyào",
        th: "ยาระบาย",
      },
      {
        cn: "内服药",
        pinin: "nèi fúyào",
        th: "ยารับประทาน",
      },
      {
        cn: "退烧药",
        pinin: "Tuì shāo yào",
        th: "ยาลดไข้",
      },
      {
        cn: "成药",
        pinin: "chéngyào",
        th: "ยาสำเร็จรูป",
      },
      {
        cn: "清凉油",
        pinin: "Qīng liáng yóu",
        th: "ยาหม่อง",
      },
      {
        cn: "眼药水",
        pinin: "Yǎn yào shuǐ",
        th: "ยาหยอดตา",
      },
      {
        cn: "口含药",
        pinin: "kǒuhán yào",
        th: "ยาอม",
      },
      {
        cn: "润喉糖",
        pinin: "Rùn hóu táng",
        th: "ยาอมแก้เจ็บคอ",
      },
      {
        cn: "盘尼西林	",
        pinin: "Pán ní xī lín",
        th: "ยาเพนนิซิลิน (ยาปฏิชีวนะ)",
      },
      {
        cn: "止痒剂",
        pinin: "Zhǐ yǎng jì",
        th: "ยาแก้คัน",
      },
      {
        cn: "止泻药",
        pinin: "Zhǐ xiè yào",
        th: "ยาแก้ท้องเสีย",
      },
      {
        cn: "消肿药",
        pinin: "Xiāo zhǒng yào",
        th: "ยาแก้บวม",
      },

      {
        cn: "良药",
        pinin: "Liáng yào",
        th: "ยาแก้ร้อนใน",
      },
      {
        cn: "消炎药",
        pinin: "Xiāo yán yào",
        th: "ยาแก้อักเสบ",
      },
      {
        cn: "抗过敏药",
        pinin: "Kàng guò mǐn yào",
        th: "ยาแก้แพ้",
      },
      {
        cn: "止咳药",
        pinin: "Zhǐ ké yào",
        th: "ยาแก้ไอ",
      },
      {
        cn: "燕窝",
        pinin: "yànwō",
        th: "รังนก",
      },
      {
        cn: "药力",
        pinin: "yàolì",
        th: "ฤทธิ์ยา",
      },
      {
        cn: "多维生素片",
        pinin: "Duō wéi shēng sù piàn",
        th: "วิตามินรวม",
      },
      {
        cn: "棉花球",
        pinin: "Miánhuā qiú",
        th: "สำลีก้อน",
      },
      {
        cn: "胰岛素",
        pinin: "yídǎosù",
        th: "อินซูลิน",
      },

      {
        cn: "口服补液盐",
        pinin: "Kǒufú bǔyè yán",
        th: "เกลือแร่ (ORS)",
      },
      {
        cn: "胶布",
        pinin: "Jiāo bù",
        th: "เทปผ้าปิดแผล",
      },
      {
        cn: "碘伏",
        pinin: "Diǎn fú",
        th: "เบตาดีน",
      },
      {
        cn: "钙片",
        pinin: "Gài piàn",
        th: "แคลเซียมเม็ด",
      },
      {
        cn: "早孕试纸",
        pinin: "Zǎo yùn shì zhǐ",
        th: "แผ่นทดสอบการตั้งครรภ์",
      },
      {
        cn: "退热贴",
        pinin: "	Tuì rè tiē",
        th: "แผ่นแปะลดไข้",
      },
      {
        cn: "杀菌剂",
        pinin: "	shājūnjì",
        th: "แอนตี้เซฟติก (เป็นยาฆ่าเชื้อปฎิชีวนะ)",
      },
      {
        cn: "解毒剂",
        pinin: "Jiědú jì",
        th: "แอนทิโดท (เป็นยาต้านพิษ)",
      },
      {
        cn: "酒精",
        pinin: "Jiǔ jīng",
        th: "แอลกอฮอล์",
      },

      {
        cn: "阿司匹林",
        pinin: "Ā sī pī lín",
        th: "แอสไพริน",
      },
      {
        cn: "人参",
        pinin: "rénshēn",
        th: "โสม",
      },
      {
        cn: "高丽参",
        pinin: "gāolí shēn",
        th: "โสมเกาหลี",
      },
    ],
  };
  return (
    <StyledWrapper>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <Header />
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="content-heading">
            <h1>คำศัพท์ภาษาจีน หมวดยา</h1>
            <MDBDataTable striped bordered small data={data} />
          </div>
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
      <Footer />
      {/*------------------------------------ End Footer ------------------------------------*/}
    </StyledWrapper>
  );
};
export default medicine;

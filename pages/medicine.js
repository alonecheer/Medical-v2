import React from "react";
import { MDBDataTable } from "mdbreact";
import styled from "styled-components";
const StyledWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* ------------------------------------ Start header  ------------------------------------*/
  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  header {
    width: 100%;
    height: 120px;
    background-color: #01273c;
    border-top: 5px solid #40aed7;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 225px 1fr;
  }
  .logo {
    color: white;
    margin-top: 20px;
  }
  .content-heading h1 {
    padding: 20px;
  }
  .logo h1 {
    font-size: 28px;
    text-transform: uppercase;
    color: white;
  }
  .logo span {
    font-size: 12px;
  }
  ul.menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 7%;
  }
  ul.menu li {
    text-decoration: none;
    list-style: none;
  }
  ul.menu li a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    transition: 0.3 ease-ease-in-out;
    padding: 5px 10px;
  }
  ul.menu li a:hover {
    background: #40aed7;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    border-radius: 5px;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
  /* ------------------------------------ End header  ------------------------------------*/

  /* ------------------------------------ Start section  ------------------------------------*/

  .content {
    margin: 0 auto;
    max-width: 960px;
    height: auto;
  }
  .not_res {
    display: none;
  }
  /* ------------------------------------ End section  ------------------------------------*/
  /* ------------------------------------ Start Footer  ------------------------------------*/

  .copyright {
    width: 100%;
    height: 60px;
    background-color: #01273c;
  }
  .copyright-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    color: white;
  }
  .copytext {
    justify-self: flex-start;
    align-self: center;
  }
  .creadit {
    justify-self: flex-end;
    align-self: center;
  }
  .content-heading img {
    width: 100%;
  }
  .nav li ul {
    position: absolute;
    display: none;
    width: inherit;
  }
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
  }
  /* ------------------------------------ End Footer  ------------------------------------*/
  @media screen and (max-width: 414px) {
    header {
      width: 100%;
      height: auto;
      background-color: #01273c;
      border-top: 5px solid #40aed7;
      margin: 0 auto;
    }
    .copyright {
      width: 100%;
      height: 80px;
      background-color: #01273c;
    }
    .copyright-grid {
      display: grid;
      grid-template-columns: 1fr;
      height: 60px;
      color: white;
    }
    ul.menu {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      margin-top: 7%;
      margin-bottom: 7%;
    }
    ul.menu li {
      text-decoration: none;
      list-style: none;
      margin-top: 15px;
    }
    ul.menu li a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      transition: 0.3 ease-ease-in-out;
      padding: 5px 10px;
    }
    ul.menu li a:hover {
      background: #40aed7;
      padding: 5px 10px;
      border-radius: 5px;
    }
    .nav-grid {
      display: grid;
      grid-template-columns: 1fr;
    }
    .logo {
      color: white;
      margin-top: 20px;
    }
    h1 {
      color: black;
    }
    .logo h1 {
      font-size: 28px;
      text-transform: uppercase;
    }
    .logo span {
      font-size: 12px;
    }
    .content-heading {
      display: none;
    }
    .not_res {
      display: block;
      color: red;
      text-align: center;
    }
  }
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
      <header>
        <nav>
          <div className="container">
            <div className="nav-grid">
              <div className="logo">
                <h1>Dictionary</h1>
                <span>Medical terminology</span>
              </div>
              <div className="fr">
                <ul className="menu">
                  <li>
                    <a href="/">SEARCH</a>
                  </li>
                  <div class="dropdown">
                    <li>
                      <a href="#">Category</a>
                    </li>
                    <div class="dropdown-content">
                      <a href="/disease">疾病 โรค</a>
                      <a href="/medicine">药品 หมวดยา</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                  <li>
                    <a href="/conversations">Conversations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
      <footer>
        <div className="copyright">
          <div className="container">
            <div className="copyright-grid">
              <div className="copytext">
                <p>Copyright © 2020 Chatchaya - All Rights Reserved</p>
              </div>
              <div className="creadit">
                <p>Meen</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*------------------------------------ End Footer ------------------------------------*/}
    </StyledWrapper>
  );
};
export default medicine;

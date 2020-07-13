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
      height: 120px;
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
      grid-template-columns: 190px 1fr;
    }
    .logo {
      color: white;
      margin-top: 20px;
    }
    h1 {
      color: white;
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
  }`
const disease = () => {
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
    return(
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
                      <a href="#">Link 2</a>
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
          <h1>คำศัพท์ภาษาจีน โรค</h1>
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
    )
}
export default disease
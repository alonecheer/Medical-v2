import React from "react";
import Header from './header'
import Footer from './footer'
import '../public/static/style/main.css'
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
  h1 {
    margin: 10px;
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
    margin-top:50px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
  }
  /* ------------------------------------ End Footer  ------------------------------------*/
  .grid-container {
    display: grid;
    grid-template-columns: 110px auto 110px auto;
    grid-gap: 10px;
    /*background-color: #2196F3;*/
    padding: 10px;
  }

  .grid-container > div {
    /*background-color: rgba(255, 255, 255, 0.8);*/
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
  }
  .grid-container > div span {
    font-size: 20px;
    /*color: red;*/
  }
  /* ------------------------------------ End Grid  ------------------------------------*/
  @media screen and (max-width: 415px) {
    .margintb {
    padding-top: 50px;
    padding-bottom: 50px;
  }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      padding: 10px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2px;
      /*background-color: #2196F3;*/
      padding: 10px;
    }
    .grid-container > div {
      /*background-color: rgba(255, 255, 255, 0.8);*/
      text-align: left;
      padding: 2px 0;
      font-size: 20px;
    }
    .grid-container > div span {
      padding-left: 10px;
      /*color: red;*/
    }
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
      margin-top:50px;
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
      color: white;
    }
    .logo h1 {
      font-size: 28px;
      text-transform: uppercase;
    }
    .logo span {
      font-size: 12px;
    }
    /* .content-heading {
      display: none;
    } */
    .not_res {
      display: block;
      color: red;
      text-align: center;
    }
  }
  /* ------------------------------------ End Responsive  ------------------------------------*/
  .margintb {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const conversations = () => {
  return (
    <StyledWrapper>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <Header />
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="margintb" style={{ overflowX: "auto" }}>
            <table>
              <tbody>
                <tr>
                  <th>ประโยค</th>
                  <th>พินอิน</th>
                  <th>ความหมาย</th>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> คุณหมอครับผมไม่ค่อยสบาย</td>
                </tr>
                <tr>
                  <td>大 夫 ，我 不 太 舒 服</td>
                  <td> dài fu ， wǒ bú tài shū fu。</td>
                  <td> sdfmkdsjkfjwerkjewlkr</td>
                </tr>
             
               
              </tbody>
            </table>
          </div>
          {/* <div className="grids">
            <div className="item1">
              <h2>ประโยค</h2>
              <p>症状</p>
              <p>我的头很痛</p>
            </div>

            <div className="item1">
              <h2>พินอิน</h2>
              <p>Zhèngzhuàng</p>
              <p>Wǒ de tóu hěn tòng.</p>
            </div>
            <div className="item1">
              <h2>คำอ่าน</h2>
              <p>เจิ้ง จ้วง</p>
              <p>หว่อ เตอ โถว เหิ่น โท่ง</p>
            </div>
            <div className="item1">
              <h2>ความหมาย</h2>
              <p>อาการป่วย</p>
              <p>ผมปวดหัวมากเลยครับ</p>
            </div>
          </div> */}
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
      <Footer />
      {/*------------------------------------ End Footer ------------------------------------*/}
    </StyledWrapper>
  );
};
export default conversations;

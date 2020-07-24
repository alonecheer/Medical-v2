import React from "react";
import "../public/static/style/main.css";
const Header = () => {
  return (
    <header>
      <title>Header</title>
      <div className="container">
        <div className="nav-gid">
          <div className="name-web">
            <a href="/">
              <div className="link">
                <h1>Dictionary</h1>
                <span>Medical terminology</span>
              </div>
            </a>
          </div>
          <div className="fr">
            <ul className="menu">
              <div className="dropdown">
                <li>
                  <a href="/">Category</a>
                </li>
                {/* <div className="dropdown-content">
                  <a href="/disease">คำศัพท์ภาษาจีนเกี่ยวกับโรคต่างๆ</a>
                  <a href="/medicine">คำศัพท์ภาษาจีนเกี่ยวกับยา</a>
                  <a href="/#">ศัพท์ภาษาจีนเกี่ยวกับการแสดงอาการต่างๆ</a>
                  <a href="/#">คำศัพท์ที่ใช้ในการทำการตรวจและรักษา</a>
                  <a href="/#">ศัพท์ภาษาจีนเกี่ยวกับเครื่องมือทางการแพทย์</a>
                  <a href="/#">
                    คำศัพท์ภาษาจีนเกี่ยวกับบุคลากรทางการแพทย์ในแผนกต่างๆ
                  </a>
                  <a href="/#">คำศัพท์ภาษาจีนเกี่ยวกับห้องต่างๆในโรงพยาบาล</a>
                  <a href="/#">คำศัพท์ภาษาจีนเกี่ยวกับแผนกต่างๆ</a>
                  <a href="/#">ตัวอย่างประโยคที่ใช้ในขั้นตอนการลงทะเบียน</a>
                  <a href="/#">
                    ตัวอย่างประโยคที่ผู้ป่วยมักใช้ในการบอกอาการให้แพทย์ทราบ
                  </a>
                  <a href="/#">ตัวอย่างประโยคที่แพทย์มักใช้ในการวินิจฉัยโรค</a>
                  <a href="/#">ตัวอย่างประโยคที่เกี่ยวข้องกับการฉีดยา</a>
                  <a href="/#">
                    ตัวอย่างประโยคที่มักใช้ในการแนะนำการใช้ยาและการซื้อยา
                  </a>
                  <a href="/#">ตัวอย่างประโยคที่เกี่ยวกับการรับประทานยา</a>
                  <a href="/#">ประโยคที่มักใช้เมื่อมีญาติมาเยี่ยมผู้ป่วย</a>
                  <a href="/#">
                    ตัวอย่างบนสนทนาเมื่อแพทย์ทำการตรวจวินิจฉัยโรคของผู้ป่วย
                  </a>
                  <a href="/#">ตัวอย่างบทสนาเมื่อทำการตรวจเลือดและเจาะเลือด</a>
                  <a href="/#">ตัวอย่างบทสนาเมื่อทำการเจาะเลือด</a>
                  <a href="/#">ตัวอย่างบทสนทนาในการรายงานผลตรวจโรค</a>
                </div> */}
              </div>
              <li>
                <a href="/conversations">Conversations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

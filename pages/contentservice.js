import React from "react";

const Contentservice = () => {
  return (
    <div>
      <div className="container">
        <div className="content-service">
          <div className="content-service-grid-ref">
            <div className="content-service-grid-ref-item">
              <img src="/static/images/chatchaya.jpg"></img>
            </div>
            <div className="content-service-grid-ref-item">
              <p>
                เว็บนี้เป็นเว็บเกี่ยวกับศัพท์เทคนิคทางการแพทย์ที่บุคลากรทางการแพทย์สามารถนำไปใช้ในการ
                <br></br>
                เว็บนี้เป็นผลงานที่พัฒนาขึ้นมาจากบทเรียนที่ได้จากการฝึกงานในตำแหน่งผู้ประสานงานด้านการแพทย์ภาษาจีนที่โรงพยาบาลกรุงเทพสิริโรจน์ของนางสาวชัชชญา
                สิทธิผล (6030311095) นักศึกษาคณะวิเทศศึกษา สาขาวิเทศธุรกิจ : จีน
                จากมหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต
                ซึ่งเว็บนี้เป็นเว็บที่สร้างขึ้นมาเพื่อให้ความรู้เกี่ยวกับศัพท์เทคนิคทางการแพทย์แก่ผู้ประสานงานด้านการแพทย์ภาษาจีนและบุคลากรทางการแพทย์ให้มีความรู้ในศัพท์ที่ต้องใช้ในการทำงานให้มีมากยิ่งขึ้น
                โดยจุดประสงค์หลักในการสร้างเว็บนี้ขึ้นมาก็เพื่อที่จะเป็นแนวทางในการแก้ปัญหาด้านการใช้ศัพท์เทคนิคทางการแพทย์ของผู้ประสานงานด้านการแพทย์ภาษาจีนให้มีประสิทธิภาพมากยิ่งขึ้น
                และเพื่อช่วยอำนวยความสะดวกในการทำงานในตำแหน่งผู้ประสานงานด้านการแพทย์ภาษาจีน
              </p>
            </div>
          </div>

          <div className="content-service-grid">
            {/* ----------------------------------------------- 1 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/disease">
                <div className="link">
                  <img src="/static/images/Layer 1.png" />
                  {/* <h2>疾病</h2> */}
                  <p>คำศัพท์ภาษาจีนเกี่ยวกับโรคต่างๆ</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 2 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/medicine">
                <div className="link">
                  <img src="/static/images/Layer 2.png" />
                  {/* <h2>药品</h2> */}
                  <p>คำศัพท์ภาษาจีนเกี่ยวกับยา</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 3 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/symptom">
                <div className="link">
                  <img src="/static/images/Layer 3.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ศัพท์ภาษาจีนเกี่ยวกับการแสดงอาการต่างๆ</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 4 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/checkandtreat">
                <div className="link">
                  <img src="/static/images/Layer 4.png" />
                  {/* <h2>疾病</h2> */}
                  <p>คำศัพท์ที่ใช้ในการทำการตรวจและรักษา</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 5 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/tools">
                <div className="link">
                  <img src="/static/images/Layer 5.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ศัพท์ภาษาจีนเกี่ยวกับเครื่องมือทางการแพทย์</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 6 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/department">
                <div className="link">
                  <img src="/static/images/Layer 6.png" />
                  {/* <h2>疾病</h2> */}
                  <p>คำศัพท์ภาษาจีนเกี่ยวกับบุคลากรทางการแพทย์ในแผนกต่างๆ</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 7 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/room">
                <div className="link">
                  <img src="/static/images/Layer 7.png" />
                  {/* <h2>疾病</h2> */}
                  <p>คำศัพท์ภาษาจีนเกี่ยวกับห้องต่างๆในโรงพยาบาล</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 8 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/department2">
                <div className="link">
                  <img src="/static/images/Layer 8.png" />
                  {/* <h2>疾病</h2> */}
                  <p>คำศัพท์ภาษาจีนเกี่ยวกับแผนกต่างๆ</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 9 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/register">
                <div className="link">
                  <img src="/static/images/Layer 9.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่ใช้ในขั้นตอนการลงทะเบียน</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 10 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/report">
                <div className="link">
                  <img src="/static/images/Layer 10.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่ผู้ป่วยมักใช้ในการบอกอาการให้แพทย์ทราบ</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 11 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/diagnose">
                <div className="link">
                  <img src="/static/images/Layer 11.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่แพทย์มักใช้ในการวินิจฉัยโรค</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 12 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/inject">
                <div className="link">
                  <img src="/static/images/Layer 12.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่เกี่ยวข้องกับการฉีดยา</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 13 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="/recommend">
                <div className="link">
                  <img src="/static/images/Layer 13.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่มักใช้ในการแนะนำการใช้ยาและการซื้อยา</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 14 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 14.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างประโยคที่เกี่ยวกับการรับประทานยา</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 15 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 15.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ประโยคที่มักใช้เมื่อมีญาติมาเยี่ยมผู้ป่วย</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 16 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 16.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างบนสนทนาเมื่อแพทย์ทำการตรวจวินิจฉัยโรคของผู้ป่วย</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 17 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 17.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างบทสนาเมื่อทำการตรวจเลือดและเจาะเลือด</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 18 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 18.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างบทสนาเมื่อทำการเจาะเลือด</p>
                </div>
              </a>
            </div>
            {/* ----------------------------------------------- 19 ----------------------------------------------- */}
            <div className="content-service-item">
              <a href="#">
                <div className="link">
                  <img src="/static/images/Layer 19.png" />
                  {/* <h2>疾病</h2> */}
                  <p>ตัวอย่างบทสนทนาในการรายงานผลตรวจโรค</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* -------- content-service -------- */}
      </div>
    </div>
  );
};

export default Contentservice;

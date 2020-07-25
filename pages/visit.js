import React from "react";
import Header from "./header";
import Footer from "./footer";

const visit = () => {
  return (
    <div>
      <title>Visit relatives</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ประโยคที่มักใช้เมื่อมีญาติมาเยี่ยมผู้ป่วย</h2>
        </div>
        <div className="conversation">
          <ul>
            <li>你是病人的家属吗？ </li>
            <li>Nǐ shì bìngrén de jiāshǔ ma? </li>
            <li>คุณเป็นญาติของผู้ป่วยรึป่าวครับ? </li>
          </ul>

          <ul>
            <li>现在不是探病时间。 </li>
            <li>Xiànzài bùshì tàn bìng shíjiān. </li>
            <li>ตอนนี้ไม่ใช่เวลาเยี่ยมผู้ป่วยค่ะ </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default visit;

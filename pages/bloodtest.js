import React from "react";
import Header from "./header";
import Footer from "./footer";

const bloodtest = () => {
  return (
    <div>
      <title>Blood test</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างบทสนทนาเมื่อทำการตรวจเลือดและเจาะเลือด</h2>
        </div>
        <div className="conversation">
          <div className="detail-grid">
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>大夫 :</p>
            </div>
            <div className="detail-grid-item">
              <p>您怎么了？ </p>
            </div>

            <div className="detail-grid-item">
              <p>Dàifū :</p>
            </div>
            <div className="detail-grid-item">
              <p>nín zěnme le? </p>
            </div>

            <div className="detail-grid-item">
              <p>คุณหมอ :</p>
            </div>
            <div className="detail-grid-item">
              <p>คุณมีอาการอย่างไรบ้าง?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default bloodtest;

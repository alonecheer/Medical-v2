import React from "react";
import Header from "./header";
import Footer from "./footer";

const reportdes = () => {
  return (
    <div>
      <title>Report</title>
      <Header />
      <div className="container">
        <div className="title-category">
          <h2>ตัวอย่างบทสนทนาในการรายงานผลตรวจโรค</h2>
        </div>
        <div className="conversation">
          <div className="detail-grid">
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>王芬</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>你好！请问，我的验血报告出来了吗？</p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>nǐhǎo! qǐngwèn, wǒ de yànxuè bàogàochūlái le ma?</p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                สวัสดีค่ะ ขอถามหน่อยว่า รายงานผลตรวจเลือดของฉันออกมาแล้วหรือ
                ยังคะ ?
              </p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>护士</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                出来了，你的血型是AB 型。你没有贫血，
                太好了。不过，你现在还没怀孕。
              </p>
            </div>

            <div className="detail-grid-item">
              <p>Hùshì </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                chūláile, nǐ de xuèxíng shì AB xíng. Nǐ méiyǒu pínxuè, tài
                hǎole. Bùguò, nǐ xiànzài hái méi huáiyùn.
              </p>
            </div>

            <div className="detail-grid-item">
              <p>พยาบาล </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                ออกมาแล้วค่ะ กรุ๊ปเลือดของคุณเป็น AB นะคะ คุณไม่เป็นโรคโลหิต จาง
                ดีมากเลยค่ะ เพียงแต่คุณยังไม่ตั้งครรภ์ตอนนี้นะคะ
              </p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>王芬</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>谢谢你告诉我检验结果，我过两个月再来检 查吧。</p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                xièxiè nǐ gàosù wǒ jiǎnyàn jiéguǒ, wǒguò liǎng gè yuè zàilái
                jiǎn chá ba.
              </p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                ขอบคุณนะคะ ที่บอกผลตรวจให้ฉัน ดิฉันจะมาตรวจอีกทีในอีก 2 เดือน
                หน้านะคะ
              </p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>护士</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>可以， 下次见。</p>
            </div>

            <div className="detail-grid-item">
              <p>Hùshì </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>kěyǐ, xià cì jiàn</p>
            </div>

            <div className="detail-grid-item">
              <p>พยาบาล </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>ได้ค่ะ แล้วเจอกันครั้งหน้านะคะ</p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>王芬</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p> 再见。</p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>zàijiàn.</p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>ลาก่อนค่ะ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default reportdes;

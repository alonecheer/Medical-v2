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
              <p>王芬</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>你好！我今天是来验血的。 </p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p> nǐhǎo! wǒ jīntiān shì lái yànxuè de. </p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>สวัสดีค่ะ วันนี้ฉันมาตรวจเลือด?</p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>护士</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>好的，你到那边抽血吧。 </p>
            </div>

            <div className="detail-grid-item">
              <p>Hùshì </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p> hǎode, nǐ dào nàbiān chōuxuè ba. </p>
            </div>

            <div className="detail-grid-item">
              <p>พยาบาล </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>โอเคค่ะ คุณไปเจาะเลือดตรงนั้นนะคะ</p>
            </div>
            {/* -------------------------------- ###### -------------------------------- */}
            <div className="detail-grid-item">
              <p>王芬</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>请问，我需要验一些什么项目。</p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>qǐngwèn, wǒ xūyào yàn yīxiē shénme xiàngmù.</p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>ขอถามหน่อยค่ะ ฉันต้องตรวจรายการอะไรบ้างคะ?</p>
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
                你先验一下血型，然后，检验一下有没有贫血?
                最后，验一下是不是怀孕了？{" "}
              </p>
            </div>

            <div className="detail-grid-item">
              <p>Hùshì</p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>
                nǐ xiān yàn yīxià xuèxíng, ránhòu, jiǎnyàn yīxià yǒu méiyǒu
                pínxuè? Zuìhòu, yàn yīxià shì bùshì huáiyùn le?
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
                คุณต้องตรวจกรุ๊ปเลือดก่อน หลังจากนั้น
                ตรวจว่ามีโรคโลหิตจางหรือปล่าว สุดท้าย
                ตรวจว่าคุณตั้งครรภ์หรือไม่ค่ะ
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
              <p>好的，我明白了。</p>
            </div>

            <div className="detail-grid-item">
              <p>Wángfēn </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>hǎode, wǒ míngbái le.</p>
            </div>

            <div className="detail-grid-item">
              <p>หวางเฟิน </p>
            </div>
            <div className="detail-grid-item">
              <p>:</p>
            </div>
            <div className="detail-grid-item">
              <p>โอเคค่ะ ฉันเข้าใจแล้วค่ะ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default bloodtest;

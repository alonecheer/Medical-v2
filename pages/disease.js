import React from "react";
import { MDBDataTable } from "mdbreact";
import Header from './header'
import Footer from './footer'
import '../public/static/style/main.css'

const disease = () => {
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
        cn: "糖尿病",
        pinin: "tángniàobìng",
        th: "เบาหวาน",
      },
      {
        cn: "癌",
        pinin: "ái",
        th: "มะเร็ง",
      },
      {
        cn: "过敏症",
        pinin: "guòmǐnzhèng",
        th: "ภูมิแพ้",
      },
      {
        cn: "爱滋病",
        pinin: "àizībìng",
        th: "เอดส์",
      },
      {
        cn: "瘫痪",
        pinin: "tānhuàn",
        th: "อัมพาต",
      },
      {
        cn: "贫血症",
        pinin: "pínxiězhèng",
        th: "โลหิตจาง",
      },
      {
        cn: "白喉",
        pinin: "Bái hóu",
        th: "โรคคอตีบ",
      },
      {
        cn: "白血病 ",
        pinin: "Bái xiě bìng",
        th: "ลูคีเมีย ",
      },
      {
        cn: "百日咳",
        pinin: "Bǎi rì ké",
        th: "ไอกรน",
      },
      {
        cn: "便秘",
        pinin: "Biàn mì",
        th: "ท้องผูก",
      },
      {
        cn: "半身不遂,偏瘫",
        pinin: "Bàn shēn bù suí, Piān tān",
        th: "อัมพาตครึ่งซีก",
      },
      {
        cn: "斑疹伤寒",
        pinin: "Bān zhěn shāng hán",
        th: "โรคไข้รากสาดใหญ่ ",
      },
      {
        cn: "打疫苗 ",
        pinin: "Dǎ yì miáo",
        th: "การฉีดวัคซีน",
      },
      {
        cn: "胆石病  ",
        pinin: "Dǎn shí bìng",
        th: "นิ่วในถุงน้ำดี",
      },
      {
        cn: "胆囊炎",
        pinin: "Dǎn náng yán",
        th: "ถุงน้ำดีอักเสบ",
      },
      {
        cn: "癫痫",
        pinin: "Diān xián ",
        th: "โรคลมบ้าหมู ",
      },
      {
        cn: "窦炎",
        pinin: "Dòu yán ",
        th: "โรคไซนัสอักเสบ ",
      },
      {
        cn: "带状疮疹",
        pinin: "Dài zhuàng chuāng zhěn",
        th: "โรคงูสวัด",
      },
      {
        cn: "丹毒",
        pinin: " Dān dú  ",
        th: "โรคไฟลามทุ่ง ",
      },
      {
        cn: "耳鸣",
        pinin: "Ěr    míng ",
        th: "หูอื้อ",
      },
      {
        cn: "肺炎",
        pinin: " Fèi yán",
        th: "  โรคปอดบวม ",
      },
      {
        cn: "粉刺",
        pinin: "Fěn cì  ",
        th: "สิว ",
      },
      {
        cn: "发抖",
        pinin: "Fā dǒu ",
        th: "สั่น",
      },
      {
        cn: "腹泻",
        pinin: "Fùxiè",
        th: "โรคอุจจาระร่วง / ท้องร่วง ",
      },
      {
        cn: "复发症",
        pinin: "Fù fā zhèng",
        th: "โรคกำเริบ ",
      },
      {
        cn: "发烧 ",
        pinin: "Fā  shāo   ",
        th: "ไข้ ",
      },
      {
        cn: "发痒",
        pinin: "Fā yǎng  ",
        th: " คัน",
      },
      {
        cn: "风疹",
        pinin: " Fēng zhěn    ",
        th: "โรคหัดเยอรมัน ",
      },
      {
        cn: "腹膜炎 ",
        pinin: "Fù  mó yán  ",
        th: "โรคเยื่อบุช่องท้องอักเสบ ",
      },
      {
        cn: "风湿病",
        pinin: "Fēng  shī bìng",
        th: "  โรคไขข้ออักเสบ โรคปวดตามข้อตามกล้ามเนื้อ",
      },
      {
        cn: "肺蛭",
        pinin: "Fèi zhì",
        th: "   พยาธิใบไม้ที่ปอด",
      },
      {
        cn: "腹膜",
        pinin: "Fù mó  ",
        th: "เยื่อบุช่องท้อง",
      },
      {
        cn: "腹膜炎",
        pinin: "Fù mó yán",
        th: "เยื่อบุช่องท้องอักเสบ",
      },
      {
        cn: "肝炎",
        pinin: "Gān yán ",
        th: " โรคตับอักเสบ   ",
      },
      {
        cn: "感冒, 伤风, 着凉",
        pinin: "Gǎn mào, shāngfēng, zháoliáng",
        th: "ไข้หวัด หวัด ",
      },
      {
        cn: "骨折",
        pinin: "  Gǔ zhé    ",
        th: "กระดูกหัก ",
      },
      {
        cn: "关节炎",
        pinin: "Guān jié yán  ",
        th: "โรคไขข้อ ข้อต่ออักเสบ ",
      },
      {
        cn: "佝偻病",
        pinin: "Gōu lóu bìng ",
        th: "โรคกระดูกอ่อน โรคหลังค่อม ",
      },
      {
        cn: "昏迷",
        pinin: "Hūn mí  ",
        th: "อาการโคม่า ",
      },
      {
        cn: "霍乱",
        pinin: "Huò luàn",
        th: "อหิวาตกโรค ",
      },
      {
        cn: "坏疽  ",
        pinin: " Huài jū  ",
        th: "เนื้อที่ตายและเน่า",
      },
      {
        cn: "黄热病",
        pinin: "Huáng rè bìng ",
        th: "ไข้เหลือง",
      },
      {
        cn: "近视",
        pinin: "Jìn shì ",
        th: "สายตาสั้น  ",
      },
      {
        cn: "精神病",
        pinin: "Jīng shén bìng",
        th: "โรคประสาท ",
      },
      {
        cn: "脊髓灰质炎",
        pinin: "Jǐ suǐ huī zhí yán",
        th: "โปลิโอ ",
      },
      {
        cn: "疥疮",
        pinin: "Jiè chuāng  ",
        th: "แผลจากหิดหรือกลากเกลื้อน ",
      },
      {
        cn: "结核病",
        pinin: "Jié hé bìng  ",
        th: "วัณโรค",
      },
      {
        cn: "咳嗽",
        pinin: " Ké sòu   ",
        th: "ไอ ",
      },
      {
        cn: "狂犬病",
        pinin: " Kuáng quǎn bìng  ",
        th: " โรคพิษสุนัขบ้า",
      },
      {
        cn: "溃疡",
        pinin: "Kuì yáng   ",
        th: "แผลเปื่อย บาดแผลที่พุพอง",
      },
      {
        cn: "痢疾 ",
        pinin: "Lì jí      ",
        th: " โรคบิด ",
      },
      {
        cn: "拉肚子",
        pinin: "Lā dù zi    ",
        th: " โรคอุจจาระร่วง / ท้องร่วง ",
      },
      {
        cn: "流感   ",
        pinin: " Liú  gǎn       ",
        th: "ไข้หวัดใหญ่",
      },
      {
        cn: "阑尾炎",
        pinin: "Lán wěi yán      ",
        th: "ไส้ติ่งอับเสบ",
      },
      {
        cn: "流行性腮腺炎",
        pinin: "Liú xíng xìng sāi xiàn yán",
        th: "โรคคางทูม ",
      },
      {
        cn: "瘤 ",
        pinin: "Liú ",
        th: " เนื้องอก ",
      },
      {
        cn: "盲肠炎",
        pinin: "Máng cháng yán ",
        th: "ไส้ติ่งอับเสบ ",
      },
      {
        cn: "慢性病",
        pinin: "Màn xìng bìng",
        th: " โรคเรื้อรัง ",
      },
      {
        cn: "麻疹 ",
        pinin: "Má zhěn ",
        th: " โรคหัด",
      },
      {
        cn: "麻痹",
        pinin: "Má bì",
        th: "อัมพาต",
      },
      {
        cn: "梅毒",
        pinin: "Méi  dú ",
        th: "โรคซิฟิลิส",
      },
      {
        cn: "慢性胃炎",
        pinin: "Màn xìng wèi yán",
        th: "กระเพาะอาหารอักเสบเรื้อรัง",
      },
      {
        cn: "扭伤",
        pinin: " Niǔ shāng",
        th: "แพลง sprain  ",
      },
      {
        cn: "疟疾   ",
        pinin: " Nüè jí    ",
        th: "ไข้มาลาเรีย malaria",
      },
      {
        cn: "呕吐   ",
        pinin: "Ǒu tù   ",
        th: "อาเจียน",
      },
      {
        cn: "皮炎",
        pinin: " Pí yán  ",
        th: "โรคผิวหนัง",
      },
      {
        cn: "贫血",
        pinin: "Pín xiě ",
        th: "โรคโลหิตจาง ",
      },
      {
        cn: "偏瘫, 半身不遂",
        pinin: "Piān tān, Bàn shēn bù suí",
        th: "อัมพาตครึ่งซีก ",
      },
      {
        cn: "偏头痛  ",
        pinin: "Piān tóu tòng",
        th: "ไมเกรน ",
      },
      {
        cn: "破伤风 ",
        pinin: "Pò shāng fēng",
        th: "โรคบาดทะยัก ",
      },
      {
        cn: "膀胱 ",
        pinin: "Páng guāng",
        th: " กระเพาะปัสสาวะ",
      },
      {
        cn: "雀斑 ",
        pinin: "Què bān    ",
        th: "ฝ้ากระ ",
      },
      {
        cn: "龋齿",
        pinin: "Qǔ chǐ  ",
        th: "ฟันผุ ",
      },
      {
        cn: "巧克力样囊肿",
        pinin: "Qiǎo kè lì yàng náng zhǒng",
        th: "โรคช๊อกโกแลตซีสต์ ",
      },
      {
        cn: "潜伏期 ",
        pinin: " Qián fú qī",
        th: "ระยะฟักตัว ",
      },
      {
        cn: "搔挠 ",
        pinin: " Sāo náo ",
        th: "รอยขีดข่วน ",
      },
      {
        cn: "沙眼",
        pinin: "Shā yǎn  ",
        th: "ริดสีดวงตา ",
      },
      {
        cn: "色盲",
        pinin: "Sè  máng",
        th: "ตาบอดสี ",
      },
      {
        cn: "散光  ",
        pinin: " Sàn guāng",
        th: "อาการตาพร่า",
      },
      {
        cn: "水痘",
        pinin: "Shuǐ dòu ",
        th: " อีสุกอีใส",
      },
      {
        cn: "湿疹",
        pinin: "  Shī zhěn",
        th: "ผิวหนังอักเสบ กลาก ",
      },
      {
        cn: "伤风，感冒，着凉",
        pinin: "shāngfēng，Gǎnmào,zháoliáng ",
        th: " ไข้หวัด หวัด",
      },
      {
        cn: "神经痛",
        pinin: "Shén jīng tòng",
        th: "อาการปวดประสาท",
      },
      {
        cn: "神经衰弱 ",
        pinin: "Shén jīng shuāi ruò",
        th: "รคประสาทที่มีอาการอ่อนเพลียเรื้อรัง ",
      },
      {
        cn: "烫伤",
        pinin: "Tàng shāng  ",
        th: "น้ำร้อนลวก ",
      },
      {
        cn: "糖尿病",
        pinin: "Táng niào bìng ",
        th: "โรคเบาหวาน",
      },
      {
        cn: "痛  ",
        pinin: " Tòng  ",
        th: " ความเจ็บปวด",
      },
      {
        cn: "痛风  ",
        pinin: " Tòng fēng",
        th: "โรคเกาต์",
      },
      {
        cn: "头痛",
        pinin: "Tóu tòng   ",
        th: "ปวดหัว",
      },
      {
        cn: "天花",
        pinin: " Tiān huā  ",
        th: "ไข้ทรพิษ ฝีดาษ",
      },
      {
        cn: "胃炎",
        pinin: "Wèi yán",
        th: "โรคกระเพาะ   ",
      },
      {
        cn: "外伤 ",
        pinin: "Wài shāng ",
        th: " การบาดเจ็บ ",
      },
      {
        cn: "胃气胀 ",
        pinin: "Wèi qì zhàng ",
        th: "ท้องอืดท้องเฟ้อ",
      },
      {
        cn: "胃病",
        pinin: " Wèi  bìng    ",
        th: " โรคกระเพาะ",
      },
      {
        cn: "胃溃疡",
        pinin: "Wèi kuì yáng  ",
        th: "แผลกระเพาะอาหาร",
      },
      {
        cn: "胃穿孔",
        pinin: "Wèi chuān kǒng ",
        th: "กระเพาะอาหารทะลุ",
      },
      {
        cn: "膀胱炎",
        pinin: "Wèi qì shì",
        th: "กระเพาะปัสสาวะอักเสบ",
      },
      {
        cn: "哮喘",
        pinin: "xiào chuǎn ",
        th: "โรคหอบหืด",
      },
      {
        cn: "心律不齐",
        pinin: "Xīn lǜ bù qí ",
        th: "หัวใจเต้นผิดจังหวะ",
      },
      {
        cn: "先天性病",
        pinin: " Xiān tiān xìng bìng ",
        th: "โรคติดต่อทางเพศสัมพันธ์ที่เกิดขึ้นเอง ",
      },
      {
        cn: "心绞痛",
        pinin: "Xīn jiǎo tòng ",
        th: "โรคหลอดเลือดหัวใจตีบตัน ",
      },
      {
        cn: "消化不良",
        pinin: " Xiāo huà bù liáng",
        th: "อาหารไม่ย่อย ",
      },
      {
        cn: "心肌梗塞",
        pinin: "Xīn jī gěng sè",
        th: "โรคหัวใจขาดเลือด",
      },
      {
        cn: "猩红热",
        pinin: "Xīng hóng rè",
        th: "ไข้อีดำอีแดง",
      },
      {
        cn: "血栓形成 ",
        pinin: "Xuè shuān xíng chéng",
        th: " โรคเส้นเลือดตีบ ",
      },
      {
        cn: "斜颈",
        pinin: " Xié jǐng ",
        th: "โรคคอแข็ง เนื่องจากกล้ามเนื้อคอหด เกร็ง",
      },
      {
        cn: "荨麻疹",
        pinin: "Xún má zhěn    ",
        th: " โรคลมพิษ ",
      },
      {
        cn: "泻肚，拉肚子",
        pinin: "Xièdù， Lādùzǐ",
        th: "ท้องเสีย, ท้องร่วง",
      },
      {
        cn: "瘀伤",
        pinin: "   Yū shāng  ",
        th: " ช้ำ   ",
      },
      {
        cn: "牙龈炎 ",
        pinin: "Yá yín yán ",
        th: "โรคเหงือกอักเสบ",
      },
      {
        cn: "营养不良",
        pinin: "Yíng yǎng bù liáng",
        th: " ขาดสารอาหาร ",
      },
      {
        cn: "咽炎",
        pinin: "Yān yán",
        th: "   คอหอยอักเสบ ",
      },
      {
        cn: "硬化  ",
        pinin: "Yìng huà",
        th: " เส้นโลหิตตีบ ",
      },
      {
        cn: "晕厥   ",
        pinin: "Yūn jué  ",
        th: "โรควูบ โรคหมดสติชั่ววูบ สลบ เป็นลม ",
      },
      {
        cn: "疡 ",
        pinin: " Yáng",
        th: "  แผล",
      },
      {
        cn: "痣  ",
        pinin: "Zhì ",
        th: "ฝ้ากระ ",
      },
      {
        cn: "ฝ้ากระ ",
        pinin: " Zhī qì guǎn yán",
        th: "โรคหลอดลมอักเสบ ",
      },
      {
        cn: "感冒, 伤风, 着凉",
        pinin: "Gǎnmào, shāngfēng, zháoliáng",
        th: "ไข้หวัด หวัด ",
      },
      {
        cn: "坐骨神经痛",
        pinin: "Zuò gǔ shén jīng tòng",
        th: "อาการปวดอย่างรุนแรงตามเส้นประสาท มีอาการปวดที่หลัง ต้นขา",
      },
      {
        cn: "症状",
        pinin: " Zhèng zhuàng",
        th: "อาการของโรค",
      },

    ],
  };
  return (
    <div>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <Header />
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="content-heading">
            <h1>คำศัพท์ภาษาจีน หมวดโรค</h1>
            <MDBDataTable striped bordered small data={data} />
          </div>
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
      <Footer />
      {/*------------------------------------ End Footer ------------------------------------*/}
    </div>
  );
};
export default disease;

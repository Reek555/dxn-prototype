import article from "../assets/article.png"
import { useState} from "react"
import "../styles/homeStyle.css"


function F () {
  return (
    <div id = "F-container" >
      <h1 style = {{lineHeight: "68px"}}>غير حياتك للأفضل صحيا وماليا واجتماعيا</h1>
      <h3 style = {{marginBottom: 51}}>هل تريد منتجات مفيدة عالية القيمة الغذائية وخالية من المواد الضارة ؟</h3>
      <a href = "/know-more">
      <button class = "btn" style = {{fontSize: 21, marginBottom: 37, backgroundColor: "#4B6F44", fontWeight: 600, color: "white"}} >تعرف أكثر</button>
      </a>

    </div>
  )
}


function S () {
  return (
    <div className="other-containers">

      <div style = {{width: "100%", textAlign: "center", marginBottom: 19}}>
        <span style = {{fontWeight: "bold", fontSize: "xx-large", color: "#4B6F44"}}>ماذا تقدم لك DXN ؟</span>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>

      <div className = "feature-container" >
        <i style = {{fontSize: 113, marginTop: 30}} class="fa fa-bandcamp" aria-hidden="true"></i>
        <h3>الحرية الصحية</h3>
        <p style = {{lineHeight: "22px"}}>
          مكملات غذائية طبيعية
          <br></br>
          عصائر ومشروبات صحية
          <br></br>
          منتجات تجميل وعناية بالجسم صحية
        </p>
      </div>
      

    </div>
  )
}


function T () {
  return (
    <div className="other-containers" >

      <div style = {{width: "100%", textAlign: "center", marginBottom: 35}}>
        <span style = {{fontWeight: "bold", fontSize: "xx-large", color: "#4B6F44"}}>أهم مقالات المدونة</span>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة الأولى">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة الثانية">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة الثالثة">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة الرابعة">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة الخامسة">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>

      <div className="blog-container">
        <a href = "/blogs/المقالة السادسة">
          <img src = {article} style = {{width: "80%", margin: "auto", marginTop: 35}}></img>
          <h3 style = {{marginBottom: 35, color: "black"}}>منتجات العناية بالجسم من DXN</h3>
        </a>
      </div>





    </div>
  )

}


function Fo () {

  function clickHandler (id) {
    let elem = document.getElementById(id)
    let panel = elem.nextElementSibling


    if (['', "0px"].includes(panel.style.maxHeight)) {
      panel.style.maxHeight = panel.scrollHeight + "px";

    } else {
      panel.style.maxHeight = "0px";

    }
  }

  return (
    <div className="other-containers" >

      <div style = {{width: "100%", textAlign: "center", marginBottom: 35}}>
              <span style = {{fontWeight: "bold", fontSize: "xx-large", color: "#4B6F44"}}>الأسئلة الشائعة</span>
      </div>

      <div style = {{width: "60%", margin: "auto"}}>
        <button id = "1" onClick = {() => clickHandler("1")} className="faq-button">
          <h3 style = {{margin: 0}}>أريد فقط أن اشتري المنتجات، هل أحتاج أن أسجل عضوية ؟</h3>
        </button>
        <div className="faq-answer">
          <p>لا تلزمك الشركة بتسجيل عضوية، ولكن الأفضل أنك تسجل عضوية لتحصل على المنتجات بسعر العضو (السعر المخفض) اذا اشتريت المنتجات برقم عضويتك ، وعضويتك دائمة مدى الحياة لا تنتهي يمكنك الشراء بها في أي وقت .</p>
        </div>
      </div>

      <div style = {{width: "60%", margin: "auto"}}>
        <button id = "2" onClick = {() => clickHandler("2")}  className="faq-button">
          <h3 style = {{margin: 0}}>ما معنى النقاط في منتجات DXN ؟</h3>
        </button>
        <div className="faq-answer">
          <p>شركة DXN لديها منتجات كثيرة ، وصلت لأكثر من 200 منتج! موجود منها في الدول العربية حوالي 80 منتج فقط ، وكل منتج له نقاط معينه ، فعندما تشتري منتج برقم عضويتك تضاف النقاط لك على رقم عضويتك ، مثلا: الاسبرولينا = 70 نقطة ، فطر الريشي = 70 نقطة ، قهوة لينجزي = 10 نقاط ، معجون الأسنان = 6 نقاط … وهكذا.</p>
        </div>
      </div>

      <div style = {{width: "60%", margin: "auto"}}>
        <button id = "3" onClick = {() => clickHandler("3")} className="faq-button">
          <h3 style = {{margin: 0}}>أين اجد اسماء المنتجات الموجودة في دولتي، واسعارها والنقاط ؟</h3>
        </button>
        <div className="faq-answer">
          <p>تجدها في مكاتب شركة DXN في دولتك، أو يمكنك مراسلتنا من هنـــــا.</p>
        </div>
      </div>

    </div>
  )

}


function Fi () {
  return (
    <div style = {{height: 200, backgroundColor: "black", marginTop: 80}}></div>
  )
}


function Home() {


    return (
      <>
        <F/>
        <S/>
        <T/>
        <Fo/>
        <Fi/>
      </>
    )
  };
  
export default Home;
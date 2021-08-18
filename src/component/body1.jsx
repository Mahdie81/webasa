import React from 'react'
import styled from "styled-components";
import Card from "./card";
import {Baste} from "./card";
import Header from "./header";
import {ReactComponent as News} from "../assets/Group 106.svg";
import {ReactComponent as Simple} from "../assets/Component 62.svg";
import SimpleImageSlider from "react-simple-image-slider";
import Imageslider from "./slider";
import "./csses/slider.css"


function Body1() {
    return (

        <$box>
            <Header/>
            <$row0><img src="imgs/Group 989.png"/></$row0>
            <$pic1>
                <img className="m1" src="imgs/Group 105.png"/>
                <img className="m2" src="imgs/Group 107.png"/>

            </$pic1>
            <$row1>
                <h2>خدمات وب سایت</h2>
                <h4> ما در وب آسا با تیم های حرفه ای قادر هستیم هر گونه پروژه مارکتینگ، سئو، طراحی و هر
                    پیاده سازی صفحات وب را به حرفه انجام دهیم</h4>
                <br/><h5>
                    ای که ما در وب آسا انجام می شودنمونه ای از خدمات حرفه
                </h5>
            <br/><br/>
            <$table>

                <div/><h4>دیجیتال مارکتینگ</h4>
                <div/><h4>طراحی و پیاده سازی فرونت وب سایت</h4>
            </$table>
            <$table>
                <div/><h4>سئو و تولید محتوا</h4>
                <div/><h4>پیاده سازی بک اند وب سایت</h4>
            </$table>

            </$row1>
            <$row2>
                <h2>وب آسا در یک نگاه</h2>
                <br/>
                <Card src={<News/>} title={"سایت پیاده سازی وب"}
                      explanation={"در پیاده سازی وب سایت" +
                      "و پس از Ux,Ui نیازمند طراحی\n" +
                      "طراحی نیازمند پیاده سازی فایل\n" +
                      "کد و قرار دادن آن بر روی سرور\n" +
                      "و استفاده کاربران است."}/>
                <Card src={<News/>} title={"سایتپیاده سازی وب"}
                      explanation={"مارکتینگ به معنای فروش و\n" +
                      "بازاریابی محصولات به صورت\n" +
                      "فیزیکی و دیجیتال مارکتینگ به\n" +
                      "معنای بازاریابی محصول به\n" +
                      "صورت دیجیتالی است."}/>
                <Card src={<News/>} title={"آکادمی"}
                      explanation={"بهینه سازی برای موتور های\n" +
                      "ترجستجو یا به تعریفی روشن\n" +
                      "هموار سازی راه رسیدن به وب\n" +
                      "سایت ما برای کاربران در\n" +
                      "موتورهای جستجو می گویند."}/>
                <Card src={<News/>} title={" فرم های درخواست"}
                      explanation={"بهینه سازی برای موتور های\n" +
                      "ترجستجو یا به تعریفی روشن\n" +
                      "هموار سازی راه رسیدن به وب\n" +
                      "سایت ما برای کاربران در\n" +
                      "موتورهای جستجو می گویند."}/>
                <Card src={<News/>} title={"مقالات"}
                      explanation={"هر یک از خدمات اراده شده،\n" +
                      "دارای مقالاتی در رابطه با\n" +
                      "آسا در آنچگونگی فعالیت وب\n" +
                      "زمینه میباشد که باعث شفاف\n" +
                      "سازی می شود."}/>
            </$row2>

            <$row3>
                <h2>اتوماسیون مشتریان وب آسا، احاطه کامل بر روی پروژه</h2>
                <h4>
                    دو مورد از بزرگترین مشکلاتی که کارفرمان با آن مواجه هستند، عدم تحویل به موقع پروژه و عدم
                    ،مانیتورینگ پروژه ها هستند.<br/>
                    ما در وب آسا پس از شناخت این نیاز اقدام به برطرف کردن آن کرده و پس از بررسی های بسیار اقدام به
                    .طراحی اتوماسیون تحت وب برای سهولت کارفرمایان عزیز کرده است
                </h4>
                <br/>
                <$b>seccesfully</$b>
            </$row3>
            <$pic2>
                <img  src="imgs/Group 109.png"/>
            </$pic2>

            <$row4>
                <h2>بسته های ویژه برای شما</h2>
                <br/>
                <Baste src={<Simple/>} title={"اخبار"} price={"300000"} option={{a:"لورم ایپسوم" ,b:"لورم ایپسوم" ,c:"لورم ایپسوم"}}/>
                <Baste src={<Simple/>} title={"اخبار"} price={"300000"} option={{a:"لورم ایپسوم" ,b:"لورم ایپسوم" ,c:"لورم ایپسوم"}}/>
                <Baste src={<Simple/>} title={"اخبار"} price={"300000"} option={{a:"لورم ایپسوم" ,b:"لورم ایپسوم" ,c:"لورم ایپسوم"}}/>

            </$row4>
            <$row5>
                <h2>مشتری های ما چه نظراتی دارند؟</h2>
                <div className="carousel">
                    <Imageslider/>
                </div>

            </$row5>
                <$row6>
                    <h2>اخبار و مقالات ما را دنبال کنید</h2>

                    <$piccard>

                    <img src="imgs/42_cloud_service.png" />

                    <h5><h3>تیتر خبر</h3>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدو سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                    </h5>
                </$piccard>
                <$piccard2>
                    <img src="imgs/4a6a1be66748816876e353ac97b825d3.png" />

                    <h5><h3>تیتر خبر</h3>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </h5>
                </$piccard2>
            <$piccard3>
                <img src="imgs/4a6a1be66748816876e353ac97b825d3.png" />

                <h5><h3>تیتر خبر</h3>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </h5>
            </$piccard3>

            <$piccard4>
                <img src="imgs/40294ba01e017648ae480654c36adf02.png" />

                <h5><h3>تیتر خبر</h3>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدو سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                </h5>
            </$piccard4>
                    <$piccard5>
                        <img src="imgs/53dbc83beace083a28a085a88a6f782.png" />

                        <h5><h3>تیتر خبر</h3>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </h5>
                    </$piccard5>
                </$row6>
        </$box>
    );
}

export default Body1;


const $box = styled.div`

  display: grid;
  direction: rtl;
  grid-template-rows:43rem 5rem repeat(2,34rem) repeat(2,38rem) repeat(2,45rem);
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem, 1fr) [center] repeat(8, [col-s] minmax(min-content, 14rem) [col-e]) [certer-e] minmax(6rem, 1fr) [full-end];
  

`

const $row0 = styled.div`
  grid-column:2/11;
  grid-row: 2/3;

`

const $pic1 = styled.div`
  grid-column: 2/6;
  grid-row: 3/4;
  display:grid;
  grid-template-columns:4rem 3rem 1rem;
  grid-template-rows:3rem;
  margin: 2rem 0rem;
  m1{
    grid-row:1/2;
    grid-column:1/4;
    z-index:5;
  }
  m2{
    grid-column:3/4;
    grid-row:1/2;
    z-index:6;
  }
`


const $row1 = styled.div`
  padding:6rem 3rem;
  grid-column:8/11;
  grid-row:3/4;
  
  h2,h4{
    font-family: "Kalameh-Bold.ttf";
  }

`
const $table = styled.div`

  width:30rem;
  height: 4rem;
  display: flex;
  
  h4{
    margin:1rem;
    font-family:"Kalameh-Bold.ttf";

  }
  div {
    float: right;
    width:2rem;
    height:2rem;
    border-radius:5px;
    background-color: white;
    margin-top:0.7rem;
    box-shadow: 0 0 0.5rem rgb(104, 107, 108);
  }
`

const $row2 = styled.div`
  grid-column:2/11;
  grid-row:4/5;
  text-align: center;
  margin:1rem 0px;
  
`

const $row3 = styled.div`
  margin-top:10rem;
  grid-column:2/8;
  grid-row:5/6;
h2{
  font-family: "Kalameh-Bold.ttf";
  color:var(--title);
}
`

const $pic2 = styled.div`
  margin-right:1rem;
  grid-column:8/12;
  grid-row:5/6;
  
`
const $b=styled.button`
  padding:10px 30px;
  border-radius:10px;
  border: none;
  color: white;
  background-color:var(--orang);
    
    `

const $row4 = styled.div`
  margin-top:3rem;
  height:80%;
  grid-column:2/11;
  grid-row:6/7;
  text-align: center;
  h2{
    font-family: "Kalameh-Bold.ttf";
    color:var(--title);
  }
  
  `
const $row5=styled.div`
  margin:13rem 2rem;
  grid-column:2/11;
  grid-row:7/8;
  text-align: center;
  h2{
    
    font-family: "Kalameh-Bold.ttf";
    color:var(--title);
    margin-bottom:-1.5rem;
    text-align: left;
    margin-left:10rem;
  }
  
    `

const $row6=styled.div`
  margin-top:5rem;
  grid-column:2/11;
  grid-row:8/9;
  text-align: center;
  display: grid;
  grid-template-columns:repeat(4,23%);
  grid-template-rows:55% 45%;
  grid-column-gap:1rem;
  h2{
    font-family: "Kalameh-Bold.ttf";
    color:var(--title);
    grid-row:1/2;
    grid-column:1/5;
    margin-top:-5rem;
  }
    `


const $piccard=styled.div`
    height:100%;   
    background-color: white;
    border-radius:2rem;
    grid-column:1/2;
    grid-row:1/3;
    text-align:right;
    justify-content: center;
  

  
  
  h5{
    margin:4px 10px;
    h3{
      font-size:1.5rem;
      color:var(--BLUE);
      
        font-family: "Kalameh-Bold.ttf";
        color:var(--title);
    }
  }
  img{
    width:100%;
    height:45%;
  }
  
    `
const $piccard2=styled($piccard)`
  grid-column:2/3;
  grid-row:1/2;



`
const $piccard3=styled($piccard2)`
  grid-column:3/4;

`
const $piccard4=styled($piccard)`
  grid-column:4/5;

`
const $piccard5=styled($piccard)`
  background-color:var(--orang);
  margin-top:1rem;
  grid-column:2/4;
  grid-row:2/3;
  height:95%;

`
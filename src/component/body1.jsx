import React from 'react'
import styled from "styled-components";
import Card from "./card";
import {Baste} from "./card";
import Header from "./header";
import {ReactComponent as News} from "../assets/Group 106.svg";
import {ReactComponent as Simple} from "../assets/Component 62.svg";

function Body1() {
    return (

        <$box>
            <Header/>
            <$pic1>
                <img className="m1" src="imgs/Group 105.png"/>
                <img className="m2" src="imgs/Group 107.png"/>

            </$pic1>
            <$row1>
                <h2>آروم باش!</h2>
                <h4>این شرکت اولین کمک کننده به توعه با تولید سادگی نامفهوم از صنعت چاپ و با
                    .استفاده از طراحان گرافیک است</h4>
            <br/><br/>
            <$table>

                <div/><h3>نویسنده خبره</h3>
                <div/><h3>نویسنده خبره</h3>
            </$table>
            <$table>
                <div/><h3>نویسنده خبره</h3>
                <div/><h3>نویسنده خبره</h3>
            </$table>

            </$row1>
            <$row2>
                <h2>خدمات ما</h2>
                <br/>
                <Card src={<News/>} title={"اخبار"} explanation={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}/>
                <Card src={<News/>} title={"شرکت"} explanation={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}/>
                <Card src={<News/>} title={"سئو"} explanation={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}/>
                <Card src={<News/>} title={"نوشتن"} explanation={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}/>
                <Card src={<News/>} title={"اخبار"} explanation={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"}/>
            </$row2>

            <$row3>
                <h2>مقالات خود را با ما تهیه کنید</h2>
                <h4>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    .از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و استفاده از طراحان گرافیک است.
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

            </$row5>
                <$row6>
                <$piccard>

                    <img src="imgs/42_cloud_service.png" />

                    <h5><h3>تیتر خبر</h3>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
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
  grid-template-rows:43rem repeat(5,31rem) 35rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem, 1fr) [center] repeat(8, [col-s] minmax(min-content, 14rem) [col-e]) [certer-e] minmax(6rem, 1fr) [full-end];
  

`

const $pic1 = styled.div`
  grid-column: 2/6;
  grid-row: 2/3;
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
  grid-column:7/11;
  grid-row: 2/3;

`
const $table = styled.div`
  grid-column:6/11;
  grid-row: 2/3;
  width:15rem;
  height:4rem;
  display:flex;
  justify-content:space-between;
  justify-items:center;
div{
  float: right;
  width:2rem;
  height:2rem;
  border-radius: 1rem;
  background-color: white;
  margin-left:2px;
}
`

const $row2 = styled.div`
  grid-column:2/11;
  grid-row:3/4;
  text-align: center;
  
`

const $row3 = styled.div`
  padding-top:15rem;
  grid-column:2/7;
  grid-row:4/5;

`

const $pic2 = styled.div`
  margin-right:2rem;
  grid-column:7/12;
  grid-row:4/5;
  
`
const $b=styled.button`
  padding:10px 30px;
  border-radius:10px;
  border: none;
  color: white;
  background-color:var(--orang);
    
    `

const $row4 = styled.div`
  padding-top:10rem;
  grid-column:2/11;
  grid-row:5/6;
  text-align: center;
  `
const $row5=styled.div`

  padding-top:10rem;
  grid-column:2/11;
  grid-row:6/7;
  text-align: center;
    
    `

const $row6=styled.div`
  padding:0rem 5rem;
  grid-column:1/11;
  grid-row:7/8;
  text-align: center;
  display: grid;
  grid-template-columns:repeat(4,24%);
  grid-template-rows:55% 45%;
  grid-column-gap:1rem;
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
    margin:10px;
    h3{
      font-size:1.5rem;
      color:var(--BLUE);
    }
  }
  img{
    width:100%;
    height:60%;
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
  height:90%;

`
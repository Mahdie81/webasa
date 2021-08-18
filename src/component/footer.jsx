import React from 'react'
import styled from "styled-components";


function Footer() {
  return (
      <$f>
          <$col1>
              <img src="/imgs/logo.png"/>
              <br/>
              <h4>
                  لورم ایپسوم متن ساختگی از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
              </h4>
              <br/>
              <$gr>
              <span>info@artikita.ir</span><img src="/imgs/Group 103.png"/>
              <span>021-00000000</span><img src="/imgs/Group 104.png"/>
              </$gr>
          </$col1>
          <$col2>
              <h3>دسترسی سریع</h3><br/>
              <h4>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
              </h4>
          </$col2>
          <$col3>
              <h3>دسترسی سریع</h3><br/>
              <h4>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
                  <div>لورم ایپسوم </div>
              </h4>
          </$col3>
          <$col4>
              <h3>شبکه های اجتماعی</h3><br/>
              <img src={"/imgs/Group 99.png"}/>
              <img src={"/imgs/Group 101.png"}/>
              <img src={"/imgs/Group 10.png"}/>
              <img src={"/imgs/Group 102.png"}/>
              <img src={"/imgs/Group 100.png"}/>

          </$col4>
          <$n>
              تمام حقوق این سایت متعلق به شرکت وب آسا میباشد و هرگونه کپی برداری بدون درج منبع آن پیگرد قانونی خواهد داشت

          </$n>

      </$f>
  );
}

export default Footer;



const $f=styled.div`
  h3{
    font-family: "Kalameh-Bold.ttf";
  }
  margin-top:10rem;
  background-color:var(--BLUE);
  color: white;
  display: grid;
  direction:rtl;
  grid-template-rows:20rem 3rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem,1fr) [center] repeat(8,[col-s] minmax(min-content,14rem)[col-e]) [certer-e] minmax(6rem,1fr) [full-end]  ;
  
  h3{
    color: var(--orang);
  }
  
`
const $col1=styled.div`
  grid-column:2/5;
  grid-row:1/2;
`
const $gr=styled.div`
  display:flex;
  justify-content:space-evenly;
  
`


const $col2=styled.div`
  padding:5rem 0rem 0px 2rem;
  grid-column:6/7;
  grid-row:1/2;
  text-align:center;
  h4{
    display:grid;
    grid-row-gap:10px;
  }
`
const $col3=styled.div`
  padding:5rem 1rem 0px 2rem;
  grid-column:7/8;
  grid-row:1/2;
  text-align:center;
 h4{
   display:grid;
   grid-row-gap:10px;
 }
  

`


const $col4=styled.div`
  padding:5rem 3rem 0px 2rem;
  grid-column: 8/12;
  grid-row:1/2;
  img{
    margin-left:1rem;
  }
`

const $n=styled.div`
  grid-row:2/3;
  grid-column: 1/12;
  padding:10px;
  text-align: center;
  background-color: var(--orang);
  font-size:1rem;
  color: var(--BLUE);
  font-family: "Kalameh-Bold.ttf";
  

`
const $pic=styled.span`
  width:20%;
  height:30%;
  background-color: white;
    
    
    `
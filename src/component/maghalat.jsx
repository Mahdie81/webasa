import React from 'react'
import styled from "styled-components";
import {Article} from "./card";
import SearchIcon from '@material-ui/icons/Search';
import TableChartIcon from '@material-ui/icons/TableChart';

function Maghalat () {
  return (
      <$box>
        <$side1>
            <h2>  اخباری و  مقالات  <span  className="web">وب</span><span className="asa"> آسا</span></h2>

        </$side1>
        <$side2>

            <h3><$labels>جست وجو<SearchIcon/></$labels></h3>
            <hr/>
            <$search>
            <input type="text" placeholder=" نام دوره مورد نظر را وارد کنید..."/>
            <button>بگرد</button>
            </$search>
        </$side2>
        <$side3>
            <h3><$labels>دسته بندی نتایج<TableChartIcon/></$labels></h3>
            <hr/>
            <div id="main-menu">
                <ul>
                    <li><a >منوی مادر</a>
                        <ul className="sub-menu">
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                        </ul>
                    </li>
                    <li><a href="#">منوی مادر</a>
                        <ul className="sub-menu">
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                        </ul>
                    </li>
                    <li><a href="#">منوی مادر</a>
                        <ul className="sub-menu">
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                            <li><a href="#">منوی زيرمجموعه</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="clear"></div>
            </div>

        </$side3>

          <$side4>
              <h3> <$labels>فیلتر  <img src="/imgs/iconfinder_Filter_Funnel_4781834.png"/></$labels></h3>
              <hr/>
              <br/>
              <select id="software">
                  <option value="">نرم افزار</option>
                  <option value="Corel Draw">Corel Draw</option>
                  <option value="Photo Shop">Photo Shop</option>
              </select>
              <select id="software">
                  <option value="">سر فصل</option>
                  <option value="Corel Draw">Corel Draw</option>
                  <option value="Photo Shop">Photo Shop</option>
              </select>
          </$side4>
          <$side5></$side5>
        <Article classaName="img1" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img2" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img3" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img4" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>
        <Article classaName="img5" src="/imgs/082347e726846e23d4e45d76c9bca179.png" title="طراح شو" explanation="آموزش ایجاد طرح گرافیکی سایت در فتوشاپ، تبدیل طرح گرافیکی به قالب وردپرسی و ووکامرسی"/>

            <$hashiye/>

      </$box>
  );
}

export default Maghalat;

const $box=styled.div`
  margin:2rem;
  text-align: center;
  display: grid;
  grid-template-columns:5rem 24% repeat(3,20%);
  grid-template-rows:10rem repeat(4,23rem);
  grid-column-gap:1rem;
  direction:rtl;
  
  
`
const $hashiye=styled.div`
  grid-row:1/6;
  grid-column:1/2;


`
const $side1=styled.div`
    grid-row:1/2;
    grid-column:2/6;
    text-align:right;
    margin:auto 1rem;
  h2{
    .asa{
      color:var(--BLUE);
      
    }
    .web{
      color:var(--orang);
    }
  }
    `
const $labels=styled.div`
  display: flex;
  justify-content: space-between;
  font-family: inherit;

`

const $side2=styled.div`
    padding:1rem;
    height:30%;
    width:1fr;
    border-radius:1.5rem;
    grid-row:2/3;
    grid-column:2/3;
    background-color: white;
    margin:1rem;
    
    
  h2{
    text-align:right;
  }
  
    `
const $search=styled.div`
  display:grid;
  grid-template-columns:68% 32%;
  margin:1rem 1px;
  input{
    grid-column:1/2;
    border:none;
    height:3rem;

  }
  button{
    border-style: solid;
    margin:10px;
    border-radius:0.5rem;
    padding:0.2rem 0.6rem;
    color: var(--orang);
    border-color:var(--orang);
    background-color: white;
    grid-column:2/3;
    font-weight:bolder;
  }


`
const $side3=styled.div`
    padding:1rem;
    height:30%;
    border-radius:1.5rem;
    grid-row:2/4;
    grid-column:2/3;
    background-color: white;
    margin:60% 1rem 1rem 1rem;
   
    
    
  h2{
    text-align:right;
  }
  
  #main-menu {
    position: relative;
    line-height:13px;
    margin:1rem 0px;
    
  }
  #main-menu a {
    display: block;
    width: 150px;
    padding: 8px;
    border: #666 solid 1px;
    background-color:white;
    text-decoration: none;
    border:none;
  }
  #main-menu a:hover {
    background-color:white;
    text-decoration: none;
    
  }
  #main-menu ul {
    list-style-type: none;
    
  }
  #main-menu li {
    float: right;
    position: relative;
    text-align: center;
    
  }
  #main-menu li ul a {
    text-align: center;
    border:none;

  }
  #main-menu li:hover ul ul {
    display: none;
    border:none;
  }
  #main-menu li li:hover ul {
    display: block;
    position: absolute;
    top: 10px;
    right: 125px;
    z-index: 1000;
  }
  #main-menu ul.sub-menu {
    display: none;
    position: absolute;
    top: 30px;
    margin-right: 0px;
    padding: 0px;
    z-index: 999;
  }
  #main-menu ul.sub-menu li {
    border:none;
    text-align: center;
  }
  #main-menu li:hover ul.sub-menu {
    border:none;
    display: block;
    border: 1px solid #666;
  }
  .clear {
    clear: both;
  }
  
    `
const  $side4=styled.div`
    padding:1rem;
    height:65%;
    border-radius:1.5rem;
    grid-row:3/4;
    grid-column:2/3;
    background-color: white;
    margin:35% 1rem 1rem 1rem;
  h3{
    img{
      margin:7px 0px;
    }
  }
  
  select{
    padding:3px 5px;
    border-color:darkgray;
    border-width:1px;
    border-radius:1rem;
    margin:0.5rem 0px 1rem 0px;
    width:90%;
    height:18%;
    font-size:90%;
    font-weight:bold;
    font-family: inherit;
  }
    
    `



const  $side5=styled.div`
    padding:1rem;
    height:65%;
    border-radius:1.5rem;
    grid-row:4/6;
    grid-column:2/3;
    margin:25% 1rem 1rem 1rem;
  `
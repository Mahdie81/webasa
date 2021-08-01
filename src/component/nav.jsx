import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Body1 from "./body1";
import Maghalat from "./maghalat";


function Nav() {
  return (
      <$h>
          <$logo><img src={"/imgs/logo.png"}/></$logo>
          <$sabt>ثبت نام</$sabt>
          <$A>
          <Link to="/">صفحه اصلی</Link>
          <Link to="/components/maghalat">اخبار</Link>
          <Link >نمونه  کار</Link>
          <Link>درباره ما</Link>
          </$A>

      </$h>
  );
}

export default Nav;


const $h=styled.div`
  background-color:var(--BLUE);
  display: grid;
  direction:rtl;
  grid-template-rows:4rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem,1fr) [center] repeat(8,[col-s] minmax(min-content,14rem)[col-e]) [certer-e] minmax(6rem,1fr) [full-end]  ;
  
    `


const $A=styled.div`
  grid-column:7/9;
  grid-row:1/2;
  padding:1.5rem ;
  display:flex;
  justify-content: space-between;
  a{
    color:WHITE;
    text-decoration:none;
    margin-right:2rem;
    font-weight: bold;
    font-size:1rem;
    font-family:"Kalameh-Bold.ttf";
  }

`

const $sabt=styled.button`
    z-index:33;
    margin:1rem 4rem;
    grid-column:9/10;
    grid-row:1/2;
    padding:5px 10px;
    border-width:0.5px;
    border-radius:10px;
    border-color: white;
    color: white;
    background-color:var(--BLUE);
    font-family:"Kalameh-Bold.ttf";
    
    `

const $logo=styled.span`
  grid-column:2/3;
  grid-row:1/2;
  z-index:33;


`
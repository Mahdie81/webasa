import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';





function Header () {
    return (
        <$d>
            <img className="m1" src="imgs/Group2.png"/>
            <img className="m2" src="imgs/Group3.png"/>


            <$t>
                <h1>وب آسا</h1>
                <h2> برترین شرکت طراحی وب سایت و خدمات سئو در قم</h2>
                <h4>
                    ما به کسب و کارها در مسیر توسعه و نوآفرینی خود در فضای آنلاین
                    کمک میکنیم.
                </h4>
                <br/>
                <$b>تکمیل فرم</$b>
            </$t>
            <$p>
                <img className="m0" src="imgs/Group99.png"/>
                <img className="m1" src="imgs/Group100.png"/>
                <img className="m2" src="imgs/Group102.png"/>
                <img className="m3" src="imgs/Rectangle6.png"/>
            </$p>


        </$d>
    );
}

export default Header;

const $d=styled.div`
  font-family:inherit;
  grid-column:1/12;
  grid-row:1/2;
  background-color:var(--BLUE);
  border-bottom-left-radius:3rem;
  border-bottom-right-radius:3rem;
  display: grid;
  direction:rtl;
  grid-template-rows:1rem 42rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem,1fr) [center] repeat(8,[col-s] minmax(min-content,14rem)[col-e]) [certer-e] minmax(6rem,1fr) [full-end]  ;
  
  .m1{
    grid-column:9/12 ;
    grid-row:1/3;
    z-index:2;
    margin-top:-100px;
    
  }
  .m2{
    grid-column:1/12 ;
    grid-row:1/3;
    z-index:3;
    margin-right:50px;
    margin-top:190px;
  }
  
    `



const $t=styled.div`
  
    font-family:inherit;
    margin-top:18rem;
    margin-left: 5rem;
    z-index: 44;
    grid-column:2/7;
    grid-row:2/3;
    color: white;
  h2{
    font-family: "Kalameh-Bold.ttf";


    @media only screen and (max-width:75em){
      font-size:1rem;
    }


  }
    `
const $b=styled.button`
  padding:10px 30px;
  border-radius:10px;
  border: none;
  color: white;
  background-color:var(--orang);
  font-family: "Kalameh-Bold.ttf";
    
    `

const $p=styled.div`
  display:grid;
  grid-column:6/12 ;
  grid-row: 2/3;
  grid-template-columns:2rem 2rem 1rem;
  grid-template-rows:1rem 2rem 1rem;
  padding:10px 70px;
  z-index:20;
  @media only screen and (max-width:75em){
    grid-column:1/12 ;
    grid-row: 2/3;
    width:80%;
    height:20%;
  }
    .m0{
      @media only screen and (max-width:75em){
        width:16rem;
        height:17rem;
      }
    }
    
  
    .m1{
      grid-column:1/2 ;
      grid-row: 8/10;
      @media only screen and (max-width:75em){
        display:none;
      }
   
      
    }
  .m2{
    grid-column:7/8 ;
    grid-row:2/4;
    @media only screen and (max-width:75em){
      display:none;
    }
   
  }
  .m3{
    margin-right:-20px;
    grid-column:1/2 ;
    grid-row:4/5;
    @media only screen and (max-width:75em){
      display:none;
    }
  }
    `


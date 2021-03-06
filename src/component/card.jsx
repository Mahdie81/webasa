import React from 'react'
import styled from "styled-components";
import {ReactComponent as Seke} from "../assets/Camada 2.svg";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Maghaletaki from "./maghaletaki";

function Card(props) {
  return (
       <$card>
           <div>
               {props.src}
               <br/><br/>
                <h3>{props.title}</h3>
               <br/>
               <h5>{props.explanation}</h5>
           </div>


       </$card>
  );
}

export default Card;

const $card=styled.div`
  
    background-color: white;
    padding:1rem;
    margin-left:1rem;
    border-radius:1rem;
    width:15%;
    height:60%;
    float:right;
  h3{
    font-family: "Kalameh-Bold.ttf";
    color:var(--title);

  }
    
    `
function Baste(props) {
    return (
        <$baste>
            <div>
                {props.src}
                <br/><br/>
                <h2>{props.title}</h2>
                <br/>
                <h3><Seke/>{props.price} </h3>
                <br/>
                <hr/>
                <br/><br/>
                <h4>
                    <CheckCircleIcon />{props.option.a}
                    <br/>
                    <CheckCircleIcon/>{props.option.b}
                    <br/>
                    <CheckCircleIcon/>{props.option.c}
                </h4>
            </div>
            <br/><br/>
            <$b>buy it</$b>
        </$baste>


    );

}
export {Baste};

const $baste=styled.div`
    background-color: white;
    padding:2rem;
    margin-left:1rem;
    border-radius:1.5rem;
    width:25%;
    height:100%;
    float:right;
 
  h3{
    margin: auto;
    width:50%;
    color: var(--orang);
    display:flex;
    justify-content: space-evenly;
  }
    `
const $b=styled.button`
  padding:15px 80px;
  border-radius:10px;
  border: none;
  color: white;
  background-color:var(--orang);
    
    `




function Article(props) {
    return (
        <$Article>
            <img className="m" src={props.src} alt=""/>

            <h5>
                <h3>{props.title}</h3>
                {props.explanation}
            </h5>

            <Link to="/components/maghaletaki"><h6><img className="m2" src="/imgs/Layer 2.png"/></h6></Link>
            <br/>

        </$Article>


    );

}
export {Article};

const $Article=styled.div`
  background-color: white;
  border-radius:2rem;
  text-align:right;
  justify-content: center;
  margin:1rem 0.5rem;
  

  .m{
    width: 100%;
    height:55%;
  }
  h6{
    text-align:left;
    margin-left:2rem;
  }
  
  
  h5{
    margin:1px 1rem;
    h3{
      font-size:1.3rem;
      color:var(--BLUE);
    }
  }
    `

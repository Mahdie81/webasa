import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./component/nav";
import Footer from "./component/footer";
import Body1 from "./component/body1";
import {ReactComponent as news} from "./assets/Group 106.svg";
import Card from "./component/card";
import Maghalat from "./component/maghalat";
import Maghaletaki from "./component/maghaletaki";

function App() {
  return (
    <div className="App">
        <Nav/>
        <switch>
            <Route exact path="/" component={Body1} />
            <Route exact path="/components/maghalat" component={Maghalat} />
            <Route exact path="/components/maghaletaki" component={Maghaletaki} />

        </switch>

        <Footer/>
    </div>
  );
}

export default App;

// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Input from './../components/input';
import Button from './../components/button';

import Icon from './../../imgs/Icon.png';

import io from 'socket.io-client';

let socket = io.connect(window.location.hostname + ":5000"); // Dev
// var socket = io.connect(window.location.hostname);// Prod

export default class App extends Component {
  constructor(){
    super();
  }

  gameCodeValidator(){
    var roomCode = document.getElementById("roomCode").value;
    switch (roomCode[0]) {
      case 'x' :
        break;
      case 'y' :
        break;
      case 'z' :
        break;
      default:
        break;
    }
  }

  startGameHandler(){
    if(document.getElementById('roomCode').value[0] === 'c'){
      console.log(`You Are playing Cards`);
    }
  }

  componentDidMount(){
  }

  render() {
    return (
        <div id="landingPageCard" className="card">
          <div className="card-header text-center">
            <img alt="Icon" className='icon' src={ Icon }/>
          </div>
          <div className="card-body">
            <h5 className="lp-card-title">Enter Room Code</h5>
            <Input Id="roomCode" len ="5" type="text" placeHolder = "Enter Room Code"/>
            <h5 className="card-title">Nickname</h5>
            <Input Id="nickName" type='text' len="15" placeHolder="Enter Nickname ( 15 characters)"/>
            <Button text="Play Game" func={ this.startGameHandler.bind(this) }/>
          </div>
          <b>Powered By <a href="#">jTronix Developement</a></b>
        </div>
    );
  }
}

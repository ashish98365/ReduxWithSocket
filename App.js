import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
//import store from './src/store'
import Home from './src/screen/Home';
import io from 'socket.io-client';
import createSocketIoMiddleware from "redux-socket.io";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from './src/redux'
//import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import ReduxWebSocketBridge from 'redux-websocket-bridge';

//const socket = io.connect('ws://192.168.1.107:8080/socket');

//var socket = new WebSocket("ws://192.168.1.107:8080/socket");

//const socketIoMiddleware = createSocketIoMiddleware(socket1, "socket/")

const testMiddleWare = ReduxWebSocketBridge('ws://192.168.1.107:8080/socket');

const store = applyMiddleware(thunk, testMiddleWare)(createStore)(reducers);


export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../redux'
import io from 'socket.io-client';
import createSocketIoMiddleware from "redux-socket.io";

const socket = io('http://192.168.1.107:8080/socket');

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

const middleWares = [thunk, socketIoMiddleware];

export default createStore(reducers, {}, applyMiddleware(...middleWares));
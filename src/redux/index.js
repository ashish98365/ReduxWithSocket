import { combineReducers } from 'redux'
import counter from './UpdateCounReducer';
import socket from './socket';

export default combineReducers({
    counter, socket
});
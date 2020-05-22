import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';

function serverConnectivity(state = {}, action) {
  switch (action.type) {
  case `@@websocket/${ OPEN }`:
      console.log("--connected");
    state = { ...state, connected: true };
    break;

  case `@@websocket/${ CLOSE }`:
    state = { ...state, connected: false };
    break;

  case `@@websocket/${ MESSAGE }`:
    // Process the raw message here, either string, ArrayBuffer, or Blob
    console.log("------servermessage--------------");
    console.log(action.payload);
    break;

  default: break;
  }

  return state;
}

export default serverConnectivity;
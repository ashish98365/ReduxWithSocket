import { SEND } from 'redux-websocket-bridge';

export const incrementCount = () => dispatch =>
{
    console.log(`@@websocket`);

    dispatch({ 
        type: 'CLIENT1/SIGN_IN',
        meta: { send: true },
        payload: { token: 'my very secret token' }
     });
    console.log("--socket-connection");
    dispatch({ type: "socket/message", data: "Hello------" });
}
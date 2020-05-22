export default (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return state + 1; 
        case 'SERVER/GREETING':
                // action.meta.webSocket reference to the WebSocket object
                console.log("SUcesss----------");
                console.log("Payload="+action.payload);
        default:
            return state;
    }
}
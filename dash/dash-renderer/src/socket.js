import { io } from 'socket.io-client';

// TODO: use url and ip from config
const socket = io("ws://127.0.0.1:5000", {
    reconnectionDelayMax: 10000,
    auth: {
    token: "123"
    },
    query: {
    "my-key": "my-value"
    }
});

const onConnect = (data) => {
    console.log("Connected!")
    console.log("We also got some data",data)
}
socket.on("connect",onConnect)

export default socket;

import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

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
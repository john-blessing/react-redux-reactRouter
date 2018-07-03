import io from 'socket.io-client';

const options = {
    // reconnectionDelay: 1000,
};

const socket = io('http://localhost:8999', {
  path: '/socke_path'
});

export default socket;
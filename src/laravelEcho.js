import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const options = {
  broadcaster: 'pusher',
  key: process.env.REACT_APP_PUSHER_KEY, // Поменяйте на свой ключ Pusher
  cluster: process.env.REACT_APP_PUSHER_CLUSTER, // Поменяйте на свой кластер Pusher
  encrypted: true,
  authEndpoint: 'https://mmo-backend.tech-tester.ru/broadcasting/auth',
  // auth: {
  //   headers: {
  //     Authorization: 'Bearer ' + yourAuthToken, // Ваш токен аутентификации, если используете аутентификацию
  //   },
  // },
  // enabledTransports: ['ws', 'wss']
  //   forceTLS: true
};

const echo = new Echo(options);

export default echo;


export const pusher = new Pusher("a4fe225d0e547833ae2a", {
  cluster: "ap2",
});

export const channel = pusher.subscribe("chat");

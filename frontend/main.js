import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/login';

const cadastro = new Login('.form-cadastro');
const login = new Login('.form-login');
cadastro.init();
login.init();

// import './assets/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/homePage';



ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

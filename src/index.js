import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/homePage';
import About from './components/about/aboutPage';

const App = (props) => {
  var Child;
  switch(props.route){
    case 'about' : Child = About; break;
    default : Child = Home;
  }

  return (
    <div>
      <Child />
    </div>
  )
}

const render = () => {
  let route = window.location.hash.substr(1);
  console.log("route:", window.location.hash.substr(1));
  ReactDOM.render(<App route={route}/>, document.getElementById('root'));
  registerServiceWorker();
}

window.addEventListener('hashchange', render());
render();

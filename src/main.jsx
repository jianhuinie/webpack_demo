import React from 'react';
import ReactDom from 'react-dom';
// import { hashHistory, Router } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// const newHistory = createBrowserHistory();
import App from './module/app';
import indexLess from './index.less';


// const PrimaryLayout = () => (
//     <div className="primary-layout">
//         <h1>
//             Our React Router 4 App
//         </h1>
//         <div>
//             <Route path="/" exact component={RootComponent} />
//         </div>
//     </div>
// );
  
ReactDom.render((
    <HashRouter>
        {/* <Router
            history={hashHistory}
            routes={routes}
        /> */}
        <App />
  </HashRouter>
), document.querySelector('#app'));
// import indexCss from './css/index.css';
// import indexLess from './index.less';
// const sayhello = 'hello webpack';
// alert(sayhello);

// document.getElementById("app").innerHTML="hello webpack";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { HashRouter, Route, Link } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HashRouter>
//             <App/>
//         </HashRouter>
//     </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import "style-loader!css-loader!sass-loader!./styles/app.scss";

require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();



ReactDOM.render((
    <HashRouter>
        <div>
            <Route path="/" component={Main}/>
        </div>
    </HashRouter>
    ), document.getElementById('app'));


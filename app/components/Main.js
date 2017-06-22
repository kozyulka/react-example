import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Weather from "./Weather";
import About from "./About";
import Address from './Address';

//Poskolku Weather stoit po umol4aniyu (naxoditsya na prosto slash), 4tobi on ubralsya pri perexode na drugoy adres, nujno dobavit exact
const Main = () => (
    <div>
        <Navbar/>
                <div className="row">
                        <div className="columns medium-6 large-4 small-centered">
                                <Route exact path="/" component={Weather}/>
                                <Route path='/about' component={About}/>
                                <Route path='/address' component={Address}/>
                        </div>
                </div>
        </div>

);

export default Main

// in Foundation Grid max width is 12. For medium size screens component will take 1/2 of the width (6), for large screens it will be 33% (4),
// small screens will take whole 12 by default. Small-centered means that component will be centered on small screens, so large and medium will inherit that
//Foundation is mobile-first. Code for small screens first, and larger devices will inherit those styles. Customize for larger screens as necessary.
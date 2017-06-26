import React from 'react';
import { Link } from 'react-router-dom';


const Address = () => (
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Try this:</p>
        <ol>
            <li>
                <Link to="/?location=Kiev">Kiev, Ukraine</Link>
            </li>
            <li>
                <Link to="/?location=Rio">Rio de Janeiro, Brazil</Link>
            </li>
            <li>
                <Link to="/?location=London">London, UK</Link>
            </li>
        </ol>
    </div>
);

export default Address
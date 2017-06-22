import React from "react";

const WeatherMessage = ({ temp, location }) => (
    <div className="text-center">
        <p>It's {temp} in {location}</p>
    </div>
);

export default WeatherMessage
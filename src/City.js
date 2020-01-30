import React from 'react';

function City ({city}) {
    
    return (
        <div style = {{ borderStyle: 'solid', borderWidth: 'medium', marginBottom: '15px'}}>
            <p style= {{paddingBottom: '20px'}}>{city.name}, {city.sys.country} </p>
            <p>{city.weather.main}</p>
            <p>{city.weather.description}</p>
            <p>Min temperature : {city.main.temp_min}</p>
            <p>Max temperature : {city.main.temp_max}</p>
            <p style= {{paddingBottom: '20px'}}>Location : {city.coord.lon}, {city.coord.lat}</p>
        </div>
    )
}

export default City;


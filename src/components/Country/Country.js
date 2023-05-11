import React from 'react';


const Country = props => {
//    console.log(props);
const {flags, name, capital, population} = props.country
    return (
        <div>
        {/* {console.log(country)} */}
        <img style={{width:"300px" , height:"200px"}} src={flags.png} alt="" />
        <h1>{name.common}</h1>
        <span>Population: {population}</span>
        <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;
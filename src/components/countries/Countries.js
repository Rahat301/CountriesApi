import React, { useEffect, useState } from 'react';
import "./countries.css";
import Country from '../Country/Country';

const Countries = () => {
   const [countries, setCountries]= useState([]);
  

   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => setCountries(data))
   },[]);

    return (
        
        <div className='Countries'>
            {countries.map(country =>  
(                <Country 
                    key={country.name.common}
                   country ={country}
                    />
)                
                )}
           
        </div>
    );
};

export default Countries;
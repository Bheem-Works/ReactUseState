import React, { useState } from 'react'

function DynamicDropdown() {
    const[country,setCountry] = useState('');
    const [city,setCity] = useState('');
    
    const countryMap = {
        bhutan: ['Thimphu', 'Paro', 'Punakha'],
        japan: ['Tokyo', 'Osaka', 'Kyoto'],
        srinlanka: ['Colombo', 'Kandy', 'Galle'],
        kuwait: ['Kuwait City', 'Salmiya', 'Fahaheel']
      };

      const countryOnChange = (e) => {
        setCountry(e.target.value);
        setCity('');
      }

      const cityOnChange = (e) => {
        setCity(e.target.value);
      }

  return (
    <div>
      <h2>Select your country and the city name </h2>
      <select name="Country" onChange={countryOnChange}>
        <option value="">--Select Your Country Name -- </option>
        {Object.keys(countryMap).map((c)=>(
            <option value={c} key={c}>{c}</option>
        ))}
      </select>
      {countryMap && (
        <>
        <select  onChange={cityOnChange}>
        <option value="">--Select Your City -- </option>
        {countryMap[country].map((ct)=>(
            <option value={ct} key={ct}>{ct}</option>
        ))}
        </select>
        <p>Selected Country NAme : {country}</p>
        <p>Selected City Name : {city}</p>
        </>
      )}
    </div>
  )
}

export default DynamicDropdown

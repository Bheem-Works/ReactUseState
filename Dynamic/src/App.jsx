import React from 'react'
import { useState } from 'react'

function App() {
  const [country,setCountry] = useState('');
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
      <h2>Select a country name and the city</h2>
      <select name="country" onChange={countryOnChange} value={country}>
        <option value="" >---Select The country --- </option>
        {Object.keys(countryMap).map((c)=>(
          <option value={c} key={c}>{c}</option>
        ))}
      </select>
        { country && (
          <>
          <select name="city" onChange={cityOnChange} value={city}>
            <option value="">---Select City ---</option>
            {countryMap[country].map((ct)=>(
              <option value={ct} key={ct}>{ct}</option>
            )
            )}
          </select>
          <p>Selected Country : {country}</p>
          <p>Selected City : {city} </p>
          </>
        )
           
        }
    </div>
  )
}

export default App

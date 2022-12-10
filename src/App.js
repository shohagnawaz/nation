import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data); 
        const names = data.map(country => country.name);
        console.log(names);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <ul>
        {
        countries.map(country => <li>{country.name}</li>) 
        }
      </ul>
    </div>
  );
}

export default App;

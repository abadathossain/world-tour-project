import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country)
    const { name, capital, flags, population, region } = country;
    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited);
    }
    const handleCountry = () => {
        console.log('Click me')
    }

    return (
        <div className={`country-container ${visited && 'visit-country'}`}>
            <h1>{name.common}</h1>
            <h3>{capital}</h3>
            <img src={flags.png} alt="" />
            <h3>{population}</h3>
            <h3>{region}</h3>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            {/* {
                visited && <p style={{ color: 'green' }}>You have visited {name.common}</p>
            } */}
            {
                visited ? <p style={{ color: 'green' }}>You have visited {name.common}</p> : <p style={{ color: 'red' }}>You have not visited {name.common}</p>
            }
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleCountry}>Clik me</button>
        </div>
    );
};

export default Country;
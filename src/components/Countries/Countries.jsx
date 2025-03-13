import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import '../Country/Country.css';
import { addToLs, gerStoredCountry } from "../../utilites/localStorage";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountreis, setVisitedCountreis] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log(country)
        const newVisitedCountries = [...visitedCountreis, country]
        setVisitedCountreis(newVisitedCountries)
        addToLs(country.cca2)
        console.log(country.cca2)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    // load from local storage
    useEffect(() => {
        const storedCountry = gerStoredCountry()
        console.log(storedCountry)

    }, [])
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
            <div>
                <h2>Visited Countrries:{visitedCountreis.length}</h2>
                {
                    visitedCountreis.map(visitedCountry => <li>{visitedCountry.name.common}</li>)
                }
            </div>
            <div className="country-container-box">
                {
                    countries.map(country => <Country key={country.cca2}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;


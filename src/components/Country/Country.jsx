
const Country = ({ country }) => {
    console.log(country)
    const { name, capital, flags, population, region } = country;
    return (
        <div className="country-container">
            <h1>{name.common}</h1>
            <h3>{capital}</h3>
            <h3>{flags.png}</h3>
            <h3>{population}</h3>
            <h3>{region}</h3>
        </div>
    );
};

export default Country;
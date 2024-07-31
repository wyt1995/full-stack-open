function Country({ country, selected }) {
    if (!selected.includes(country)) {
        return null;
    }
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map(lan => <li key={lan}>{lan}</li>)}
            </ul>
            <img src={country.flags.png} alt="flag" />
        </>
    )
}

export default Country;

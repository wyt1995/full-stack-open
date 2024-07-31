import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";
import "./App.css";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

function App() {
    const [name, setName] = useState("");
    const [countries, setCountries] = useState([]);

    const searchCountries = (event) => {
        setName(event.target.value);
    };

    useEffect(() => {
        if (name !== "") {
            axios.get(baseURL).then((response) => {
                const filtered = response.data.filter(
                    (c) =>
                        c.name.common.toLowerCase().includes(name) ||
                        c.name.official.toLowerCase().includes(name)
                );
                setCountries(filtered);
            });
        }
    }, [name]);

    return (
        <>
            <p>
                find countries
                <input type="text" value={name} onChange={searchCountries} />
            </p>
            <SearchResult countries={countries} />
        </>
    );
}


export default App;

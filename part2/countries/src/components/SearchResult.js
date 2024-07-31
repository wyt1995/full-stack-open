import { useState } from 'react';
import Country from './Country';

function SearchResult({ countries }) {
    const [selected, setSelected] = useState([]);
    const handleClick = (country) => {
        if (selected.includes(country)) {
            setSelected(selected.filter(c => c !== country));
        } else {
            setSelected([...selected, country]);
        }
    }

    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else {
        return (
            <>
                {countries
                    .sort((a, b) => a.name.common.localeCompare(b.name.common))
                    .map((c) => (
                        <div>
                            <p key={c.cca3}>
                                {c.name.common}
                                <button onClick={() => handleClick(c)}>{selected.includes(c)? 'hide' : 'show'}</button>
                            </p>
                            <Country country={c} selected={selected} />
                        </div>
                    ))}
            </>
        );
    }
}

export default SearchResult;

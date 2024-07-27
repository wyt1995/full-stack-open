function Display({ persons, keyword, deleteFunc }) {
    let filtered = persons;
    if (keyword !== "") {
        filtered = persons.filter((person) => person.name.includes(keyword));
    }

    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {filtered.map((person) => (
                    <li key={person.name}>
                        {person.name}: {person.number}
                        <button onClick={() => deleteFunc(person.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Display;

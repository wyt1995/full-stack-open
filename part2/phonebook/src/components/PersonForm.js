function PersonForm({ name, changeName, number, changeNumber, handleSubmit }) {
    return (
        <>
            <h2>Add a new person</h2>
            <form>
                <div>
                    name: <input value={name} onChange={changeName} />
                </div>
                <div>
                    number: <input value={number} onChange={changeNumber} />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        add
                    </button>
                </div>
            </form>
        </>
    );
}

export default PersonForm;

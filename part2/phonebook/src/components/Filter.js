function Filter({ filterText, filterFunc }) {
    return (
        <form>
            <div>
                filter shown with <input value={filterText} onChange={filterFunc} />
            </div>
        </form>
    );
}

export default Filter;

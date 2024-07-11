
const Filter = ({ search, setSearch }) => {
    const handleFilterChange = (event) => {
        setSearch(event.target.value)
    }

    return(
        <p>find countries <input value={search} onChange={handleFilterChange} /></p>
    )
}

export default Filter
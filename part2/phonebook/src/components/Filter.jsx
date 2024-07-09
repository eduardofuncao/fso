const Filter = ({ filterName, handleFilterChange }) => {
    return(
        <div>
            filter to show names with <input value={filterName} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter
import React from 'react'

function Search(props) {
    return (
        <div className="input-group my-3 float-center">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Employee by Name" 
                aria-label="Search"
                onChange={(e) => props.handleSearchChange(e)}
            />
        </div>
    )
}

export default Search
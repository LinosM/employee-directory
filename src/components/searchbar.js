import React from 'react'

function Search() {
    return (
        <div className="input-group my-3 float-center">
            <input  type="text" className="form-control" placeholder="Search Employee by Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
        </div>
    )
}

export default Search
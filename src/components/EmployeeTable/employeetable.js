import React from "react";

function EmployeeTable(props) {

    const formatDate = (date) => {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);

        return `${month}-${day}-${year}`
    }

    const setSortedField = () => {
        
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>
                        <span type="button" onClick={() => setSortedField('name')}>
                            Name
                        </span>
                    </th>                        
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((emp, i) => (
                    <tr key={i}>
                        <th><img src={emp.picture.thumbnail} alt={emp.name.first}></img></th>
                        <th>{`${emp.name.first} ${emp.name.last}`}</th>
                        <th>{emp.cell}</th>
                        <th>{emp.email}</th>
                        <th>{formatDate(emp.dob.date)}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;
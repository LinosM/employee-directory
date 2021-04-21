import React from "react";
import "./style.css"

function EmployeeList(props) {
    function formatDate(date) {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);

        return `${month}/${day}/${year}`
    };

    return (
        props.employees.map((emp, i) => (
            <tr key={i}>
                <td><img className="rounded border border-1" src={emp.picture.thumbnail} alt={emp.name.first}></img></td>
                <td>{`${emp.name.first} ${emp.name.last}`}</td>
                <td>{emp.cell}</td>
                <td><a href={`mailto:${emp.email}`}>{emp.email}</a></td>
                <td>{formatDate(emp.dob.date)}</td>
            </tr>
        ))
    )
}

export default EmployeeList;
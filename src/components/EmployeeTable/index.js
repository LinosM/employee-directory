import React from "react";
import API from "../../utils/API";
import EmployeeList from "../EmployeeList";
import SearchBar from "../SearchBar";
import "./style.css"
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmployeeTable extends React.Component {

    state = {
        result: [],             // API results stored here
        sortedEmployees: [],    // Filtered results when sorted and searched stored here
        sortByName: true        // Name sort criteria true/false toggle
    };

    componentDidMount() {
        this.searchEmp("?results=200&nat=us");
    };

    // Runs user API and stores result to both arrays
    searchEmp = query => {
        API.search(query)
            .then(res => {
                this.setState({ result: res.data.results });
                this.setState({ sortedEmployees: res.data.results})
            })
            .catch(err => console.log(err));
    };

    // Employee names are sorted alphabetically from A-Z or Z-A depending on state of sortByName. sortByName is swapped true/false at end of function
    sortName = () => {
        let sortEmp = [];
        if (this.state.sortByName) {
            sortEmp = this.state.result.sort((a, b) => {
                const nameA = a.name.first.toLowerCase(), nameB = b.name.first.toLowerCase();
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0
            })
            this.setState({ sortByName: false })
        } else {
            sortEmp = this.state.result.sort((a, b) => {
                const nameA = a.name.first.toLowerCase(), nameB = b.name.first.toLowerCase();
                if (nameA > nameB) return -1
                if (nameA < nameB) return 1
                return 0
            })
            this.setState({ sortByName: true })
        }
        this.setState({ sortedEmployees: sortEmp })
    };

    // Employee array is filtered in real-time as user types in search bar
    handleSearchChange = event => {
        const filter = event.target.value;
        // eslint-disable-next-line array-callback-return
        const filteredList = this.state.result.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            if(values.indexOf(filter.toLowerCase()) !== -1){
                return item
            };
        });
        this.setState({ sortedEmployees: filteredList });
    };

    render() {
        return (
            <div>
                <SearchBar handleSearchChange={this.handleSearchChange} />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>
                                <span type="button" onClick={this.sortName}>
                                    {/* Sort Icon changes depending on current state of name sorting */}
                                    Name <FontAwesomeIcon icon={!this.state.sortByName ? faSortAlphaUp : faSortAlphaDown}/>
                                </span>
                            </th>                        
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeList employees={this.state.sortedEmployees} />
                    </tbody>
                </table>    
            </div>
        )
    }
    
}

export default EmployeeTable;
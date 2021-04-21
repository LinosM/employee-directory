import React from "react";
import API from "../../utils/API";
import EmployeeList from "../EmployeeList";
import SearchBar from "../SearchBar";
import "./style.css"
import { faSortAlphaUp, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmployeeTable extends React.Component {

    state = {
        search: "",
        result: [],
        sortedEmployees: [],
        sortByName: true
    };

    componentDidMount() {
        this.searchEmp("");
    };

    searchEmp = query => {
        API.search(query)
            .then(res => {
                this.setState({ result: res.data.results });
                this.setState({ sortedEmployees: res.data.results})
            })
            .catch(err => console.log(err));
    };

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

    handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.result.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            console.log(filter, values)
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
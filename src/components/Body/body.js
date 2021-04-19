import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable/employeetable";

class Body extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmp("");
    };

    searchEmp = query => {
        API.search(query)
            .then(res => {
                this.setState({ result: res.data.results });
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <EmployeeTable 
                employees={this.state.result}
            />
        );
    };
}

export default Body;
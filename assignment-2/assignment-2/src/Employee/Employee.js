import React from 'react';
import './Employee.css';
const employee = (props) =>{

    return(
        <tr>
        <td>{props.name}</td>
        <td>{props.job}</td>
        </tr>
    )
};

export default employee;
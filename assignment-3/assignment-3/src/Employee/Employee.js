import React from 'react';
//import './Employee.css';

const employee = (props) => {
    return ( <tbody>
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
            <td><button> Remove </button></td>
        </tr>
     </tbody>
    )
}

export default employee;
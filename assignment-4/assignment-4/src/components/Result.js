import React, { useState } from 'react';
import './Result.css';

const Result = (props) => {
    
    return (
        <div className="result">
            <p>{props.userResult}</p>
        </div>
    )
}

export default Result;
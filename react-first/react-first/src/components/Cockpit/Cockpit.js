import React from 'react';
import './Cockpit.css';
const cockpit=(props)=>{

    const style={
        backgroundColor : 'red'
    };
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    const assignedClasses = [];
    if ( props.state.persons.length <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( props.state.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }


    return(
        <div className="Cockpit">
    <h1>Hi, I'm a React App</h1>
    <p className={assignedClasses.join( ' ' )}>This is really working!</p>
    <button
      style={style}
      onClick={props.clicked}>Toggle Persons</button>
      </div>
    );
};

export default cockpit;
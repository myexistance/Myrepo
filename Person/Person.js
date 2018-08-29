import React from 'react';
//const person= () => { //function
const person= (props) => { //function
	//return <p> I am a person. I am Math.floor(Math.random()*30) years old!</p>
	//return <p> I am a person. I am {Math.floor(Math.random()*30)} years old!</p>
	//return <p> I am a {props.name}! I am {props.age} years old!</p>
	return (
		<div>
		<p> I am {props.name}! I am {props.age} years old!</p>
		<p> {props.children} </p>
		</div>
		)

};

export default person;

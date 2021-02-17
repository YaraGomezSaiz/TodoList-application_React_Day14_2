//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function List(props) {
	const [arraylist, setArrayList] = useState(["hello"]);
	const [arraycopy, setArraycopy] = useState(["hola", "adios"]);

	//setArrayList(arraycopy);

	return (
		<ul className="list-group">
			<h2>To Do List</h2>
			{arraycopy.map(listitem => (
				<li key={listitem} className="list-group-item">
					{" "}
					{listitem}
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	text: PropTypes.string
};

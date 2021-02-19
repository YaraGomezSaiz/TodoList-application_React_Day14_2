import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Task(props) {
	const [itemchanged, setItemChanged] = useState(false);

	function callDelete() {
		props.delete(props.index);
	}

	return (
		<li className="list-group-item showitem">
			{" Task "}
			{props.index + 1}
			{" : "}

			{props.listitem}
            {/* a la clase se le selecciona en css visibilidad con hover
            de forma que cuando pongas el raton encima muestre un boton para borrar tarea */}
			<button className="DeleteButton show" onClick={callDelete}>
				x
			</button>
		</li>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	listitem: PropTypes.string,
	delete: PropTypes.number
};

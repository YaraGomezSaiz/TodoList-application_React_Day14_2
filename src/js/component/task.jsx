import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Task(props) {
	const [showdeletebtn, setShowDeleteBtn] = useState("");
	const [itemchanged, setItemChanged] = useState(false);

	function callDelete() {
		props.delete(props.index);
	}

	function onMouseSet(index) {
		setShowDeleteBtn(
			<button className="DeleteButton show" onClick={callDelete}>
				x
			</button>
		);
	}

	function onMouseLeave(index) {
		setShowDeleteBtn("");
	}

	return (
		<li
			className="list-group-item showitem"
			// al posicionarse sobre un item se llama a onMouseSet para mostrar boton borrar
			//al salirse no lo muestra
			onMouseEnter={() => onMouseSet(props.index)}
			onMouseLeave={() => onMouseLeave(props.index)}>
			{" Task "}
			{props.index + 1}
			{" : "}
			{props.listitem}
			{showdeletebtn}
		</li>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	listitem: PropTypes.string,
	delete: PropTypes.number
};

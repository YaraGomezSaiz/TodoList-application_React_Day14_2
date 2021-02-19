import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function GetInput(props) {
	const [task, setTask] = useState("");

	//Almacena el valor del input mientras cambia

	function saveInput(event) {
		setTask(event.target.value);
	}

	// //Al pulsar enter se guarda el valor del Input en el item task

	function setInput(event) {
		props.onEnter(task);
	}

	return (
		<div className="InputTask list-group-item ">
			<input
				type="text"
				onChange={saveInput}
				placeholder="Introduce new task"
				onKeyPress={event =>
					event.key === "Enter" ? setInput() : null
				}
			/>
		</div>
	);
}

GetInput.propTypes = {
	onEnter: PropTypes.string
};

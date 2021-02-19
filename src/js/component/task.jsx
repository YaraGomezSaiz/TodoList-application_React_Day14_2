import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Task(props) {
	function callDelete() {
		props.delete(props.index);
	}

	return (
		<li
			id={props.index}
			className="list-group-item showitem"
			// onMouseEnter={() => onMouseSet(index)}
			// onMouseLeave={() => onMouseLeave(index)}
		>
			{" Task "}
			{props.index + 1}
			{" : "}

			{props.listitem}
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

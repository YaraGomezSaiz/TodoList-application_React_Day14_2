import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Footer(props) {
	return (
		<li key="itemsLeft" className="list-group-item itemsLeft">
			<div>
				{props.length}
				{props.length == 0
					? " Items. No task"
					: props.length == 1
					? " Item left"
					: " Items left"}
			</div>
		</li>
	);
}

Footer.propTypes = {
	length: PropTypes.number
};

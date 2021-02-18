import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Footer(props) {
	return (
		<li key="itemsLeft" className="list-group-item itemsLeft">
			<span>{props.length} Items Left</span>
		</li>
	);
}

Footer.propTypes = {
	length: PropTypes.number
};

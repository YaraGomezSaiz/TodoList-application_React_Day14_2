//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//include images into your bundle
import List from "./list.jsx";

export default function InputText() {
	const [task, setTask] = useState("");
	const [itemlist, setItemList] = useState("");
	const [itemchanged, setItemChanged] = useState(false);
	const [arraylist, setArrayList] = useState(["perro", "gato"]);
	const [showicon, setShowIcon] = useState("");
	const [isShown, setIsShown] = useState(false);

	//Almacena el valor del input mientras cambia
	function saveInput(event) {
		setTask(event.target.value);
	}

	//Al pulsar el boton guarda
	function setInput(event) {
		setItemList(task);
		addTaskinTask(task);
		setItemChanged(!itemchanged);
	}

	function addTaskinTask(item) {
		let arraycopy = arraylist;
		arraycopy.push(item);
		setArrayList(arraycopy);
	}

	function deteleTaskinTasks() {
		let arraycopy2 = arraylist;
		arraycopy2.splice(0, 1);
		setArrayList(arraycopy2);
		console.log(arraycopy2);

		console.log(arraylist);
		setItemChanged(!itemchanged);
	}

	function onMouseSet() {
		setShowIcon(
			<button className="DeleteButton" onClick={deteleTaskinTasks}>
				x
			</button>
		);
	}

	function onMouseLeave() {
		setShowIcon("");
	}
	return (
		<div>
			<h2>To Do List</h2>
			<button onClick={setInput}>Save</button>

			<div className="InputTask list-group-item ">
				<input
					type="text"
					onChange={saveInput}
					placeholder="Introduce new task"
				/>
			</div>
			<ul className="list-group">
				{arraylist.map((listitem, index) => (
					<li
						key={index}
						className="list-group-item"
						onMouseEnter={onMouseSet}
						onMouseLeave={onMouseLeave}>
						{" Task "}
						{" : "}
						{listitem} {showicon}
					</li>
				))}
				<li key="itemsLeft" className="list-group-item itemsLeft">
					<span>4items Left</span>
				</li>
			</ul>
		</div>
	);
}

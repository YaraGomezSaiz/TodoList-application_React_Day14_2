//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//include images into your bundle
import Footer from "./footer.jsx";
import Task from "./task.jsx";

export default function Main() {
	const [task, setTask] = useState("");
	const [itemlist, setItemList] = useState("");
	const [itemchanged, setItemChanged] = useState(false);
	const [arraylist, setArrayList] = useState(["perro", "gato"]);
	const [showicon, setShowIcon] = useState("");
	const [isShown, setIsShown] = useState(false);
	const [isDelete, setIsDelete] = useState(false);

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

	function deteleTaskinTasks(index) {
		let arraycopy2 = arraylist;
		arraycopy2.splice(index, 1);
		setArrayList(arraycopy2);
		setItemChanged(!itemchanged);
	}

	function onMouseSet(index) {
		setShowIcon("");
		// <button
		// 	className="DeleteButton show"
		// 	onClick={() => deteleTaskinTasks(index)}>
		// 	x
		// </button>
	}

	function onMouseLeave(index) {
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
				{arraylist.map((listitem, index) => {
					return (
						<li
							key={index}
							id={index}
							className="list-group-item showitem"
							// onMouseEnter={() => onMouseSet(index)}
							// onMouseLeave={() => onMouseLeave(index)}
						>
							{" Task "}
							{" : "}
							{listitem} {showicon}
							<button
								className="DeleteButton show"
								onClick={() => deteleTaskinTasks(index)}>
								x
							</button>
						</li>
					);
				})}

				<Footer length={arraylist.length} />
			</ul>
		</div>
	);
}

/*<ul className="list-group">
				{arraylist.map(listitem => (
					<li key={listitem}>
						<Task listitem={itemlist} />
					</li>
				))}

				<Footer length={arraylist.length} />
			</ul>*/

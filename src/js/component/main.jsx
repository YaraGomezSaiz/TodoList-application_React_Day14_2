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
import GetInput from "./getinput.jsx";
import Task from "./task.jsx";

export default function Main() {
	const [task, setTask] = useState("");
	const [itemlist, setItemList] = useState("");
	const [itemchanged, setItemChanged] = useState(false);
	const [arraylist, setArrayList] = useState(["perro", "gato"]);
	const [showicon, setShowIcon] = useState("");

	// //Almacena el valor del input mientras cambia

	// function saveInput(event) {
	// 	setTask(event.target.value);
	// }

	// //Al pulsar enter se guarda el valor del Input en el item task

	// function setInput(event) {
	// 	setItemList(task);
	// 	addTaskinTask(task);
	// 	setItemChanged(!itemchanged);
	// }

	//añade el item creado en el array de tareas

	function addTaskinTask(item) {
		let arraycopy = arraylist;
		arraycopy.push(item);
		setArrayList(arraycopy);
		setItemChanged(!itemchanged);
	}

	//borra el item seleccionado del array de tareas

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
			<GetInput onEnter={addTaskinTask} />

			<ul className="list-group">
				{arraylist.map((listitem, index) => {
					return (
						<Task
							key={listitem}
							listitem={listitem}
							index={index}
							delete={deteleTaskinTasks}
						/>
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

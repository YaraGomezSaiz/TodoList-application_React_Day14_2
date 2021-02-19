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
	const [arraylist, setArrayList] = useState([
		"comprar IPAs",
		"llamar a mama"
	]);

	//añade el item creado al array de tareas
	/* para trabajar con array states previamente se copia el array actual 
    en un array auxiliar, se trabaja sobre el auxiliar 
    y se vuelve a copiar en el array origen*/

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

	return (
		<div>
			<h2>To Do List</h2>
			{/* a GetInput le decimos por el prop onEnter(de tipo funcion) que cuando se active onEnter 
            llame a la funcion padre addTaskinTask, 
            es decir desde el hijo GetInput llamamamos a una funcion del padre*/}
			<GetInput onEnter={addTaskinTask} />

			{/* array.map recorre arraylist, en cada iteacion llama al componente hijo Task, 
            hay que configurar la key={} pq js lo necesita internamente 
            pero no es una prop que haya que definir en Task*/}
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

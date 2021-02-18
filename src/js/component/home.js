import React from "react";

//include images into your bundle
import Main from "./main.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			{" "}
			<Main />
		</div>
	);
}

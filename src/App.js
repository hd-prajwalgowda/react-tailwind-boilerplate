import React from "react";
import "./assets/main.css";
function App() {
  return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
			<img src={require("./assets/react_tailwind.png")} className="h-56" />
			<div className="text-4xl">
				A <a className="font-bold text-blue-600" href="https://reactjs.org/">React</a> Boilerplate with Tailwind CSS
        	</div>
        	<div className="text-lg">
				Click here to get started with <a className="font-bold text-blue-600" href="https://tailwindcss.com/docs/">Tailwind</a> CSS
        	</div>
     </div>
  );
}

export default App;

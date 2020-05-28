import React, { useState } from 'react';
import Todos from "./data/todos.js";
import "./App.css";




const App = () => {

	return (
		<div>

			<h1>Todo app</h1>

			<h3>react</h3>
			<ul>

				{Todos.map((item, index) => {
					return (
					<li key={index}>
						<div>
							{item.title}
							<input type="checkbox" checked={item.isCompleted}/>
							<button onClick={() => removeTodo(index)}>x</button>
						</div>
					</li>
					)
				})}

			</ul>
			
		</div>
	);
};
export default App;
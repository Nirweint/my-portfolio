import React from 'react';
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Remote} from "./components/Remote/Remote";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

function App() {
	return (
		<div className="app">
			<Main/>
			<Skills/>
			<Projects/>
			<Remote/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;

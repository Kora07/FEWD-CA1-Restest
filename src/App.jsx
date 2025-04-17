import { useState } from 'react'
import './App.css'
import ServiceCard from "./components/ServiceCard";

function App() {
	
	const details = [
		{
			title: "Web Developer",
			description: "A service where a person develops websites.",
		},
		{
			title: "Play Tester",
			description: "A service where a person tests video games created by a game developer to find bugs and other issues.",
		},
		{
			title: "Game Developer",
			description: "A service where a person develops video games.",
		},
	]

	return (
		<>
			{details.map((deet, index) => (
				<ServiceCard title={deet.title} description={deet.description} /> 
			))}
		</>
	)
}

export default App

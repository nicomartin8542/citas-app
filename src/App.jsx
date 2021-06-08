import React, {Fragment, useState, useEffect} from "react";
import Formulario from "./Components/Formulario";
import Cita from "./Components/Cita";

function App() {
	//Citas localstorage
	let citasInitial = JSON.parse(localStorage.getItem("citas"));
	if (!citasInitial) {
		citasInitial = [];
	}

	//Array Citas
	const [citas, addCitas] = useState(citasInitial);

	//UseEfect Manejador de operacion cuando cambia el state
	useEffect(() => {
		let citasInitial = JSON.parse(localStorage.getItem("citas"));
		if (citasInitial) {
			localStorage.setItem("citas", JSON.stringify(citas));
		} else {
			localStorage.setItem("citas", JSON.stringify([]));
		}
	}, [citas]);

	//Function update citas
	const createCitas = (cita) => {
		addCitas([...citas, cita]);
	};

	//Delete Citacitas
	const deleteCita = (id) => {
		const citasFilter = citas.filter((cita) => cita.id !== id);
		addCitas(citasFilter);
	};

	//Msj conditional
	const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";

	return (
		<Fragment>
			<h1>Administrador de Citas</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario createCitas={createCitas} />
					</div>
					<div className="one-half column">
						<h2>{titulo}</h2>

						{citas.map((cita) => (
							<Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

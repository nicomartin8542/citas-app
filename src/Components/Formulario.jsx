import React, {Fragment, useState} from "react";
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";

const Formulario = ({createCitas}) => {
	//Create State
	const [cita, updateCita] = useState({
		mascota: "",
		propietario: "",
		fecha: "",
		hora: "",
		sintomas: "",
	});
	const [error, updateError] = useState(false);

	//Handle update state
	const handleChange = (e) => {
		updateCita({...cita, [e.target.name]: e.target.value});
	};

	//Var state cita
	const {mascota, propietario, fecha, hora, sintomas} = cita;

	//Submit Form
	const submitCita = (e) => {
		e.preventDefault();

		//Valid form
		if (
			mascota.trim() === "" ||
			propietario.trim() === "" ||
			fecha.trim() === "" ||
			hora.trim() === "" ||
			sintomas.trim() === ""
		) {
			updateError(true);
			return;
		}

		//Delete msj error
		updateError(false);

		//Asign ID
		cita.id = uuidv4();

		//Create Cite
		createCitas(cita);

		//Reset Form
		updateCita({
			mascota: "",
			propietario: "",
			fecha: "",
			hora: "",
			sintomas: "",
		});
	};

	return (
		<Fragment>
			<h2>Crear Cita</h2>
			{error ? (
				<p className="alerta-error">Los campos son obligatorios</p>
			) : null}
			<form onSubmit={submitCita}>
				<label htmlFor="">Nombre Mascota</label>
				<input
					type="text"
					className="u-full-width"
					name="mascota"
					placeholder="Nombre Mascota"
					onChange={handleChange}
					value={mascota}
				/>
				<label htmlFor="">Nombre Dueño</label>
				<input
					type="text"
					className="u-full-width"
					name="propietario"
					placeholder="Nombre Dueño mascota"
					onChange={handleChange}
					value={propietario}
				/>

				<label htmlFor="">Fecha</label>
				<input
					type="date"
					className="u-full-width"
					name="fecha"
					onChange={handleChange}
					value={fecha}
				/>

				<label htmlFor="">Hora</label>
				<input
					type="time"
					className="u-full-width"
					name="hora"
					onChange={handleChange}
					value={hora}
				/>

				<label htmlFor="">Sintomas</label>
				<textarea
					cols="30"
					rows="10"
					className="u-full-width"
					name="sintomas"
					onChange={handleChange}
					value={sintomas}
				></textarea>

				<button className="u-full-width button-primary" type="submit">
					Agregar Cita
				</button>
			</form>
		</Fragment>
	);
};

Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired,
};

export default Formulario;

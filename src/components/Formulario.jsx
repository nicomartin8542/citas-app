import { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import formularioValidate from "../validation/formularioValidate";
import AlertForm from "./alerts/AlertForm";

const Formulario = ({ valuesStorade, setSave }) => {
  const [values, error, handleInputChange, handleFormSubmit] = useForm(
    {
      nombre: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    },
    formularioValidate,
    saveData
  );

  const { nombre, propietario, email, alta, sintomas } = values;

  function saveData() {
    localStorage.setItem("values", JSON.stringify([...valuesStorade, values]));
    setSave(true);
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
      >
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre mascota
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md"
            value={nombre}
            onChange={handleInputChange}
          />
          {error.nombre && <AlertForm msg={error.nombre} />}
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700">
            Nombre propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre de la propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md"
            name="propietario"
            value={propietario}
            onChange={handleInputChange}
          />
          {error.propietario && <AlertForm msg={error.propietario} />}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {error.email && <AlertForm msg={error.email} />}
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700">
            Alta
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md"
            name="alta"
            value={alta}
            onChange={handleInputChange}
          />
          {error.alta && <AlertForm msg={error.alta} />}
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700">
            Simtomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            name="sintomas"
            value={sintomas}
            onChange={handleInputChange}
          />
          {error.sintomas && <AlertForm msg={error.sintomas} />}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full text-white p-3 rounded-md hover:bg-indigo-700 cursor-pointer transition-all "
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;

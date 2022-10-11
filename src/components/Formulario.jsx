import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useForm from "../hooks/useForm";
import formularioValidate from "../validation/formularioValidate";
import AlertForm from "./alerts/AlertForm";
import ButtonForm from "./buttons/ButtonForm";

const Formulario = ({ valuesStorade, setSave, paciente }) => {
  const [values, setValues, error, handleInputChange, handleFormSubmit] =
    useForm(
      {
        nombre: "",
        propietario: "",
        email: "",
        alta: "",
        sintomas: "",
        id: "",
      },
      formularioValidate,
      saveData
    );

  const { nombre, propietario, email, alta, sintomas } = values;

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setValues(paciente);
    }
  }, [paciente]);

  function saveData() {
    setValues((values.id = uuidv4()));
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
        <div className="mb-3">
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
        </div>

        <div className="mb-3">
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
        </div>

        <div className="mb-3">
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
        </div>

        <div className="mb-3">
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
        </div>

        <div className="mb-1">
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
        </div>

        {error.msg && <AlertForm msg={error.msg} />}

        <ButtonForm
          color={paciente.id ? "lime" : "indigo"}
          text={paciente.id ? "Modificar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;

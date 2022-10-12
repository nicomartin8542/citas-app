const Pacientes = ({ paciente, setPaciente, deletePaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;
  return (
    <div className="bg-white mx-5 mb-2 px-5 py-10 rounded-xl ">
      <p className="uppercase font-bold text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-3">
        <button
          type="button"
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-bold uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white mr-2 rounded-md font-bold uppercase"
          onClick={() => deletePaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;

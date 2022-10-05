const Pacientes = (value) => {
  const { nombre, propietario, email, alta, sintomas } = value;
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
    </div>
  );
};

export default Pacientes;

import Pacientes from "./Pacientes";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen ">
      <h2 className="font-black text-3xl text-center">
        Desde listado pacientes
      </h2>
      <p className="text-xl mb-10 mt-5 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="h-screen md:overflow-y-scroll">
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
      </div>
    </div>
  );
};

export default ListadoPacientes;

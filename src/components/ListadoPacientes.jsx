import { useState, useEffect } from "react";
import Pacientes from "./Pacientes";

const ListadoPacientes = ({ valuesStorade, setPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen ">
      {valuesStorade.length === 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">No hay datos!</h2>
          <p className="text-xl mb-10 mt-5 text-center">
            Comienza cargados tus {""}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Desde listado pacientes
          </h2>
          <p className="text-xl mb-10 mt-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className="h-screen md:overflow-y-scroll">
            {valuesStorade.map((paciente, i) => (
              <Pacientes
                key={i}
                paciente={paciente}
                setPaciente={setPaciente}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;

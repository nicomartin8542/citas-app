const Pacientes = () => {
  return (
    <div className="bg-white mx-5 mb-2 px-5 py-10 rounded-xl ">
      <p className="uppercase font-bold text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">Nombre</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">Nico</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Alta: {""}
        <span className="font-normal normal-case">10 de enero de 2022</span>
      </p>
      <p className="uppercase font-bold text-gray-700">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          maiores explicabo nobis perspiciatis maxime quasi, eum eius, placeat
          cupiditate, officia ut itaque. Magni nulla molestias explicabo
          maiores, labore a excepturi.
        </span>
      </p>
    </div>
  );
};

export default Pacientes;

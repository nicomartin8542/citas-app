const formularioValidate = (values) => {
  const { nombre, propietario, email, alta, sintomas } = values;
  let error = {};

  if (nombre.trim() === "") error.nombre = "Debe cargar un nombre";
  if (propietario.trim() === "")
    error.propietario = "Debe cargar un propietario";
  if (email.trim() === "") error.email = "Debe cargar un email";
  if (alta.trim() === "") error.alta = "Debe cargar un alta";
  if (sintomas.trim() === "") error.sintomas = "Debe cargar un sintomas";

  return error;
};

export default formularioValidate;

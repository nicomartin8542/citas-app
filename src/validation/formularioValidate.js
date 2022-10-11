const formularioValidate = (values) => {
  const { nombre, propietario, email, alta, sintomas } = values;
  let error = {};

  if ([nombre, propietario, email, alta, sintomas].includes("")) {
    error.msg = "Tiene que completar todos los campos";
  }

  return error;
};

export default formularioValidate;

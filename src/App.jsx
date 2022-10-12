import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [valuesStorade, setValuesStorade] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [save, setSave] = useState(false);

  useEffect(() => {
    setSave(false);
    const storade = JSON.parse(localStorage.getItem("values"));
    if (storade) setValuesStorade(storade);
  }, [save]);

  const deletePaciente = (id) => {
    const pacientesFilter = valuesStorade.filter((value) => value.id !== id);
    localStorage.setItem("values", JSON.stringify(pacientesFilter));
    setSave(true);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          valuesStorade={valuesStorade}
          setSave={setSave}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          valuesStorade={valuesStorade}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  );
}

export default App;

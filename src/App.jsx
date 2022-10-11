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

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          valuesStorade={valuesStorade}
          setSave={setSave}
          paciente={paciente}
        />
        <ListadoPacientes
          valuesStorade={valuesStorade}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;

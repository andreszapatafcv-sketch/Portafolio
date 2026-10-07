import "./App.css";
import { Presentacion } from "./components/Presentacion";
import { ListaTecnologias } from "./components/ListaTecnologias";
import { ListaProyectos } from "./components/ListaProyectos";
import { nombre, descripcion, correo, tecnologias, proyectos } from "./data";

function App() {
  return (
    <div className="contenedor">
      <Presentacion nombre={nombre} descripcion={descripcion} />

      <section>
        <h2>Tecnologías</h2>
        <ListaTecnologias tecnologias={tecnologias} />
      </section>

      <section>
        <h2>Proyectos</h2>
        <ListaProyectos proyectos={proyectos} />
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Escríbeme a <a href={`mailto:${correo}`}>{correo}</a>
        </p>
      </section>
    </div>
  );
}

export default App;
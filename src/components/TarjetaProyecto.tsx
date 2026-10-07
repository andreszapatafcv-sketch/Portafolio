import type { Proyecto } from "../types";

export function TarjetaProyecto({ nombre, descripcion, repositorio, demo }: Proyecto) {
  return (
    <article className="tarjeta">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      {repositorio && <a href={repositorio}>Repositorio</a>}
      {demo && <a href={demo}>Ver sitio</a>}
    </article>
  );
}
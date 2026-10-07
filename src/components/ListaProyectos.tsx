import type { Proyecto } from "../types";
import { TarjetaProyecto } from "./TarjetaProyecto";

interface Props {
  proyectos: Proyecto[];
}

export function ListaProyectos({ proyectos }: Props) {
  return (
    <div className="proyectos">
      {proyectos.map((p) => (
        <TarjetaProyecto key={p.nombre} {...p} />
      ))}
    </div>
  );
}
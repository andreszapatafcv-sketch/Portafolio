interface Props {
  nombre: string;
  descripcion: string;
}

export function Presentacion({ nombre, descripcion }: Props) {
  return (
    <header>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
    </header>
  );
}
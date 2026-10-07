interface Props {
  tecnologias: string[];
}

export function ListaTecnologias({ tecnologias }: Props) {
  return (
    <ul className="Tecnologias">
      {tecnologias.map((tec) => (
        <li key={tec}>{tec}</li>
      ))}
    </ul>
  );
}
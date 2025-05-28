

function Componentes(props) {
  return (
    <div className="relative bg-[#0a213a] text-white p-6 rounded-2xl w-52 shadow-md">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
        Membro {props.idx}
      </div>
      <div className="mt-6 space-y-2">
        <span>Nome: {props.aluno}</span><br />
        <span>Idade: {props.idade}</span><br />
        <span>Curso: {props.curso}</span>
      </div>
    </div>
  );
}

export default Componentes;

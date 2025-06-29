import { useState } from "react";

type Receita = {
  id: number;
  nome: string;
  ingredientes: string;
  tempo: string;
};

export default function App() {
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [tempo, setTempo] = useState("");
  const [receitas, setReceitas] = useState<Receita[]>([
    {
      id: 1,
      nome: "Canjica",
      ingredientes: "Milho de canjica, água, leite, coco ralado, leite condensado, cravo, canela, açúcar",
      tempo: "90 Minutos",
    },
    {
      id: 2,
      nome: "Arroz",
      ingredientes: "Arroz, alho, sal, água",
      tempo: "20 Minutos",
    },
    {
      id: 3,
      nome: "Feijão",
      ingredientes: "Feijão, alho, sal, linguiça, água",
      tempo: "60 Minutos",
    },
    {
      id: 4,
      nome: "Sopa",
      ingredientes: "Batata, cenoura, água, manteiga, sal, alho, cebola, linguíça, pimenta",
      tempo: "45 Minutos",
    },
  ]);

  const adicionarReceita = () => {
    if (!nome.trim() || !ingredientes.trim() || !tempo.trim()) return;

    const novaReceita: Receita = {
      id: Date.now(),
      nome: nome.trim(),
      ingredientes: ingredientes.trim(),
      tempo: tempo.trim(),
    };

    setReceitas((old) => [...old, novaReceita]);
    setNome("");
    setIngredientes("");
    setTempo("");
  };

  const removerReceita = (id: number) => {
    setReceitas((old) => old.filter((r) => r.id !== id));
  };

return (
  <div className="w-full min-h-screen flex flex-col items-center justify-between">
    <header className="bg-[#001830] w-full text-left p-[75px] text-2xl text-white py-6">
        Lista de Receitas
    </header>

    <main className="bg-white w-full max-w-7xl rounded-xl p-8 text-black shadow-md">
      <div className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Nome da Receita"
          className="w-full px-5 py-2 rounded-full border border-orange-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredientes"
          className="w-full px-5 py-2 rounded-full border border-orange-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tempo de Preparo"
          className="w-full px-5 py-2 rounded-full border border-orange-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>

      <button
        onClick={adicionarReceita}
        className="bg-orange-600 hover:bg-orange-700 transition-colors w-full max-w-xs mx-auto block rounded-full py-2 text-white font-semibold mb-10"
      >
        Adicionar
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {receitas.map(({ id, nome, ingredientes, tempo }) => (
          <div key={id} className="bg-orange-600 text-white font-bold rounded-xl px-6 py-4 relative">
            <h3 className="font-bold text-center mb-1">{nome}</h3>
            <p className="text-center text-sm mb-2">{ingredientes}</p>
            <p className="text-center text-xs mt-1">{tempo}</p>
            <button
              onClick={() => removerReceita(id)}
              aria-label={`Remover receita ${nome}`}
              className="absolute top-3 right-3 hover:text-[#001830]"
              title="Remover receita"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </main>

    <footer className="bg-[#001830] w-full text-center text-white/70 text-sm py-6 border-t border-white/20 mt-8">
      COPYRIGHT © 2024 - SERRA JUNIOR ENGENHARIA
    </footer>
  </div>
);
}

import './App.css';
import Componentes from './componentes.jsX';

function SerraJr() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between">
      <header className="w-full bg-orange-500 py-4 px-8 flex items-center gap-4">
        <img
          src="/LogoSerraJr.png"
          alt="Logo"
          className="w-8 h-8"/>
        <div className="text-white font-bold text-2xl"> 
          Equipe Serra Jr 
        </div>
      </header>

      <main className="flex justify-center items-start gap-8 mt-1 mb-0 p-12">
        <Componentes aluno="Gabriel" idade="25" curso="Computação" idx={1} />
        <Componentes aluno="Mateus" idade="30" curso="Computação" idx={2} />
        <Componentes aluno="Vitor" idade="25" curso="Mecânica" idx={3} />
      </main>

      <footer className="w-full bg-orange-500 text-white text-center py-4 mt-16 text-xs">
        COPYRIGHT © 2024 - SERRA JUNIOR ENGENHARIA
      </footer>
    </div>
  );
}

export default SerraJr;
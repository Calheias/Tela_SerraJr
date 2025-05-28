//    TENTATIVA PARA App.jsx

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
// import './App.css'
// //import tailwindcss from '@tailwindcss/vite'
// //import React from "react";
// import Componentes from './componentes.jsX';

// function SerraJr() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-between">
//       <header className="w-full bg-orange-500 py-4 px-8 flex items-center gap-4">
//         <img
//           src="/logo.png" // Substitua com o caminho real do logo
//           alt="Logo"
//           className="w-8 h-8"
//         />
//         <div className="text-white font-bold text-2xl">Equipe Serra Jr</div>
//       </header>

//       <main className="flex justify-center items-start gap-8 mt-1 mb-0 p-12">
//         <Componentes aluno='Gabriel' idade='25' curso='Computação' />      
//       </main>

//       <footer className="w-full bg-orange-500 text-white text-center py-4 mt-16 text-xs">
//         COPYRIGHT © 2024 - SERRA JUNIOR ENGENHARIA
//       </footer>
//     </div>
//   );
// }

// export default SerraJr;


//    TENTATIVA PARA componente.jsx

// function Componentes(props){
//   return(
//     <div className="flex justify-center items-start gap-8 mt-1 mb-0 p-12">
//         {props.map((membro, idx) => (
//           <div className="relative bg-[#0a213a] text-white p-6 rounded-2xl w-52 shadow-md">
//             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
//               Membro {idx}
//             </div>
//             <div className="mt-6 space-y-2">
//               <span> Nome: { props.aluno }</span><br/>
//               <span> Idade: { props.idade }</span><br/>
//               <span> Curso: { props.curso }</span>
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Componentes;

import React from 'react';

function Tabela() {
  const data = [
    { dia: 'Segunda', aulas: [{ name: "Alessa", disciplina: "Programação Mobile", hora: "13:20" }, { name: "Moises", disciplina: "Programação Web", hora: "14:30" }] },
    { dia: 'Terça', aulas: [{ name: "Maria", disciplina: "Ciência de Dados", hora: "10:00" }, { name: "Jonas", disciplina: "Inteligência Artificial", hora: "11:30" }] },
    { dia: 'Quarta', aulas: [{ name: "Pedro", disciplina: "Banco de Dados", hora: "15:40" }, { name: "Paulo", disciplina: "Estrutura de Dados", hora: "16:50" }] },
    { dia: 'Quinta', aulas: [{ name: "Lucas", disciplina: "Redes de Computadores", hora: "09:10" }, { name: "João", disciplina: "Sistemas Operacionais", hora: "10:20" }] },
    { dia: 'Sexta', aulas: [{ name: "Patricia", disciplina: "Engenharia de Software", hora: "14:00" }, { name: "Mateus", disciplina: "Compiladores", hora: "15:10" }] },
  ];

  // Encontre o maior número de aulas em um dia
  const maxAulas = Math.max(...data.map(item => item.aulas.length));

  return (
    <div className="flex justify-center">
      <table className="table-auto w-full max-w-md overflow-x-auto mx-auto my-4 shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Horário</th>
            {data.map((item, index) => (
              <th key={index} className="px-4 py-2">{item.dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxAulas }).map((_, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                {data[0].aulas[index] ? (
                  <div>
                    <span>{data[0].aulas[index].hora}</span>
                  </div>
                ) : null}
              </td>
              {data.map((item, diaIndex) => (
                <td key={diaIndex} className="border px-4 py-2">
                  {item.aulas[index] ? (
                    <div>
                      <span>{item.aulas[index].name}</span>
                      <span>{item.aulas[index].disciplina}</span>
                    </div>
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;

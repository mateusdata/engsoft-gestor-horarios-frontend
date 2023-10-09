import React from 'react';
import { Link } from 'react-router-dom';

const Teste = () => {
  return (
    <div>
      <h1>Lista de Professores, Alunos e Matérias</h1>
      <ul>
        {/* Professores */}
        <li>
          <strong>Professor:</strong> John Doe
          <br />
          <strong>Disciplina:</strong> Matemática
        </li>
        <li>
          <strong>Professor:</strong> Jane Smith
          <br />
          <strong>Disciplina:</strong> História
        </li>

        {/* Alunos */}
        <li>
          <strong>Aluno:</strong> Alice Johnson
          <br />
          <strong>Idade:</strong> 20 anos
        </li>
        <li>
          <strong>Aluno:</strong> Bob Williams
          <br />
          <strong>Idade:</strong> 22 anos
        </li>

        {/* Matérias */}
        <li>
          <strong>Disciplina:</strong> Física
          <br />
          <strong>Horário:</strong> Segunda-feira, 9:00 - 10:30
        </li>
        <li>
          <strong>Disciplina:</strong> Química
          <br />
          <strong>Horário:</strong> Terça-feira, 11:00 - 12:30
        </li>

        {/* Adicione mais dados fictícios aqui */}

        <Link to={"/"}>Voltar</Link>

      </ul>
    </div>
  );
};

export default Teste;

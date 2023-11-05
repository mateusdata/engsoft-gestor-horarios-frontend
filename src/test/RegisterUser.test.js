import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/home';

test('Renderiza a página MinhaPágina', () => {
  render(<Home/>);

  // Nenhuma verificação específica, apenas verificando se a renderização ocorreu sem erros.
});

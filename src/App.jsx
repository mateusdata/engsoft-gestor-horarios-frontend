/**
 * Componente principal da aplicação.
 *
 * Este componente renderiza as rotas da aplicação usando o componente MyRoutes.
 *
 * @component
 */
import React from 'react'
import MyRoutes from './routes/routes'

/**
 * O componente funcional que representa a aplicação.
 *
 * @returns {JSX.Element} Elemento JSX que contém as rotas da aplicação.
 */
const App = () => {
  return (
    <MyRoutes/>
  )
}

export default App

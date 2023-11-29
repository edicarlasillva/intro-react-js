import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import './styles.css'

export function App() {
  return (
    // Componente raiz que envolve a aplicação e fornece um contexto para gerenciar o roteamento
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { Details } from './Details'

export function Router() {
  return (
    <Routes>
      {/* Componente que renderiza um componente específico para uma rota correspondente */}
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  )
}
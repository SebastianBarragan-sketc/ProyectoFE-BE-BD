import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from './Components/Clientes'
import Productos from './Components/Productos'
import Ventas from './Components/Ventas'
import Menu from './Components/Menu'

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<h1>Inicio</h1>} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/ventas" element={<Ventas />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
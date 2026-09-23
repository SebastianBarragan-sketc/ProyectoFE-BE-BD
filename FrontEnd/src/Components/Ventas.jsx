// Componente Ventas
import { useEffect, useState } from 'react';
import api from '../services/api';

function Ventas() {
    const [ventas, setVentas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        api.get('/ventas')
            .then(response => {
                setVentas(response.data);
                setCargando(false);
            })
            .catch(err => {
                setError('No se pudo cargar la lista de ventas');
                setCargando(false);
                console.error(err);
            });
    }, []);
    if (cargando) return <p>Cargando ventas...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <h2>Listado de Ventas</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(v => (
                        <tr key={v.id_venta}>
                            <td>{v.id_venta}</td>
                            <td>{v.cliente}</td>
                            <td>{v.producto}</td>
                            <td>{v.cantidad}</td>
                            <td>{v.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ventas;
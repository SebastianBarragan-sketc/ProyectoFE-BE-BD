const express = require('express');
const router = express.Router();
const conexion = require('../Configuracion/DataBase');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, resultados) => {
        if (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al consultar los clientes'
            });
            return;
        }
        res.json(resultados);
    });
});

router.post('/', (req, res) => {
    const { nomCliente, contacto, departamento, ciudad } = req.body;
    const sql = `
        INSERT INTO clientes (nomCliente, contacto, departamento, ciudad)
        VALUES (?, ?, ?, ?)
    `;
    conexion.query(
        sql,
        [nomCliente, contacto, departamento, ciudad],
        (error, resultado) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    error: 'Error al agregar el cliente'
                });
                return;
            }
            res.json({
                mensaje: 'Cliente agregado correctamente',
                id: resultado.insertId
            });
        }
    );
});

module.exports = router;
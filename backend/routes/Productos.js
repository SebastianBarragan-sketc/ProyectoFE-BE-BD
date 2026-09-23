const express = require('express');
const router = express.Router();

const conexion = require('../Configuracion/DataBase');

router.get('/', (req, res) => {

    conexion.query('SELECT * FROM productos', (error, resultados) => {

        if (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al consultar los productos'
            });
            return;
        }

        res.json(resultados);
    });

});

module.exports = router;
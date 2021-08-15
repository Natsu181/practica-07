const express = require('express');
const router = express.Router();

const tareasModel = require("../models/todo");

router.get('/', function (req, res, next) {
    tareasModel
        .obtener()
        .then(tareas => {
            res.render("tareas/ver", {
              tareas: tareas,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo tareas");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("tareas/agregar");
});
router.post('/insertar', function (req, res, next) {
    const { nombre, descripcion } = req.body;
    if (!nombre || !descripcion) {
        return res.status(500).send("No hay nombre o descripcion");
    }

    tareasModel
        .insertar(nombre, descripcion)
        .then(idTareasInsertado => {
            res.redirect("/tareas");
        })
        .catch(err => {
            return res.status(500).send("Error insertando tarea");
        });
});
router.get('/eliminar/:id', function (req, res, next) {
    tareasModel
        .eliminar(req.params.id)
        .then(() => {
            res.redirect("/tareas");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});
router.get('/editar/:id', function (req, res, next) {
    tareasModel
        .obtenerPorId(req.params.id)
        .then(tarea => {
            if (tarea) {
                res.render("tareas/editar", {
                  tarea: tarea,
                });
            } else {
                return res.status(500).send("No existe tarea con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo tarea");
        });
});
router.post('/actualizar/', function (req, res, next) {

    const { id, nombre, descripcion } = req.body;
    if (!nombre || !descripcion || !id) {
        return res.status(500).send("No hay suficientes datos");
    }

    tareasModel
        .actualizar(id, nombre, descripcion)
        .then(() => {
            res.redirect("/tareas");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando tarea");
        });
});

module.exports = router;

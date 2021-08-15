const conexion = require("../config/db-connection")
module.exports = {
    async insertar(nombre, descripcion) {
        let resultados = await conexion.query(`insert into tareas
        (nombre, descripcion)
        values
        ($1, $2)`, [nombre, descripcion]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, nombre, descripcion from tareas");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, nombre, descripcion from tareas where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, descripcion) {
        const resultados = conexion.query(`update tareas
        set nombre = $1,
        descripcion = $2
        where id = $3`, [nombre, descripcion, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from tareas
        where id = $1`, [id]);
        return resultados;
    },
}
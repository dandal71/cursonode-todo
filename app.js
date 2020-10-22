const { argv } = require('./config/yargs');
const taskManager = require('./tareas/tareas');

const comando = argv._[0];

switch (comando) {
    case 'add':
        console.log('Add a new task')
        let tarea = taskManager.crearTarea(argv.description);
        console.log(tarea);
        taskManager.guardaBD();
        break;
    case 'update':
        taskManager.actualizar(argv.description, argv.completado)
            .then(tareaActualizada => console.log(`La tarea fue actualizada con exito: ${tareaActualizada.descripcion}`))
            .catch(error => console.log(`${error}`));
        break;
    case 'delete':
        taskManager.eliminar(argv.description)
            .then(() => console.log(`La tarea fue eliminada con exito`))
            .catch(error => console.log(`${error}`));
        break;
    case 'list':
        console.log("===========Listado ==============".rainbow);

        let listadoTareas = taskManager.listar();
        for (let tarea of listadoTareas) {
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            console.log('-------------------------------------'.rainbow);
        }
        break;
    default:
        console.log('Wrong command');
        break;
}
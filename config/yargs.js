const opt = {
    description: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
    completado: { alias: 'c', default: true },
};

const argv = require('yargs')
    .command('add', 'Add a new task', {
        description: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
    })
    .command('list', 'List all task created', {
        description: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
    })
    .command('update', 'Update a task', {
        description: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
        completado: { demand: true, default: true, desc: "Complete task" }
    })
    .help()
    .argv;


module.exports = {
    argv,
}
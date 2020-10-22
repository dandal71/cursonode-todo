const description = { demand: true, alias: 'd', desc: 'Descripción de la tarea' };
const completado = { alias: 'c', default: true };

const argv = require('yargs')
    .command('add', 'Add a new task', { description })
    .command('list', 'List all task created')
    .command('update', 'Update a task', { description, completado })
    .command('delete', 'Delete a task', { description })
    .help()
    .argv;


module.exports = {
    argv,
}
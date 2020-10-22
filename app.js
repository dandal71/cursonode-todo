const { argv } = require('./config/yargs');

const comando = argv._[0];

switch (comando) {
    case 'add':
        console.log('Add a new task')
        break;
    case 'update':
        console.log('Update an existing task');
        break;
    case 'list':
        console.log('List all created tasks');
        break;
    default:
        console.log('Wrong command');
        break;
}
const db = require('../../db/index');
const { team } = db
db.sequelize.sync();

async function find() {
    //* sequelize function
    info =  await team.findAll();
}

module.exports = {
    find
}
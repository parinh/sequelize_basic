const db = require('../../db/index');
const { player } = db
db.sequelize.sync();

async function find() {
    //* sequelize function
    result = await player.findAll();
    return (result)
}

async function findById(id) {
    result = await player.findOne({
        //attributes: ['name', ['tid','team'] , 'age'], สามารถเลือกเฉพาะ attributes ที่ต้องการได้ และ ['tid','team'] เขียนเป็น sql ก็จะได้ แบบนี้ครับ tid AS team
        where: { pid: id }
    });
    return (result)
}

async function create(data) {
    result = await player.create({
        name: data.name,
        age: data.age,
        position: data.position,
        tid: data.tid,
    })

    return (result)
}

async function update(id) {
    result = await player.update({
        position: 'ST'
    }, {
        where: { pid: id }
    })
    return (result)
}


module.exports = {
    find,
    findById,
    create,
    update
}
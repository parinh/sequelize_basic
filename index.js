const express = require("express");
const app = express();
app.use(express.json());
const playerRouter = require("./src/routes/player.route");
const teamRouter = require("./src/routes/team.route");

// app.get('/playerInfo', async (req, res) => {
//   info =  await player.findAll();
//   res.json(info);
// });

// app.get('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.findOne({
//     //attributes: ['name', ['tid','team'] , 'age'], สามารถเลือกเฉพาะ attributes ที่ต้องการได้ และ ['tid','team'] เขียนเป็น sql ก็จะได้ แบบนี้ครับ tid AS team
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.json(info);
//   }

// });

// app.post('/playerInfo', async (req, res) => {
//   data  =  req.body.data;
//   info =  await player.create({
//     name: data.name,
//     age: data.age,
//     position: data.position,
//     tid: data.tid,
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.status(200).json(info);
//   }
// });

// app.put('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.update({ position: 'ST' },{
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.sendStatus(200);
//   }
// });
// app.delete('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.destroy({
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.sendStatus(200);
//   }
// });

app.use("/player", playerRouter.router);
app.use("/team", teamRouter.router);

app.get("/", (req, res) => {
  res.send("Successful response.");
});


app.use((_req, res) => {
  res.sendStatus(501);
});

app.listen(3000, () =>{
  console.log("sever run on port " + 3000);
});
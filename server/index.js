const express = require('express');
const db = require('../database/postgres.js');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/mainbody/:id', ({ params }, res) => {
  const { id } = params;
  // console.log('query is : ', query);
  db.getOne(id, (err, data) => {
    if (err) {
      // console.log('error: ', err);
      res.sendStatus(404);
    } else {
      // console.log('returned data: ', data);
      res.status(200).send(data);
    }
  });
});

// app.post('/mainbody/:id', ({ body }, res) => {
//   models.saveOne(body, (err) => {
//     if (err) {
//       // console.log('error: ', err);
//       res.sendStatus(404);
//     } else {
//       // console.log('returned data: ', data);
//       res.sendStatus(200);
//     }
//   });
// });

// app.put('/mainbody/:id', ({ body, params: { id } }, res) => {
//   const changeData = { id, body };
//   console.log(JSON.stringify(changeData));
//   models.changeOne(changeData, (err) => {
//     if (err) {
//       // console.log('error: ', err);
//       res.sendStatus(404);
//     } else {
//       // console.log('returned data: ', data);
//       res.sendStatus(200);
//     }
//   });
// });

// app.delete('/mainbody/:id', ({ params: { id } }, res) => {
//   const deleteId = { proxyId: id };
//   console.log(JSON.stringify(deleteId));
//   models.deleteOne(deleteId, (err) => {
//     if (err) {
//       // console.log('error: ', err);
//       res.sendStatus(404);
//     } else {
//       // console.log('returned data: ', data);
//       res.sendStatus(200);
//     }
//   });
// });

module.exports = app;

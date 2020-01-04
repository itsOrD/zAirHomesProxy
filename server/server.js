const express = require('express');
const cors = require('cors');
const path = require('path');
const rp = require('request-promise');
// const proxy = require('http-proxy-middleware');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());
app.use(express.json());

app.route('/More-homes/bundle.js')
  .get((req, res) => {
    rp(`http://127.0.0.1:3005/bundle.js`)
    // rp(`https://more-homes-bundle.s3-us-west-2.amazonaws.com/bundle.js`)
      // .then((body) => console.log(body))
      .then((body) => res.send(body))
      .catch(() => res.sendStatus(500))
      .finally(() => console.log('Morehomes should be oprational!'))
  })
app.route('/MoreHomes')
  .get((req, res) => {
    rp(`http://127.0.0.1:3005/?id=`)
      .then((body) => res.send(body))
      .catch(() => res.sendStatus(500))
  })

// app.get('/photos/:id', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://18.218.52.58:3001/photos/${id}`);
// })

// app.get('/listings/:id', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://54.153.105.148:3002/listings/${id}`);
// })

// app.get('/booking', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://52.53.211.152:3333/booking/?id=25`);
// })

// app.get('/room', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://52.53.211.152:3333/room/?id=25`);
// })

// app.get('/reviews/:id/', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://18.218.58.47:3004/reviews/${id}`);
// })

// app.get('/MoreHomes', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://localhost:3005/MoreHomes/${id}`);
//   // res.redirect(`http://3.14.81.50/MoreHomes`);
// })

// app.use('/MoreHomes',
//   proxy({
//     target: 'http://3.14.81.50/MoreHomes',
//       pathRewrite: (path, req) => {
//         return path.split('/').slice(2).join('/');
//       }
//     })
// );

// app.use('/booking',
//   proxy({
//     target: 'http://52.53.211.152:3333/booking',
//       pathRewrite: (path, req) => {
//         return path.split('/').slice(2).join('/');
//       }
//     })
// );

// app.use('/room',
//   proxy({
//     target: 'http://52.53.211.152:3333/room',
//       pathRewrite: (path, req) => {
//         return path.split('/').slice(2).join('/');
//       }
//     })
// );

app.listen(port, () => {
    console.log('Server is listening on port 8080')
});
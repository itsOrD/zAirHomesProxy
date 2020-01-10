require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const rp = require('request-promise');
const ip = require('./ip.js');
const proxy = require('http-proxy-middleware');

const app = express();

// process.env.PORT || 
const port = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/photos/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://${ip.photos}/photos/${id}`);
});

app.get('/listings/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://${ip.info}/listings/${id}`);
});

app.use('/booking',
  proxy({
    target: `http://${ip.booking}/booking`,
    pathRewrite: (path, req) => {
      var querystring = '?';
      for (key in req.query) {
        if (querystring !== '?') {
          querystring += '&';
        }
        querystring += `${ key }=${ req.query[key] }`;
      }
      return querystring;
    }
  })
);

app.use('/room',
  proxy({
    target: `http://${ip.rooms}/room`,
    pathRewrite: (path, req) => {
      var querystring = '?';
      for (key in req.query) {
        if (querystring !== '?') {
          querystring += '&';
        }
        querystring += `${ key }=${ req.query[key] }`;
      }
      return querystring;
    }
  })
);

app.get('/reviews/:id/', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://${ip.reviews}/reviews/${id}`);
});

app.route('/MoreHomes')
  .get((req, res) => {
    rp(`http://${ip.morehomes}/MoreHomes/?id=`)
      .then((body) => res.send(body))
      .catch(() => res.sendStatus(500))
  });

  app.listen(port, () => {
    console.log('Server is listening on port 8080')
  });


// --- PREVIOUS BUILD BELOW THIS LINE ---

// app.get('/booking', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://${ip.booking}:3333/booking/?id=25`);
// })

// app.get('/room', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://${ip.rooms}:3333/room/?id=25`);
// })

// app.get('/MoreHomes', (req, res) => {
//   const { id } = req.params;
//   res.redirect(`http://localhost:3005/$id=${id}`);
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

const express = require('express');const cors = require('cors');
const path = require('path');
const rp = require('request-promise');
const ip = require('./ip.js');
const proxy = require('http-proxy-middleware');
const app = express();

let photos_q = () => {
  app.get('/photos/:id', (req, res) => {
    const { id } = req.params;
    res.redirect(`http://${ip.photos}/photos/${id}`);
  });
};

let listings_q = () => {
  app.get('/listings/:id', (req, res) => {
    const { id } = req.params;
    res.redirect(`http://${ip.info}/listings/${id}`);
  });
};

let booking_q = () => {
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
};

let rooms_q = () => {
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
};

let reviews_q = () => {
  app.get('/reviews/:id/', (req, res) => {
    const { id } = req.params;
    res.redirect(`http://${ip.reviews}/reviews/${id}`);
  });
};

let morehomes_q = () => {app.route('/MoreHomes')
  .get((req, res) => {
    rp(`http://${ip.morehomes}/MoreHomes/?id=`)
      .then((body) => res.send(body))
      .catch(() => res.sendStatus(500))
  })
};

const allQs = Promise.all([photos_q()]) 
  // listings_q, booking_q, rooms_q, reviews_q, morehomes_q])

//  .then(body => console.log(body))
//  .catch((err) => console.log( 'Promise all error: ', err))

module.exports = allQs;

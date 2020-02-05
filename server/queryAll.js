const ip = require('./ip.js');
const rp = require('request-promise');

const qphotos = `http://${ip.photos}/photos`;
const qinfo = `http://${ip.info}/listings`;
const qbooking = `http://${ip.booking}/booking`;
const qroom = `http://${ip.rooms}/room`;
const qreviews = `http://${ip.reviews}/reviews`;
const qmorehomes = `http://${ip.morehomes}/MoreHomes`;

const batchOne = [qphotos, qinfo, qreviews];
const batchTwo = [qbooking, qroom, qmorehomes];
// const comboBatch = [qphotos, qinfo, qbooking, qroom, qreviews, qmorehomes];

const allQs = (req, res) => {
  const { id } = req.params;
  const dataDump = [];
  Promise.all([
    Promise.all(batchOne.map(url =>
      rp(`${url}/${id}`)
        .then(data => dataDump.push(data))
        .catch(err => dataDump.push(err))
    )),
    Promise.all(batchTwo.map(url => 
      rp(`${url}/?id=${id}`)
        .then(data => dataDump.push(data))
        .catch(err => dataDump.push(err))
    ))
  ])
  // Promise.all([comboBatch.map(uri => 
  //   rp(`${uri}/${id}`)
  //     .then(info => dataDump.push(info))
  //     .catch(err => console.error(err))
  //   )])
  .then(() => res.send(dataDump))
  .catch(err => console.log('allqs export error: ', err))
}

module.exports = allQs;

const ip = require('./ip.js');

const qphotos = `http://${ip.photos}/photos/`;
const qinfo = `http://${ip.info}/listings/`;
const qbooking = `http://${ip.booking}/booking`;
const qroom = `http://${ip.rooms}/room`;
const qreviews = `http://${ip.reviews}/reviews/${id}`;
const qmorehomes = `http://${ip.morehomes}/MoreHomes/?id=`;

const batchOne = [qphotos, qinfo, qreviews]
const batchTwo = [qbooking, qroom, qmorehomes]

module.exports.allQs = (req, res) => {
  const { id } = req.params;
  const resp = [];
  Promise.all([
    Promise.all(batchOne.map(url =>
      rp(`${url}/${id}`)
      .then(data => resp.push(data))
      .catch(err => resp.push(data))
    )),
    Promis.all(batchTwo.map(url => 
      rp(`${url}/${id}`)
      .then(data => resp.push(data))
      .catch(err => resp.push(err))
    ))
  ])
  .then((resp) => res.send(resp))
}

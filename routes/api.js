var express = require('express');
var router = express.Router();
var request = require('axios');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  request.post('http://134.209.148.209:9080/test',{}).then(r =>{
    return res.send({data: r.data})
  }).catch(e => {
    return res.send({error: e});
  })
});
module.exports = router;

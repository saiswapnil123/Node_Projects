var express = require('express')
const getUsers = require('../Services/service');
var router = express.Router()
// const test = (req, res, next) => {
//     if (req.params.id === 'err') {
//         next(err);
//     }
//     next();
// }

router.get('/select',async (req, res) => {
    const result = await getUsers();
    res.send(result);
});
// router.use((err, req, res, next) => {
//     if (err) {
//         res.send('error occoured')
//     }
// });
module.exports = router;
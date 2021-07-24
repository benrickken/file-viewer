var express = require('express')
var multer = require('multer')
var upload = multer({ dest: './public/data/uploads/' })
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { mimetype: null, originalname: null, size: null })
})

router.post('/', upload.single('uploaded-file'), function (req, res, next) {
  const { file } = req
  const { mimetype, originalname, size } = file
  res.render('index', { mimetype, originalname, size })
})

module.exports = router

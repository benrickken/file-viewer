var express = require('express')
var multer = require('multer')
var upload = multer({ dest: './public/data/uploads/' })
var router = express.Router()
var FileViewer = require('../lib/FileViewer')
var ImageViewStrategy = require('../lib/ImageViewStrategy')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { mimetype: null, originalname: null, size: null, output: null, error: null })
})

router.post('/', upload.single('uploaded-file'), function (req, res, next) {
  const { file } = req
  if (!file) {
    return res.render('index', {
      mimetype: null,
      originalname: null,
      size: null,
      output: null,
      error: 'File not found',
    })
  }

  const { mimetype, originalname, size, filename } = file
  const fileViewer = new FileViewer(new ImageViewStrategy())

  const output = fileViewer.displayHTML(`/data/uploads/${filename}`)
  res.render('index', { mimetype, originalname, size, output, error: null })
})

module.exports = router

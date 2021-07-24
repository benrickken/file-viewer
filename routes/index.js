const express = require('express')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const router = express.Router()
const FileViewer = require('../lib/FileViewer')
const ImageViewStrategy = require('../lib/ImageViewStrategy')
const CsvViewStrategy = require('../lib/CsvViewStrategy')

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

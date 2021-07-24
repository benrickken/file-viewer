const express = require('express')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const router = express.Router()
const FileViewerFactory = require('../lib/FileViewerFactory')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { mimetype: null, originalname: null, size: null, output: null, error: null })
})

router.post('/', upload.single('uploaded-file'), async function (req, res, next) {
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

  const { mimetype, originalname, size, path } = file
  const fileViewer = FileViewerFactory(mimetype)
  const output = await fileViewer.displayHTML(path)
  res.render('index', { mimetype, originalname, size, output, error: null })
})

module.exports = router

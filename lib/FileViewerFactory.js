const FileViewer = require('../lib/FileViewer')
const ImageViewStrategy = require('../lib/ImageViewStrategy')
const CsvViewStrategy = require('../lib/CsvViewStrategy')

const FileViewerFactory = filetype => {
  const getStrategy = filetype => {
    switch (filetype) {
      case 'text/csv':
        return new CsvViewStrategy()
      case filetype.match(/^image\/.*/).input:
        return new ImageViewStrategy()
    }
  }

  return new FileViewer(getStrategy(filetype))
}

module.exports = FileViewerFactory

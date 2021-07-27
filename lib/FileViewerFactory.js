const ImageViewer = require('../lib/ImageViewer')
const CsvViewer = require('../lib/CsvViewer')

class FileViewerFactory {
  static create = (file, options = {}) => {
    const { mimetype } = file

    switch (mimetype) {
      case 'text/csv':
        return new CsvViewer()
      case mimetype.match(/^image\/.*/).input:
        return new ImageViewer()
    }
  }
}

module.exports = FileViewerFactory

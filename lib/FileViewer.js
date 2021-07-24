class FileViewer {
  #filetype

  constructor(filetype) {
    this.#filetype = filetype
  }

  displayHTML(filepath) {
    return this.#filetype.displayHTML(filepath)
  }
}

module.exports = FileViewer

class ImageViewStrategy {
  displayHTML(filepath) {
    const src = filepath.replace('public', '')
    return `<img src="${src}">`
  }
}

module.exports = ImageViewStrategy

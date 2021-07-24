const fs = require('fs')
const parse = require('csv-parse')

class CsvViewStrategy {
  async displayHTML(filepath) {
    const parser = fs.createReadStream(filepath).pipe(parse())

    let tableRowsString = ''
    for await (const record of parser) {
      tableRowsString += `<tr><td>${record.join('</td><td>')}</td></tr>`
    }

    return `<table>${tableRowsString}<table>`
  }
}

module.exports = CsvViewStrategy

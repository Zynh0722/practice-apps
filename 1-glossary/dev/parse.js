let fs = require('fs');

fs.readFile("dev/unparsed_sample_data.txt", function(err, buf) {
  let content = [...buf.toString().matchAll(/(\w+)\s*\(.*?\)\s*(.+)/g)].map(match => ({ word: match[1], definition: match[2] }))
  content = JSON.stringify(content, null, 2)
  fs.writeFile('dev/testData.json', content, err => {
    if (err) {
      console.error(err)
      return
    }
  })
});
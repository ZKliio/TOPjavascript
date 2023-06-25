const http = require('http'); // imports http module into local scope(this file)
const fs = require('fs');

// const hostname = '127.0.0.1'  // hostname n port assigned
// const port = 3000

const content = "This is a test file!";
//2 different ways. writeFile vs writeFileSync

fs.writeFile('feedMe\\feedMe.txt', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });


// fs.writeFileSync('./feedMe/feedMe.txt', content, err => {
//     console.err(err);
// });
  // file written successfully


// try {
//   fs.writeFileSync('./feedMe/feedMe.txt', content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }
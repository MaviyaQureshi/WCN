// ANY ONE THAT SUITS YOU!!

function fetchdata(cb) {
  setTimeout(() => {
    let data = { pcode: 1001, pname: "orange" };
    cb(data);
  }, 2000);
}

console.log("Starts here");

fetchdata(function (data) {
  console.log(data);
  console.log("Ends here");
});

const fs = require("fs");

const data = fs.readFile("node.txt", "utf-8", function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

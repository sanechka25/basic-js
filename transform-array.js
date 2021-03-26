const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw 'Error'
  let res = [];
  for(i = 0; i < arr.length; i++){
    if (["--double-next",'--discard-next',"--double-prev","--discard-prev"].includes(arr[i])) continue;
    if (arr[i - 1] === "--double-next") res.push(arr[i]);
    if (arr[i - 1] === '--discard-next') continue;
    if (arr[i + 1] === "--double-prev") res.push(arr[i]);
    if (arr[i + 1] === "--discard-prev") continue;
    res.push(arr[i]);
  }
  return res;
};

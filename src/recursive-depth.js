const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 0;
    
    if (Array.isArray(arr) == true) {
      
          for (let i = 0; i < arr.length; i++) {
            depthArr = Math.max(depthArr, this.calculateDepth(arr[i]));
          }
      
      depthArr++;
    }
    
    return depthArr;
  }
};
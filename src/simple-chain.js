const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],
  getLength() {
   return this.arr.length
  },
  addLink(value) {
     this.arr.push(String(value));
     return this
  },
  removeLink(position) {
    if( position<1 || position>this.arr.length){ 
       this.arr = [];
       throw "Invalid position"
      }
   this.arr.splice(position -1 ,1);
   return this
  },
  reverseChain() {
   this.arr.reverse();
  return this
  },
  finishChain() {
   let result = "( " + this.arr.join(" )~~( ") + " )";
   this.arr = [];
   return result;
  }
};

module.exports = chainMaker;

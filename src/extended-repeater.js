const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != "string") str = String(str);
  if (options.hasOwnProperty("addition") && options.addition != "string") options.addition = String(options.addition);

  options.separator = options.separator || '+';
  options.additionRepeatTimes = options.additionRepeatTimes || 0;
  options.additionSeparator = options.additionSeparator || '|';
  options.addition = options.addition || "";
  let string = "";
  let additionAdd = options["addition"];
  for (let i = 1; i < options["additionRepeatTimes"]; i++) {
    additionAdd += `${options["additionSeparator"]}${options["addition"]}`;
  }

  for (let j = 1; j < options["repeatTimes"]; j++) {
    string += `${options["separator"]}${str}${additionAdd}`;
  }
  return `${str}${additionAdd}${string}`;
};
  
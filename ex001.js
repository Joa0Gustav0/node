/* console.log("Hello World!");

//Variables
const greetings = "Welcome, dear friend!";
const greetingEmoji = "🐺"

console.log(greetings, greetingEmoji); */

const sum = function (args) {
  var res = 0;
  args.forEach((num) => {
    res += num;
  });

  return res;
};
const sub = function (args) {
  var res = args[0];
  args.forEach((num, i) => {
    if (i > 0) {
      res -= num;
    }
  });
  return res;
};

/* console.log("The sum result is: " + sum(2, 8, 1, 9)); */

module.exports = {
  sumFunc(...args) {
    return sum(args);
  },
  subFunc(...args) {
    return sub(args);
  }
};

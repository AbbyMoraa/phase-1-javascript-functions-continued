// code your solution here
// 1. saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. mondayWork function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. wrapAdjective function
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Export for testing
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective
};

// -----------------------------
// Console.log test examples
// -----------------------------
console.log(saturdayFun());                // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog"));  // "This Saturday, I want to bathe my dog!"

console.log(mondayWork());                 // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const wrapStar = wrapAdjective("*");
console.log(wrapStar("a hard worker"));    // "You are *a hard worker*!"

const wrapPipes = wrapAdjective("||");
console.log(wrapPipes("dedicated"));       // "You are ||dedicated||!"

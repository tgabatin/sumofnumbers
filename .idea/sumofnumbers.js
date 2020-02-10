const numArray = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (let num of nums) {
    total += nums;
  }
  return total;
}

console.log(sumFor(numArray));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while (i < num.length) {
    total += num[i];
  }
  return total;
}

console.log(sumWhile(numArray));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
    return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(numArray));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numArray));
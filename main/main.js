module.exports = function main(input) {
  // Write your code here
  var sum = 0;
  for (var i = 0;i<input.length;i++){
	  sum = sum + parseInt(input[i]);
  }
  return sum;
};

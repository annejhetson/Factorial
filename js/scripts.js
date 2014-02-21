var recurringFactorialFinder = function(numberToFactorial) {

  if (isNaN(numberToFactorial)){
    return "Please enter a numerical value.";

  } else if (numberToFactorial === 0) {
    return 1;

  } else if (numberToFactorial < 0) {
    return "Please enter a positive intiger.";

  } else if (numberToFactorial >= 0) {
    return  numberToFactorial * recurringFactorialFinder(numberToFactorial - 1);
    }
};

var loopFactorialFinder = function (numberToFactorial) {
var placeholderValue = 1;

  if (isNaN(numberToFactorial)){
    return "Please enter a numerical value.";

  } else if (numberToFactorial === 0) {
    return 1;

  } else if (numberToFactorial < 0) {
    return "Please enter a positive intiger.";

  } for (numberToFactorial; numberToFactorial > 1; numberToFactorial -= 2) {
      placeholderValue = placeholderValue * (numberToFactorial * (numberToFactorial - 1));
    }
    return placeholderValue;
};

$(document).ready(function() {
  $("form#value-input").submit(function(event) {

    var numberToFactorial = parseInt($("input#factorial-number").val());
    var factorialValue = recurringFactorialFinder(numberToFactorial);

    $("#final-value").text(factorialValue);
    $("#result").show();

    event.preventDefault();

  });
});



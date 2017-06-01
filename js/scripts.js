var cupsToGallons = function(number1) {
  return number1/16;
  };

  var ouncesToGrams = function(number1) {
    return number1*28.3495;
  };


$(document).ready(function() {

  $("#cupsToGallons").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#userInputCups").val());
  var result = cupsToGallons(number1);
  $('#cupsToGallonsOutput').text(result);
  $('#cupsToGallonsOutput2').text(number1);
  });

  $("#ouncesToGrams").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#userInputOunces").val());
  var result = ouncesToGrams(number1);
  $('#ouncesToGramsOutput').text(result);
  $('#ouncesToGramsOutput2').text(number1);
  });

});

$(document).ready(function(){

  var sentence = prompt("Enter a sentence: ");

  alert(sentence);

  var result = sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();

  alert(result);

});

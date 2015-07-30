$(document).ready(function() {

  console.log("sanity check");
  // alert ("Ready for DOM manipulation");

  // sets background of secret box div to white
  $('#secretBox').css({"background-color": "white"});

  // sets class of boxType1 and boxType2 in row 1 to boxType3
  $('#row1').children()
  .removeClass('boxType1 boxType2')
  .addClass('boxType3');

  // hides last div in row 4
  $('#row4').children()
  .last()
  .hide();

  // sets background of all red boxes to white
  $('#container').children()
  .children('.boxType1')
  .css('background-color', 'white');

  // removes styling on first two boxes by removing classes
  var firstBox = $('#row2').children().first();
  var secondBox = firstBox.next();
  firstBox.removeClass('boxType1 boxType2 boxType3');
  secondBox.removeClass('boxType1 boxType2 boxType3');

  // selects all box divs with the exception of secret box
  $('#container')
  .children()
  .children('.box')
  .not('#secretBox')
  .css('width', '2px');
});

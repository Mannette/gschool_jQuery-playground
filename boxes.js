$(document).ready(function() {

  console.log("sanity check");
  // alert ("Ready for DOM manipulation");

  $('#secretBox').css({"background-color": "white"});

  $('#row1').children().removeClass('boxType1 boxType2').addClass('boxType3');

  $('#row4').children().last().hide();

  $('#container').children().children('.boxType1').css('background-color', 'white');

});

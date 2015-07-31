$(document).ready(function() {

  console.log("sanity check");
  // alert ("Ready for DOM manipulation");

  // // sets background of secret box div to white
  // $('#secretBox').css({"background-color": "white"});
  //
  // // sets class of boxType1 and boxType2 in row 1 to boxType3
  // $('#row1')
  // .children()
  // .removeClass('boxType1 boxType2')
  // .addClass('boxType3');
  //
  // // hides last div in row 4
  // // $('#row4')
  // // .children()
  // // .last()
  // // .hide();
  //
  // // sets background of all red boxes to white
  // $('#container')
  // .children()
  // .children('.boxType1')
  // .css('background-color', 'white')
  // // adds link to galvanize on every red box
  // .attr('href', 'http://www.galvanize.com/');
  //
  // // removes styling on first two boxes
  // var firstBox = $('#row2').children().first();
  // var secondBox = firstBox.next();
  // firstBox.removeClass('boxType1 boxType2 boxType3');
  // secondBox.removeClass('boxType1 boxType2 boxType3');
  //
  // // selects all box divs with the exception of secret box and sets width to 2px
  // // $('#container')
  // // .children()
  // // .children('.box')
  // // .not('#secretBox')
  // // .css('width', '2px');
  //
  // // logs position of click
  // $('#container').on('click', function() {
  //   console.log($(this).position());
  // });
  //
  // // adds puppy image to whichever box div is clicked
  // $('.box').on('click',function() {
  //   // var dogPic = '<img src=http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg>';
  //   $(this).append('<img src=http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg>');
  //   $('img').css({'width': '95%', 'height': '100%'});
  //
  // });
  //
  // // removes puppy image when clicked again
  // $('.box').on('click', 'img', function(event) {
  //   // console.log('test');
  //   $(this).remove();
  //   event.stopPropagation();
  // });

  $('#container').on('click', function(event) {
    var target = event.target;
    console.log(target);
    $(this).css('background', '#3cfa37');
    if (target.className.split(' ')[0] === 'box') {
      // can also use $(target).hasClass('box')
      console.log('test');
      $(this).css('background', 'black');
      $(target).css('background', 'white');

    }

  });



});

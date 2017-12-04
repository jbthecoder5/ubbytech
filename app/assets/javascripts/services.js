document.addEventListener("turbolinks:load", function(){
  console.log('loading service.js file');

  $('#card1').on('click', function() {
    $('#serv1').css({
      display: 'flex'
    });

    $('#serv2, #serv3, #serv4').css({
      display: 'none'
    });
  });


  $('#card2').click(function(){
    $('#serv1, #serv3, #serv4').css({
      display: 'none'
    });

    $('#serv2').css({
      display: 'flex'
    });
  });


  $('#card3').click(function(){
    $('#serv1, #serv2, #serv4').css({
      display: 'none'
    });

    $('#serv3').css({
      display: 'flex'
    });
  });

  $('#card4').click(function(){
    $('#serv1, #serv2, #serv3').css({
      display: 'none'
    });

    $('#serv4').css({
      display: 'flex'
    });
  });


  $('#expand-trigger').on('click', function(){
    $('.tool-holder').toggleClass('hideMe');
  });


  function hideTools() {
    // $('#serv-tools').toggle(function(){

  //});
  }

});

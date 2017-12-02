document.addEventListener("turbolinks:load", function(){
  console.log('loading service.js file');



  $('#card1').on('click', function() {
    $('#serv1').css({
      display: 'flex'
    });

    $('#serv2').css({
      display: 'none'
    });

    $('#serv3').css({
      display: 'none'
    });

    $('#serv4').css({
      display: 'none'
    });
  });


  $('#card2').click(function(){
    $('#serv1').css({
      display: 'none'
    });

    $('#serv2').css({
      display: 'flex'
    });

    $('#serv3').css({
      display: 'none'
    });

    $('#serv4').css({
      display: 'none'
    });
  });

  $('#card3').click(function(){
    $('#serv1').css({
      display: 'none'
    });

    $('#serv2').css({
      display: 'none'
    });

    $('#serv3').css({
      display: 'flex'
    });

    $('#serv4').css({
      display: 'none'
    });
  });

  $('#card4').click(function(){
    $('#serv1').css({
      display: 'none'
    });

    $('#serv2').css({
      display: 'none'
    });

    $('#serv3').css({
      display: 'none'
    });

    $('#serv4').css({
      display: 'flex'
    });
  });



  function hideTools() {
    // $('#serv-tools').toggle(function(){

  //});
  }

});

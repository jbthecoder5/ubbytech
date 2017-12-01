document.addEventListener("turbolinks:load", function(){
  console.log('loading service.js file');



  $('#card1').click(function() {
    $('#serv1').css({
      display: 'flex',
      "justify-content": "center"
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
      display: 'flex',
      "justify-content": "center"
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
      display: 'flex',
      "justify-content": "center"
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
      display: 'flex',
      "justify-content": "center"
    });
  });



  function hideTools() {
    // $('#serv-tools').toggle(function(){

  //});
  }

});

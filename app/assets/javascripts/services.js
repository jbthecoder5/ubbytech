document.addEventListener("turbolinks:load", function(){
  console.log('loading service.js file');

  $('#card1').click(function(){
    $('#serv1').css({
      "display": 'block',
      "margin-left": 'auto',
      "margin-right": 'auto',
      "width": '70%'
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
      display: 'block'
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
      display: 'block'
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
      display: 'block'
    });
  });

});

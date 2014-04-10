$(function(){

  $('#magic-button').on('click', loadLighthouses);
  $('#magic-button').on('click', hideMagicButton);
  

  $('#spring-cleaning').hide();
  $('#spring-cleaning').on('click', clearLighthouses);
  $('#spring-cleaning').on('click', hideSpringCleaningButton);

  function loadLighthouses() {
    var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=8016d14255074769a95cf9212ada71a1&callback=?";
    $.ajax(url, {
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
          for(i= 0; i < data.data.length; i++) {
            var lighthouse = data.data[i];
            $('<img src=" ' + lighthouse.images.low_resolution.url + ' " class="image"/> ').hide().appendTo($('body')).fadeIn(i * 300);
          }

        },
        error: function() {
          alert('Error!')
        }
    });
  }

  
  function clearLighthouses() {
    $('.image').fadeOut(i * 300);
  }

  function hideMagicButton() {
    $('#magic-button').hide();
    $('#spring-cleaning').show();
  }

  function hideSpringCleaningButton() {
    $('#spring-cleaning').hide();
    $('#magic-button').show();
  }

});



$(function(){

  $('#magic-button').on('click', loadLighthouses);

  function loadLighthouses() {
    var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=8016d14255074769a95cf9212ada71a1&callback=?";
    $.ajax(url, {
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
          for(i= 0; i < data.data.length; i++) {
            var lighthouse = data.data[i];
            $('<img src=" ' + lighthouse.images.low_resolution.url + ' " class="image"/> ').hide().appendTo($('body')).fadeIn(i * 600);
          }

        },
        error: function() {
          alert('Error!')
        }
    });
  }

});



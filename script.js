

$(document).ready(function() {
    $.ajax({
      url: 'restaurants.json',
      success: function(data){
        console.log(data)
        $('#table').dynatable({
          dataset: {
            records: data
          }
        });
      }
    });
} );


$(document).ready(function() {
    $.ajax({
      url: 'restaurants.json',
      success: function(data){
        console.log(data)
        var dynatable = $('#table').dynatable({
          dataset: {
            records: data
          },
          features:{
            paginate: false,
          }
        }).data('dynatable');
        $('#search-rating').change( function() {
          var value = $(this).val();
          if (value === "") {
            dynatable.queries.remove("food");
          } else {
            dynatable.queries.add("food",value);
          }
          dynatable.process();
        });
      }
    });


} );
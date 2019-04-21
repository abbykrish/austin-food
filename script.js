

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
          }, 
          inputs: {
            queryEvent: 'keyup'
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
        $('#search-price').change( function() {
          var value = $(this).val();
          if (value === "") {
            dynatable.queries.remove("price");
          } else {
            dynatable.queries.add("price",value);
          }
          dynatable.process();
        });
      }
    });


} );

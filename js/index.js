$('#btnViewAdvancedDetails').click(function() {
    $.ajax({
      url: 'summoner-stats',
      type: 'GET',
      data: {'summoner_id': $('#summoner-id').text()},
      success: function() { return 200 },
      erro: function() { alert($('#summoner-id').text())}
    });
})

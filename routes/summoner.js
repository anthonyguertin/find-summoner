var request = require('request')
var handlebars = require('handlebars')

module.exports = function(app) {
    app.get('/summoner-by-name', function(req, res) {
        var summoner_name = req.query.summoner_name

        console.log('retrieving data for summoner named ' + summoner_name)
        var options = 
        {
            "Content-Type" : "application/json",
            "url" : "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + req.query.summoner_name + "?api_key=RGAPI-e935b707-0a8a-4c2d-a4a0-840477812e08"
        }

        request.get(options, function(err, httpResponse, body) {
            if (err) 
            {
                console.log(err) 
                return
            }

            var nameOfSummoner= Object.keys(JSON.parse(body))[0];
            var result = JSON.parse(body)[nameOfSummoner];

            res.render('summoner', {
                name: result.name,
                summonerLevel: result.summonerLevel,
                id: result.id,
                revisionDate: result.revisionDate
            });
            // /res.send(200)
        })
    })
}
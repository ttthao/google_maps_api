api_key = 'AIzaSyDqE-uKuc7N6XxCyLnRmXc3FpMjIIym_ns'

// Create client
var googleMapsClient = require('@google/maps').createClient({
    key: api_key
})

// We can parse the results by name, "Red Door Interactive",
// or by vicinity, "350 Tenth Avenue #100, San Diego"
var result_id
googleMapsClient.placesNearby({
    location: [32.7089, -117.1560], // Red Door
    radius: 50
}, function(err, response) {
    if(!err) {
        var results = response.json.results

        // Find RDI's place id
        for (var i = 0; i < results.length; i++) {
            var result = results[i]
            var result_name = result['name']
            // I think it would make more sense to query vicinity since
            // it's synonymous to address
            // var result_vicinity = result['vicinity']

            if(result_name == 'Red Door Interactive') {
                result_id = result['place_id']
                console.log("Found " + result_name + " with place_id: " + result_id)
                break
            }
        }

        googleMapsClient.place({
            placeid: result_id
        }, function (err, response) {
            if (!err) {
                console.log(response.json.result)
            } else {
                console.log(err)
            }
        })

    } else {
        console.log(err)
    }
})
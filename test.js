api_key = 'AIzaSyDqE-uKuc7N6XxCyLnRmXc3FpMjIIym_ns'

// Create client
var googleMapsClient = require('@google/maps').createClient({
    key: api_key
})

// Geocode address example from documentation
/*
googleMapsClient.geocode(
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
    if(!err) {
        console.log(response.json.results)
    } else {
        console.log(err)
    }
})
*/

googleMapsClient.placesNearby({
    location: [32.7089, -117.1560], // Red Door
    radius: 50
}, function(err, response){
    if(!err) {
        console.log(response.json.results)
    } else {
        console.log(err)
    }
})
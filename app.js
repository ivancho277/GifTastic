// api key Ohxt7aSzLjq13m7TKezI44mLur3VAS1z


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Ohxt7aSzLjq13m7TKezI44mLur3VAS1z&limit=5"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})

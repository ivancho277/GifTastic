// api key Ohxt7aSzLjq13m7TKezI44mLur3VAS1z


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });




var animal = "";
var buttonArray = [];
$("#button-addon1").on("click", ()=> {
    var newbutton = $("<button>")
    newbutton.attr("class", "animal-btn")
    animal = $("#gif-search").val();
    newbutton.text(animal);
    buttonArray.push(newbutton);
    console.log(buttonArray);
    console.log(newbutton);

    for(var i=0; i<buttonArray.length; i++){
        //$("#button-added").empty();
        $("#button-added").append(buttonArray[i]);
    }
    


})
var clickedButton;
$(".animal-btn").on("click", (e)=> {
    var clickedButton = e.target.outerText
    console.log(clickedButton)
})
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ animal +"&api_key=Ohxt7aSzLjq13m7TKezI44mLur3VAS1z&limit=5"


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);




})

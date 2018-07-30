


function badil(){
    document.getElementById("aaa").innerHTML = "<h1>Merci pour vos commentaires, cher ami!</h1>";
}

$("#form").submit(function(event){
    event.preventDefault()
    badil()
})
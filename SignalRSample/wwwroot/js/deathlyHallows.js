var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");


//create connection with signalR
var connectionDeathlyHallows = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/deathlyhallows").build();

//connect to methods that hub invokes
connectionDeathlyHallows.on("updateDeathlyHallowCount", (cloak, stone,wand) => {

    cloakSpan.innerText = cloak.toString();
    stoneSpan.innerText = stone.toString();
    wandSpan.innerText = wand.toString();
});


//invoke hub methods


//start connection

function fulfilled() {
    console.log("Connection successful");
}

function rejected() {

}
connectionDeathlyHallows.start().then(fulfilled, rejected);




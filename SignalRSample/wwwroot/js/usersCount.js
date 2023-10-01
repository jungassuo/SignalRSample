//create connection with signalR
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//connect to methods that hub invokes
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
});

//invoke hub methods
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

//start connection

function fulfilled()
{
    console.log("Connection successful");
    newWindowLoadedOnClient();
}

function rejected()
{

}
connectionUserCount.start().then(fulfilled, rejected);




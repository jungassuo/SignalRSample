//create connection with signalR
var connectionUserCount = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount", signalR.HttpTransportType.WebSockets).build();

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
    connectionUserCount.invoke("NewWindowLoaded","Bhrugen").then((val) => console.log(val));
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




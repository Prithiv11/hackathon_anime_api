let header = document.createElement("h1")
header.innerText = "Anime API"
document.body.appendChild(header);
var inputset = document.createElement("div");
inputset.className="inputBoxSet container"
var inputbox = document.createElement("input");
inputbox.placeholder="Enter a Anime name here,  for eg: Monster";
inputbox.id="inputdata";
var button = document.createElement("button");
button.innerText="Go";
inputset.appendChild(inputbox);
inputset.appendChild(button);
document.body.appendChild(inputset);
var grid = document.createElement("div");
grid.className="parentDiv"



async function call(input) {
    try {
        var api = await fetch("https://api.jikan.moe/v4/anime?q="+input);
        var AnimeData = await api.json()
        grid.innerText=""
        
        for (objects of AnimeData.data) {
            var card = document.createElement("div");
            card.className="card"
            var img = document.createElement("img");
            img.src=`${objects.images.jpg.large_image_url}`;
            var popup = document.createElement("span");
            popup.className="showMessage";
            popup.innerHTML =
            `
            <b>Name</b> : ${objects.title}<br>
            <b>Type</b> : ${objects.type}<br>
            <b>From</b> : ${objects.aired.prop.from.day}-${objects.aired.prop.from.month}-${objects.aired.prop.from.year}<br>
            <b>To</b> : ${objects.aired.prop.to.day}-${objects.aired.prop.to.month}-${objects.aired.prop.to.year}<br>
            <b>IMDB Rating</b> : ${objects.rating}
            `;
            card.appendChild(popup);
            card.appendChild(img);
            grid.appendChild(card);
        }
        document.body.appendChild(grid)
    }
    catch {
    alert("something is wrong")
}
}

button.addEventListener("click",function(){
    var input = document.getElementById("inputdata").value;
    call(input);
})


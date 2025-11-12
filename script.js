const listParent = document.getElementById("list");
const popup = document.getElementById("popup");
const popupName = document.getElementById("popupName");

listParent.addEventListener('click', function(event) {
    if(event.target.tagName === "LI") {
        console.log('You clicked on item: ' + event.target.textContent);
        createPopup(event.target);
    }
});

// Close popup when close button is clicked
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener('click', function() {
    popup.style.display = "none";
});

function createPopup(element) {
    if (popup.style.display === "none") {
        popup.style.display = "flex";
    }  else {
        popup.style.display = "none";
    }

    clearListContent();
    addTitle(element.textContent);
    displayListContent(element);
}

function addTitle(name) {
    popupName.innerText = name;
}

function displayListContent(element) {
    switch(element.textContent) {
        case "Jean Paul Gaultier Le Male Le Parfum":
            document.getElementById("item1List").style.display = "flex";
        break;
        case "Yves Saint Laurent Y Le Parfum":
            document.getElementById("item2List").style.display = "flex";
        break;
        case "Dior Sauvage Elixir": 
            document.getElementById("item3List").style.display = "flex";
        break;
        case "Chanel Bleu de Chanel Parfum":
            document.getElementById("item4List").style.display = "flex";
        break;
        default:
            document.getElementById("itemDefaultList").style.display = "flex";
        break;
    }
}

function clearListContent() {
    document.getElementById("item1List").style.display = "none";
    document.getElementById("item2List").style.display = "none";
    document.getElementById("item3List").style.display = "none";
    document.getElementById("item4List").style.display = "none";
    document.getElementById("itemDefaultList").style.display = "none";
}

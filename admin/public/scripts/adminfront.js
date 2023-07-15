function refresh() {
    window.location.reload();
}

function createnewCake() {
    document.getElementById("createCake").style.display = "flex";
    document.getElementById("orders").style.display = "none";
    document.getElementById("earnings").style.display = "none";
    document.getElementById("updateCake").style.display = "none";
}

function showOrders() {
    document.getElementById("orders").style.display = "block";
    document.getElementById("createCake").style.display = "none";
    document.getElementById("earnings").style.display = "none";
    document.getElementById("updateCake").style.display = "none";
}

function showEarnings() {
    document.getElementById("earnings").style.display = "flex";
    document.getElementById("orders").style.display = "none";
    document.getElementById("createCake").style.display = "none";
    document.getElementById("updateCake").style.display = "none";
}

function updateCake() {
    document.getElementById("updateCake").style.display = "flex";
    document.getElementById("earnings").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("createCake").style.display = "none";
}


/////////////////////////////////////////////////////////////////////


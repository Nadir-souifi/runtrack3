function addone() {
    const compteurElement = document.getElementById("compteur");
    let currentValue = parseInt(compteurElement.innerText);
    compteurElement.innerText = currentValue + 1;
}

document.getElementById("button").addEventListener("click", addone);

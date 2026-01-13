
function jsonValueKey(jsonString, key) {
    try {
       
        const jsonObject = JSON.parse(jsonString);
        
        
        if (key in jsonObject) {
            return jsonObject[key];
        } else {
            return "Clé non trouvée";
        }
    } catch (error) {
       
        return "Erreur : JSON invalide";
    }
}

window.onload = function() {
    console.log("Page chargée");
    
    
    const searchButton = document.getElementById('searchButton');
    console.log("Bouton trouvé:", searchButton);
    
    // Ajout de l'écouteur d'événement sur le bouton
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            console.log("Bouton cliqué!");
            
            // Récupération des valeurs des inputs
            const jsonString = document.getElementById('jsonString').value;
            const key = document.getElementById('key').value;
            
            console.log("JSON:", jsonString);
            console.log("Clé:", key);
            
            // Appel de la fonction principale
            const result = jsonValueKey(jsonString, key);
            console.log("Résultat:", result);
            
            // Affichage du résultat
            const resultDiv = document.getElementById('result');
            const resultText = document.getElementById('resultText');
            
            console.log("resultDiv:", resultDiv);
            console.log("resultText:", resultText);
            
            if (resultText) {
                resultText.textContent = result;
                console.log("textContent défini");
            }
            if (resultDiv) {
                resultDiv.style.display = 'block';
                console.log("display: block appliqué");
            } else {
                console.error("resultDiv non trouvé!");
            }
            
            // Gestion du style en cas d'erreur
            if (result === "Clé non trouvée" || result.startsWith("Erreur")) {
                resultDiv.classList.add('error');
            } else {
                resultDiv.classList.remove('error');
            }
        });
    } else {
        console.error("Bouton non trouvé!");
    }
};

// Test automatique au chargement (optionnel)
console.log("=== Tests de la fonction jsonValueKey ===");

// Test 1
const testJson1 = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
console.log("Test 1 - Clé 'city' :", jsonValueKey(testJson1, "city"));

// Test 2
console.log("Test 2 - Clé 'name' :", jsonValueKey(testJson1, "name"));

// Test 3
console.log("Test 3 - Clé 'nb_staff' :", jsonValueKey(testJson1, "nb_staff"));

// Test 4 - Clé inexistante
console.log("Test 4 - Clé inexistante :", jsonValueKey(testJson1, "telephone"));

// Test 5 - JSON invalide
console.log("Test 5 - JSON invalide :", jsonValueKey("ceci n'est pas du JSON", "key"));
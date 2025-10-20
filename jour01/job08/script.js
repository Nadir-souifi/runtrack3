// Fonction utilitaire pour vérifier si un nombre est premier
function estPremier(n) {
    if (n < 2) return false; // 0 et 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n est divisible par un autre nombre => pas premier
        }
    }
    return true; // aucun diviseur trouvé => n est premier
}

// Fonction principale
function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// 🔍 Tests dans la console
console.log(sommenombrespremiers(3, 5));  // 8 (les deux sont premiers)
console.log(sommenombrespremiers(4, 7));  // false (4 n'est pas premier)
console.log(sommenombrespremiers(11, 13)); // 24 (OK)
console.log(sommenombrespremiers(10, 15)); // false (aucun n'est premier)
